/*
  Warnings:

  - You are about to drop the column `name` on the `cars` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "cars_name_key";

-- AlterTable
ALTER TABLE "cars" DROP COLUMN "name";
