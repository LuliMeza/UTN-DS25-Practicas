/*
  Warnings:

  - The values [INFANCIA] on the enum `Categoria` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "public"."Categoria_new" AS ENUM ('FICCION', 'CIENCIA', 'HISTORIA', 'INFANTIL');
ALTER TABLE "public"."Book" ALTER COLUMN "categoria" TYPE "public"."Categoria_new" USING ("categoria"::text::"public"."Categoria_new");
ALTER TYPE "public"."Categoria" RENAME TO "Categoria_old";
ALTER TYPE "public"."Categoria_new" RENAME TO "Categoria";
DROP TYPE "public"."Categoria_old";
COMMIT;
