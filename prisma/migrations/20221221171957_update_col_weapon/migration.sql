/*
  Warnings:

  - You are about to drop the column `name` on the `Weapon` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Weapon" DROP COLUMN "name",
ADD COLUMN     "nameMain" TEXT,
ADD COLUMN     "phone" TEXT;
