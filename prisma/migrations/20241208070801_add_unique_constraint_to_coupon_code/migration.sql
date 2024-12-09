/*
  Warnings:

  - You are about to alter the column `discountValue` on the `coupons` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Integer`.
  - A unique constraint covering the columns `[code]` on the table `coupons` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "coupons" ALTER COLUMN "discountValue" SET DATA TYPE INTEGER;

-- CreateIndex
CREATE UNIQUE INDEX "coupons_code_key" ON "coupons"("code");
