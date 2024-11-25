-- CreateEnum
CREATE TYPE "auxPersonType" AS ENUM ('Landlord', 'Emergency_Contact');

-- CreateEnum
CREATE TYPE "urgencyStatus" AS ENUM ('Urgent', 'Normal', 'High');

-- CreateEnum
CREATE TYPE "maintenanceStatus" AS ENUM ('Pending', 'In_Progress', 'Resolved', 'Cancelled');

-- CreateTable
CREATE TABLE "person" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "backup_email" TEXT,
    "contact" TEXT NOT NULL,
    "dob" DATE NOT NULL,
    "ssn" TEXT NOT NULL DEFAULT '000-00-0000',
    "no_ssn_reason" TEXT,
    "isVerified" BOOLEAN NOT NULL DEFAULT false,
    "verificationToken" TEXT,
    "verificationExpiry" TIMESTAMP(3),
    "forgotPasswordToken" TEXT,
    "forgotPasswordTokenExpiry" TIMESTAMP(3),
    "is_US_citizen" BOOLEAN,
    "drivers_license" TEXT,
    "state_id" TEXT,
    "passport" TEXT,
    "visa" TEXT,
    "is_International_student" BOOLEAN,
    "i_20" TEXT,
    "salary_range" TEXT NOT NULL,
    "balance_statement" TEXT NOT NULL,
    "e_con_id" INTEGER,
    "landlord_id" INTEGER,
    "no_residence_detail" TEXT,
    "is_active_tenant" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "person_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "property" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "leased" BOOLEAN NOT NULL,
    "tenant_id" INTEGER,
    "lot_size" DOUBLE PRECISION NOT NULL,
    "structure_area" DOUBLE PRECISION,
    "parking_feature" TEXT,
    "stories" INTEGER,
    "home_type" TEXT NOT NULL,
    "sewer" TEXT,
    "water" TEXT,
    "state" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "location" TEXT,
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
    "warrenty" BOOLEAN NOT NULL,
    "construction_material" TEXT,
    "roof" TEXT,
    "monthly_rent" INTEGER NOT NULL,

    CONSTRAINT "property_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "asset" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "link" TEXT NOT NULL,
    "property_id" INTEGER NOT NULL,

    CONSTRAINT "asset_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "admin" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "loginCode" TEXT,
    "loginExpiry" TEXT,

    CONSTRAINT "admin_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "auxPerson" (
    "id" SERIAL NOT NULL,
    "contact" TEXT NOT NULL,
    "email" TEXT,
    "name" TEXT NOT NULL,
    "person_type" "auxPersonType" NOT NULL,
    "state" TEXT NOT NULL,
    "region" TEXT NOT NULL,
    "sub_division" TEXT,
    "street" TEXT,

    CONSTRAINT "auxPerson_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "maintenance" (
    "id" SERIAL NOT NULL,
    "request_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "type" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "status" "maintenanceStatus" NOT NULL DEFAULT 'Pending',
    "person_id" INTEGER NOT NULL,
    "property_id" INTEGER NOT NULL,
    "resolution_date" TIMESTAMP(3),
    "urgency" "urgencyStatus" NOT NULL DEFAULT 'Normal',
    "cost" INTEGER,

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
    "read" BOOLEAN NOT NULL DEFAULT false,
    "deleteFromUser" BOOLEAN NOT NULL DEFAULT false,
    "deleteFromAdmin" BOOLEAN NOT NULL DEFAULT false,
    "edited" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "message_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "notification" (
    "id" SERIAL NOT NULL,
    "content" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "readBy" INTEGER[],
    "deleteFromAdmin" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "notification_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "person_email_key" ON "person"("email");

-- CreateIndex
CREATE UNIQUE INDEX "admin_email_key" ON "admin"("email");

-- AddForeignKey
ALTER TABLE "person" ADD CONSTRAINT "person_e_con_id_fkey" FOREIGN KEY ("e_con_id") REFERENCES "auxPerson"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "person" ADD CONSTRAINT "person_landlord_id_fkey" FOREIGN KEY ("landlord_id") REFERENCES "auxPerson"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "property" ADD CONSTRAINT "property_tenant_id_fkey" FOREIGN KEY ("tenant_id") REFERENCES "person"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "asset" ADD CONSTRAINT "asset_property_id_fkey" FOREIGN KEY ("property_id") REFERENCES "property"("id") ON DELETE CASCADE ON UPDATE CASCADE;

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
