/*
  Warnings:

  - You are about to drop the column `address_id` on the `auxPerson` table. All the data in the column will be lost.
  - You are about to drop the column `location_id` on the `property` table. All the data in the column will be lost.
  - You are about to drop the `location` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `region` to the `auxPerson` table without a default value. This is not possible if the table is not empty.
  - Added the required column `state` to the `auxPerson` table without a default value. This is not possible if the table is not empty.
  - Added the required column `region` to the `property` table without a default value. This is not possible if the table is not empty.
  - Added the required column `state` to the `property` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "auxPerson" DROP CONSTRAINT "auxPerson_address_id_fkey";

-- DropForeignKey
ALTER TABLE "property" DROP CONSTRAINT "property_location_id_fkey";

-- AlterTable
ALTER TABLE "auxPerson" DROP COLUMN "address_id",
ADD COLUMN     "region" TEXT NOT NULL,
ADD COLUMN     "state" TEXT NOT NULL,
ADD COLUMN     "sub_division" TEXT;

-- AlterTable
ALTER TABLE "property" DROP COLUMN "location_id",
ADD COLUMN     "region" TEXT NOT NULL,
ADD COLUMN     "state" TEXT NOT NULL,
ADD COLUMN     "sub_division" TEXT;

-- DropTable
DROP TABLE "location";
