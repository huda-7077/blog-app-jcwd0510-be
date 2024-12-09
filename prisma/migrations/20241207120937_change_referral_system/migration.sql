/*
  Warnings:

  - A unique constraint covering the columns `[inviteeId]` on the table `referrals` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "referrals_inviterId_key";

-- CreateIndex
CREATE UNIQUE INDEX "referrals_inviteeId_key" ON "referrals"("inviteeId");
