import { User } from "@prisma/client";
import { prisma } from "../../lib/prisma";
import { hashPassword } from "../../lib/argon";
import { generateReferralCode } from "../../lib/referral";
import { generateUniqueCouponCode } from "../../lib/coupon";

interface RegisterInput
  extends Omit<
    User,
    "id" | "createdAt" | "updatedAt" | "totalPoints" | "referralCode"
  > {
  referralCode?: string;
}
export const registerServices = async (body: RegisterInput) => {
  try {
    const { name, email, password, referralCode } = body;

    const existingUser = await prisma.user.findFirst({
      where: { email },
    });
    if (existingUser) {
      throw new Error("Email already exist!");
    }
    const normalizedReferralCode = referralCode
      ? referralCode.toLowerCase()
      : null;

    let referrer = null;
    if (normalizedReferralCode) {
      referrer = await prisma.user.findUnique({
        where: {
          referralCode: normalizedReferralCode,
        },
      });

      if (!referrer) {
        throw new Error("Invalid referral code!");
      }
    }

    const hashedPassword = await hashPassword(password);
    const userReferralCode = generateReferralCode();

    const newUser = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
        referralCode: userReferralCode,
        totalPoints: 0,
      },
    });
    if (referrer) {
      await prisma.referral.create({
        data: { inviterId: referrer.id, inviteeId: newUser.id },
      });

      const pointsExpiryDate = new Date();
      pointsExpiryDate.setMinutes(pointsExpiryDate.getMinutes() + 3);

      await prisma.point.create({
        data: {
          userId: referrer.id,
          points: 10000,
          expiredAt: pointsExpiryDate,
        },
      });

      // Update referrer's total points
      await prisma.user.update({
        where: { id: referrer.id },
        data: {
          totalPoints: { increment: 10000 },
        },
      });

      const couponExpiryDate = new Date();
      couponExpiryDate.setMinutes(couponExpiryDate.getMinutes() + 3);
      const uniqueCouponCode = await generateUniqueCouponCode();
      await prisma.coupon.create({
        data: {
          userId: newUser.id,
          code: uniqueCouponCode,
          discountValue: 10000,
          expiredAt: couponExpiryDate,
        },
      });
    }
    return newUser;
  } catch (error) {
    throw error;
  }
};
