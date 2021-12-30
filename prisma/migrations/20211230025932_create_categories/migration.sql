/*
  Warnings:

  - The primary key for the `Users` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `filedate` on the `Users` table. All the data in the column will be lost.
  - Added the required column `filedat` to the `Users` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Users` DROP PRIMARY KEY,
    DROP COLUMN `filedate`,
    ADD COLUMN `filedat` VARCHAR(255) NOT NULL,
    MODIFY `id` VARCHAR(255) NOT NULL,
    ADD PRIMARY KEY (`id`);
