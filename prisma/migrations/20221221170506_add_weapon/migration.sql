-- AlterTable
ALTER TABLE "Account" ADD COLUMN     "phone" TEXT;

-- CreateTable
CREATE TABLE "Weapon" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT,

    CONSTRAINT "Weapon_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Weapon_email_key" ON "Weapon"("email");
