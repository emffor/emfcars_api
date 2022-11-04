/*
  Warnings:

  - You are about to drop the `Transmisson` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Transmisson";

-- CreateTable
CREATE TABLE "transmissions" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "transmissions_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "transmissions_name_key" ON "transmissions"("name");
