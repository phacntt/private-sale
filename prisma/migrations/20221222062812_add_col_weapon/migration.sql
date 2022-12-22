/*
  Warnings:

  - You are about to drop the column `phone` on the `Weapon` table. All the data in the column will be lost.
  - Added the required column `damage` to the `Weapon` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Weapon" DROP COLUMN "phone",
ADD COLUMN     "damage" INTEGER NOT NULL;
