-- CreateTable
CREATE TABLE `Entreprenuers` (
    `id` VARCHAR(255) NOT NULL,
    `password` VARCHAR(255) NOT NULL,
    `name` VARCHAR(255) NOT NULL,
    `store_name` VARCHAR(255) NOT NULL,
    `store_num` VARCHAR(255) NOT NULL,
    `store_phone` VARCHAR(255) NOT NULL,
    `store_kind` VARCHAR(255) NOT NULL,
    `store_location` VARCHAR(255) NOT NULL,
    `store_address` VARCHAR(255) NOT NULL,
    `filename` VARCHAR(255) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
