-- CreateTable
CREATE TABLE "Product" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "price" DOUBLE PRECISION DEFAULT 0.8,
    "quantity" INTEGER DEFAULT 0,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);
