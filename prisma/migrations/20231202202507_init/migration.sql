/*
  Warnings:

  - You are about to drop the column `createdAt` on the `coins` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `coins` table. All the data in the column will be lost.
  - You are about to drop the column `user_id` on the `coins` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "coins" DROP CONSTRAINT "coins_user_id_fkey";

-- AlterTable
ALTER TABLE "coins" DROP COLUMN "createdAt",
DROP COLUMN "updatedAt",
DROP COLUMN "user_id";
