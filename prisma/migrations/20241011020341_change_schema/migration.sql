/*
  Warnings:

  - Made the column `balance_statement` on table `person` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "maintenance" ADD COLUMN     "cost" INTEGER;

-- AlterTable
ALTER TABLE "person" ALTER COLUMN "SSN" SET DEFAULT '000-00-0000',
ALTER COLUMN "state_id" DROP NOT NULL,
ALTER COLUMN "balance_statement" SET NOT NULL;
