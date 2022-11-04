/*
  Warnings:

  - You are about to drop the column `transmissonId` on the `cars` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "cars" DROP CONSTRAINT "cars_transmissonId_fkey";

-- AlterTable
ALTER TABLE "cars" DROP COLUMN "transmissonId",
ADD COLUMN     "transmissionsId" TEXT;

-- AddForeignKey
ALTER TABLE "cars" ADD CONSTRAINT "cars_transmissionsId_fkey" FOREIGN KEY ("transmissionsId") REFERENCES "transmissions"("id") ON DELETE SET NULL ON UPDATE CASCADE;
