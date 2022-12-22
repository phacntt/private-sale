/*
  Warnings:

  - Added the required column `critRate` to the `Weapon` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Weapon" ADD COLUMN     "critRate" INTEGER NOT NULL;
