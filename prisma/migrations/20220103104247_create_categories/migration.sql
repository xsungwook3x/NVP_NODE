/*
  Warnings:

  - You are about to drop the `Visit` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `Visit`;

-- CreateTable
CREATE TABLE `Visits` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,
    `phone` VARCHAR(255) NOT NULL,
    `time` VARCHAR(255) NOT NULL,
    `store_num` VARCHAR(255) NOT NULL,
    `store_name` VARCHAR(255) NOT NULL,
    `store_phone` VARCHAR(255) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
