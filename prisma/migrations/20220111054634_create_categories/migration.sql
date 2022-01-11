/*
  Warnings:

  - Added the required column `phone` to the `Entreprenuers` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Entreprenuers` ADD COLUMN `phone` VARCHAR(255) NOT NULL;
