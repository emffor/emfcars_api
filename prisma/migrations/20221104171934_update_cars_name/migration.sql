/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `cars` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `name` to the `cars` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "cars" ADD COLUMN     "name" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "cars_name_key" ON "cars"("name");
