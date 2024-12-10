/*
  Warnings:

  - You are about to drop the column `expiredAt` on the `blogs` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "blogs" DROP COLUMN "expiredAt",
ADD COLUMN     "deletedAt" TIMESTAMP(3);
