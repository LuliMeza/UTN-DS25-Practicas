-- CreateEnum
CREATE TYPE "public"."Categoria" AS ENUM ('Ficcion', 'Ciencia', 'Historia', 'Infancia');

-- CreateTable
CREATE TABLE "public"."Book" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "autor" TEXT NOT NULL,
    "categoria" "public"."Categoria" NOT NULL,
    "descripcion" TEXT NOT NULL,
    "imagen" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Book_pkey" PRIMARY KEY ("id")
);
