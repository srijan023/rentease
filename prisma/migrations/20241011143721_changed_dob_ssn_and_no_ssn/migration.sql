/*
  Warnings:

  - You are about to drop the column `No_ssn_reason` on the `person` table. All the data in the column will be lost.
  - You are about to drop the column `SSN` on the `person` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "person" DROP COLUMN "No_ssn_reason",
DROP COLUMN "SSN",
ADD COLUMN     "no_ssn_reason" TEXT,
ADD COLUMN     "ssn" TEXT NOT NULL DEFAULT '000-00-0000',
ALTER COLUMN "dob" SET DATA TYPE DATE;
