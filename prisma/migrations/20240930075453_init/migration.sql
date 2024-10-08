-- CreateEnum
CREATE TYPE "aux_person_type" AS ENUM ('Landlord', 'Emergency_Contact');

-- CreateTable
CREATE TABLE "person" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "backup_email" TEXT,
    "contact" TEXT NOT NULL,
    "dob" TIMESTAMP(3) NOT NULL,
    "SSN" INTEGER NOT NULL,
    "No_ssn_reason" TEXT,
    "is_US_citizen" BOOLEAN,
    "drivers_license" TEXT,
    "state_id" TEXT NOT NULL,
    "passport" TEXT,
    "visa" TEXT,
    "is_International_student" BOOLEAN,
    "i_20" TEXT,
    "balance_statement" TEXT,
    "e_con_id" INTEGER,
    "landlord_id" INTEGER,
    "no_residence_detail" TEXT,
    "is_active_tenant" BOOLEAN NOT NULL,

    CONSTRAINT "person_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "property" (
    "id" SERIAL NOT NULL,
    "leased" BOOLEAN NOT NULL,
    "tenant_id" INTEGER,
    "lot_size" DOUBLE PRECISION NOT NULL,
    "structure_area" DOUBLE PRECISION,
    "parking_features" TEXT,
    "stories" TEXT NOT NULL,
    "home_type" TEXT NOT NULL,
    "sewer" TEXT,
    "water" TEXT,
    "location_id" INTEGER NOT NULL,
    "street" TEXT,
    "bedrooms" INTEGER NOT NULL,
    "bathrooms" INTEGER NOT NULL,
    "basement_type" TEXT,
    "heating_feature" TEXT,
    "cooling_feature" TEXT,
    "parcel_number" DOUBLE PRECISION NOT NULL,
    "patio_porch" TEXT NOT NULL,
    "attached_structure" BOOLEAN NOT NULL,
    "property_subtype" TEXT NOT NULL,
    "architecture_style" TEXT NOT NULL,
    "year_built" TEXT NOT NULL,

    CONSTRAINT "property_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "location" (
    "id" SERIAL NOT NULL,
    "state" TEXT NOT NULL,
    "region" TEXT NOT NULL,
    "sub_division" TEXT,

    CONSTRAINT "location_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "aux_person" (
    "id" SERIAL NOT NULL,
    "contact" TEXT NOT NULL,
    "email" TEXT,
    "name" TEXT NOT NULL,
    "person_type" "aux_person_type" NOT NULL,
    "address_id" INTEGER NOT NULL,

    CONSTRAINT "aux_person_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "person_email_key" ON "person"("email");

-- CreateIndex
CREATE UNIQUE INDEX "person_backup_email_key" ON "person"("backup_email");

-- AddForeignKey
ALTER TABLE "person" ADD CONSTRAINT "person_e_con_id_fkey" FOREIGN KEY ("e_con_id") REFERENCES "aux_person"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "person" ADD CONSTRAINT "person_landlord_id_fkey" FOREIGN KEY ("landlord_id") REFERENCES "aux_person"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "property" ADD CONSTRAINT "property_tenant_id_fkey" FOREIGN KEY ("tenant_id") REFERENCES "person"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "property" ADD CONSTRAINT "property_location_id_fkey" FOREIGN KEY ("location_id") REFERENCES "location"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "aux_person" ADD CONSTRAINT "aux_person_address_id_fkey" FOREIGN KEY ("address_id") REFERENCES "location"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
