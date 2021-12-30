/*
  Warnings:

  - You are about to drop the column `filedat` on the `Users` table. All the data in the column will be lost.
  - Added the required column `filedate` to the `Users` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Users` DROP COLUMN `filedat`,
    ADD COLUMN `filedate` VARCHAR(255) NOT NULL;
