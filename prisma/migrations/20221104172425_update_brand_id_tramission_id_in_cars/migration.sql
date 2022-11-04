/*
  Warnings:

  - You are about to drop the column `brandsId` on the `cars` table. All the data in the column will be lost.
  - You are about to drop the column `transmissionsId` on the `cars` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "cars" DROP CONSTRAINT "cars_brandsId_fkey";

-- DropForeignKey
ALTER TABLE "cars" DROP CONSTRAINT "cars_transmissionsId_fkey";

-- AlterTable
ALTER TABLE "cars" DROP COLUMN "brandsId",
DROP COLUMN "transmissionsId",
ADD COLUMN     "brandId" TEXT,
ADD COLUMN     "transmissionId" TEXT;

-- AddForeignKey
ALTER TABLE "cars" ADD CONSTRAINT "cars_transmissionId_fkey" FOREIGN KEY ("transmissionId") REFERENCES "transmissions"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "cars" ADD CONSTRAINT "cars_brandId_fkey" FOREIGN KEY ("brandId") REFERENCES "brands"("id") ON DELETE SET NULL ON UPDATE CASCADE;
