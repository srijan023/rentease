const { PrismaClient } = require("@prisma/client")
const bcrypt = require("bcryptjs")


async function hashPassword(plainPassword: string) {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(plainPassword, salt);
}

require("dotenv").config()

async function main() {
  const prisma = new PrismaClient()
  try {
    if (!prisma) {
      throw {
        message: "Prisma not found"
      }
    }
    // Seed admin
    const hashedAdminPassword = await hashPassword("admin_password");
    const admin = await prisma.admin.create({
      data: {
        name: "Srijan Gyawali",
        email: "srijangyawali01@gmail.com",
        password: hashedAdminPassword,
      },
    });

    // Seed aux persons (Emergency contacts and landlords)
    const auxPerson1 = await prisma.auxPerson.create({
      data: {
        name: "John Doe",
        contact: "123456789",
        person_type: "Landlord",
        state: "California",
        region: "West",
      },
    });

    const auxPerson2 = await prisma.auxPerson.create({
      data: {
        name: "Jane Smith",
        contact: "987654321",
        person_type: "Emergency_Contact",
        state: "Texas",
        region: "South",
      },
    });

    // Hash passwords for persons
    const hashedPassword1 = await hashPassword("password1");
    const hashedPassword2 = await hashPassword("password2");
    const hashedPassword3 = await hashPassword("password3");

    // Seed persons (3 users)
    const person1 = await prisma.person.create({
      data: {
        password: hashedPassword1,
        salary_range: "$30,000 - $50,000",
        e_con_id: auxPerson2.id,
        landlord_id: auxPerson1.id,
        name: "Bob Johnson",
        email: "bob.johnson@example.com",
        backup_email: "bob.backup@example.com",
        contact: "345-678-9012",
        dob: "1988-08-15T00:00:00.000Z",
        ssn: "345-67-8901",
        no_ssn_reason: "N/A",
        is_US_citizen: true,
        drivers_license: "D34567890",
        state_id: "S34567890",
        passport: "",
        visa: "",
        is_International_student: false,
        i_20: "",
        balance_statement: "Valid balance statement",
        no_residence_detail: "No previous residence details available"
      },
    });

    const person2 = await prisma.person.create({
      data: {
        name: "John Doe",
        email: "john.doe@example.com",
        backup_email: "alice.backup@example.com",
        contact: "234-567-8901",
        dob: "1995-05-10T00:00:00.000Z",
        ssn: "234-56-7890",
        no_ssn_reason: "N/A",
        is_US_citizen: true,
        drivers_license: "D23456789",
        state_id: "S23456789",
        passport: "",
        visa: "",
        is_International_student: false,
        i_20: "",
        balance_statement: "Valid balance statement",
        no_residence_detail: "No previous residence details available",
        password: hashedPassword2,
        is_active_tenant: false, // inactive tenant
        e_con_id: auxPerson1.id,
        salary_range: "$30,000 - $50,000"
      },
    });

    const person3 = await prisma.person.create({
      data: {
        password: hashedPassword3,
        e_con_id: auxPerson1.id,
        name: "Alice Smith",
        email: "alice.smith@example.com",
        backup_email: "alice.backup@example.com",
        contact: "234-567-8901",
        dob: "1995-05-10T00:00:00.000Z",
        ssn: "234-56-7890",
        no_ssn_reason: "N/A",
        is_active_tenant: true,
        is_US_citizen: true,
        drivers_license: "D23456789",
        state_id: "S23456789",
        passport: "",
        visa: "",
        is_International_student: false,
        i_20: "",
        balance_statement: "Valid balance statement",
        no_residence_detail: "No previous residence details available",
        salary_range: "$30,000 - $50,000"
      },
    });

    // Seed properties (owned by active tenants)
    const property1 = await prisma.property.create({
      data: {
        name: "Greenwood Estate",
        description: "A spacious family home with modern amenities.",
        bedrooms: 4,
        bathrooms: 3,
        stories: 2,
        patio_porch: "Covered patio with a porch swing",
        heating_feature: "Central heating",
        cooling_feature: "Central air conditioning",
        parking_feature: "Attached garage",
        basement_type: "Finished",
        lot_size: 5000,
        structure_area: 3500,
        parcel_number: 123456789,
        attached_structure: true,
        home_type: "Single-family",
        property_subtype: "Residential",
        architecture_style: "Modern",
        year_built: "2010",
        warrenty: false,
        construction_material: "Brick",
        roof: "Shingle",
        sewer: "Public",
        water: "City",
        state: "California",
        city: "Los Angeles",
        location: "34.0522 N, 118.2437 W",
        monthly_rent: 2500,
        leased: true,
        tenant_id: person1.id,

      },
    });

    const property2 = await prisma.property.create({
      data: {
        name: "Maple Heights",
        description: "A charming townhouse in a quiet neighborhood.",
        bedrooms: 3,
        bathrooms: 2,
        stories: 3,
        patio_porch: "Small backyard with patio",
        heating_feature: "Radiant floor heating",
        cooling_feature: "Window air conditioning units",
        parking_feature: "Street parking",
        basement_type: "Unfinished",
        lot_size: 3000,
        structure_area: 2200,
        parcel_number: 987654321,
        attached_structure: false,
        home_type: "Townhouse",
        property_subtype: "Residential",
        architecture_style: "Colonial",
        year_built: "2005",
        warrenty: false,
        construction_material: "Wood",
        roof: "Tile",
        sewer: "Public",
        water: "City",
        state: "New York",
        city: "Brooklyn",
        location: "40.6782 N, 73.9442 W",
        monthly_rent: 1800,
        leased: true,
        tenant_id: person3.id,
      },
    });

    // Seed messages (sent to active tenants)
    await prisma.message.create({
      data: {
        content: "Reminder: Rent is due at the end of the month.",
        receiver_id: person1.id,
      },
    });

    await prisma.message.create({
      data: {
        content: "Maintenance will be conducted next week.",
        receiver_id: person3.id,
      },
    })
  } catch (err: any) {
    console.log(err.message)
  }
}

main()
