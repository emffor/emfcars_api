-- CreateTable
CREATE TABLE "Transmisson" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Transmisson_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Transmisson_name_key" ON "Transmisson"("name");
