/*
  Warnings:

  - You are about to drop the `aux_person` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "auxPersonType" AS ENUM ('Landlord', 'Emergency_Contact');

-- CreateEnum
CREATE TYPE "maintenanceStatus" AS ENUM ('Pending', 'In_Progress', 'Resolved', 'Cancelled');

-- DropForeignKey
ALTER TABLE "aux_person" DROP CONSTRAINT "aux_person_address_id_fkey";

-- DropForeignKey
ALTER TABLE "person" DROP CONSTRAINT "person_e_con_id_fkey";

-- DropForeignKey
ALTER TABLE "person" DROP CONSTRAINT "person_landlord_id_fkey";

-- AlterTable
ALTER TABLE "person" ADD COLUMN     "forgotPasswordToken" TEXT,
ADD COLUMN     "forgotPasswordTokenExpiry" TIMESTAMP(3),
ADD COLUMN     "isVerified" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "verificationExpiry" TIMESTAMP(3),
ADD COLUMN     "verificationToken" TEXT,
ALTER COLUMN "SSN" SET DEFAULT '000-00-000',
ALTER COLUMN "SSN" SET DATA TYPE TEXT;

-- DropTable
DROP TABLE "aux_person";

-- DropEnum
DROP TYPE "aux_person_type";

-- CreateTable
CREATE TABLE "auxPerson" (
    "id" SERIAL NOT NULL,
    "contact" TEXT NOT NULL,
    "email" TEXT,
    "name" TEXT NOT NULL,
    "person_type" "auxPersonType" NOT NULL,
    "address_id" INTEGER NOT NULL,

    CONSTRAINT "auxPerson_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "maintenance" (
    "id" SERIAL NOT NULL,
    "request_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "subject" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "status" "maintenanceStatus" NOT NULL DEFAULT 'Pending',
    "person_id" INTEGER NOT NULL,
    "property_id" INTEGER NOT NULL,
    "resolution_date" TIMESTAMP(3),

    CONSTRAINT "maintenance_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "transaction" (
    "id" SERIAL NOT NULL,
    "amount" DOUBLE PRECISION NOT NULL,
    "transaction_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "person_id" INTEGER NOT NULL,
    "property_id" INTEGER NOT NULL,
    "transaction_id" TEXT NOT NULL,

    CONSTRAINT "transaction_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "message" (
    "id" SERIAL NOT NULL,
    "content" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "receiver_id" INTEGER NOT NULL,

    CONSTRAINT "message_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "notification" (
    "id" SERIAL NOT NULL,
    "content" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "notification_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "notificationRead" (
    "id" SERIAL NOT NULL,
    "personId" INTEGER NOT NULL,
    "notificationId" INTEGER NOT NULL,
    "read" BOOLEAN NOT NULL,

    CONSTRAINT "notificationRead_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "notificationRead_personId_notificationId_key" ON "notificationRead"("personId", "notificationId");

-- AddForeignKey
ALTER TABLE "person" ADD CONSTRAINT "person_e_con_id_fkey" FOREIGN KEY ("e_con_id") REFERENCES "auxPerson"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "person" ADD CONSTRAINT "person_landlord_id_fkey" FOREIGN KEY ("landlord_id") REFERENCES "auxPerson"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "auxPerson" ADD CONSTRAINT "auxPerson_address_id_fkey" FOREIGN KEY ("address_id") REFERENCES "location"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "maintenance" ADD CONSTRAINT "maintenance_person_id_fkey" FOREIGN KEY ("person_id") REFERENCES "person"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "maintenance" ADD CONSTRAINT "maintenance_property_id_fkey" FOREIGN KEY ("property_id") REFERENCES "property"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "transaction" ADD CONSTRAINT "transaction_person_id_fkey" FOREIGN KEY ("person_id") REFERENCES "person"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "transaction" ADD CONSTRAINT "transaction_property_id_fkey" FOREIGN KEY ("property_id") REFERENCES "property"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "message" ADD CONSTRAINT "message_receiver_id_fkey" FOREIGN KEY ("receiver_id") REFERENCES "person"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "notificationRead" ADD CONSTRAINT "notificationRead_personId_fkey" FOREIGN KEY ("personId") REFERENCES "person"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "notificationRead" ADD CONSTRAINT "notificationRead_notificationId_fkey" FOREIGN KEY ("notificationId") REFERENCES "notification"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
