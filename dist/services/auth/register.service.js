"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerService = void 0;
const argon_1 = require("../../lib/argon");
const referral_1 = require("../../lib/referral");
const coupon_1 = require("../../lib/coupon");
const prisma_1 = __importDefault(require("../../lib/prisma"));
const registerService = (body) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, email, password, referralCode } = body;
        const existingUser = yield prisma_1.default.user.findFirst({
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
            referrer = yield prisma_1.default.user.findUnique({
                where: {
                    referralCode: normalizedReferralCode,
                },
            });
            if (!referrer) {
                throw new Error("Invalid referral code!");
            }
        }
        const hashedPassword = yield (0, argon_1.hashPassword)(password);
        const userReferralCode = (0, referral_1.generateReferralCode)();
        const newUser = yield prisma_1.default.user.create({
            data: {
                name,
                email,
                password: hashedPassword,
                referralCode: userReferralCode,
                totalPoints: 0,
            },
        });
        if (referrer) {
            yield prisma_1.default.referral.create({
                data: { inviterId: referrer.id, inviteeId: newUser.id },
            });
            const pointsExpiryDate = new Date();
            pointsExpiryDate.setMinutes(pointsExpiryDate.getMinutes() + 10);
            yield prisma_1.default.point.create({
                data: {
                    userId: referrer.id,
                    points: 10000,
                    expiredAt: pointsExpiryDate,
                },
            });
            // Update referrer's total points
            yield prisma_1.default.user.update({
                where: { id: referrer.id },
                data: {
                    totalPoints: { increment: 10000 },
                },
            });
            const couponExpiryDate = new Date();
            couponExpiryDate.setMinutes(couponExpiryDate.getMinutes() + 10);
            const uniqueCouponCode = yield (0, coupon_1.generateUniqueCouponCode)();
            yield prisma_1.default.coupon.create({
                data: {
                    userId: newUser.id,
                    code: uniqueCouponCode,
                    discountValue: 10000,
                    expiredAt: couponExpiryDate,
                },
            });
        }
        return newUser;
    }
    catch (error) {
        throw error;
    }
});
exports.registerService = registerService;
