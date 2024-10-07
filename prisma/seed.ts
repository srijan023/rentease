const { PrismaClient } = require("@prisma/client")

const newPrisma = new PrismaClient()
async function main() {
  // Seed locations
  const location1 = await newPrisma.location.create({
    data: {
      state: "California",
      region: "West",
      sub_division: "Subdivision 1"
    }
  });

  const location2 = await newPrisma.location.create({
    data: {
      state: "Texas",
      region: "South",
    }
  });

  const location3 = await newPrisma.location.create({
    data: {
      state: "New York",
      region: "East",
    }
  });

  // Seed aux_person
  const auxPerson1 = await newPrisma.aux_person.create({
    data: {
      name: "John Doe",
      contact: "123456789",
      person_type: "Landlord",
      address: { connect: { id: location1.id } }
    }
  });

  const auxPerson2 = await newPrisma.aux_person.create({
    data: {
      name: "Jane Doe",
      contact: "987654321",
      person_type: "Emergency_Contact",
      address: { connect: { id: location2.id } }
    }
  });

  const auxPerson3 = await newPrisma.aux_person.create({
    data: {
      name: "Michael Smith",
      contact: "555987654",
      person_type: "Landlord",
      address: { connect: { id: location3.id } }
    }
  });

  // Seed persons (at least 10 persons)
  const persons = await newPrisma.person.createMany({
    data: [
      {
        name: "Alice Johnson",
        email: "alice@example.com",
        password: "hashed_password1",
        contact: "555-555-5551",
        dob: new Date("1990-01-01"),
        SSN: 123456789,
        is_US_citizen: true,
        drivers_license: "DL12345",
        state_id: "CA",
        is_active_tenant: true,
        e_con_id: auxPerson2.id,
        landlord_id: auxPerson1.id,
      },
      {
        name: "Bob Williams",
        email: "bob@example.com",
        password: "hashed_password2",
        contact: "555-555-5552",
        dob: new Date("1985-02-14"),
        SSN: 987654321,
        is_US_citizen: false,
        state_id: "TX",
        passport: "P1234567",
        visa: "V987654",
        is_active_tenant: false,
        e_con_id: auxPerson3.id,
      },
      {
        name: "Charlie Brown",
        email: "charlie@example.com",
        password: "hashed_password3",
        contact: "555-555-5553",
        dob: new Date("1992-03-15"),
        SSN: 123459876,
        is_US_citizen: true,
        drivers_license: "DL54321",
        state_id: "NY",
        is_active_tenant: true,
        e_con_id: auxPerson1.id,
      },
      {
        name: "David Smith",
        email: "david@example.com",
        password: "hashed_password4",
        contact: "555-555-5554",
        dob: new Date("1993-04-25"),
        SSN: 987651234,
        is_US_citizen: false,
        state_id: "CA",
        passport: "P9876543",
        visa: "V543210",
        is_active_tenant: false,
        e_con_id: auxPerson2.id,
      },
      {
        name: "Eve Davis",
        email: "eve@example.com",
        password: "hashed_password5",
        contact: "555-555-5555",
        dob: new Date("1987-05-05"),
        SSN: 555444333,
        is_US_citizen: true,
        drivers_license: "DL99999",
        state_id: "TX",
        is_active_tenant: true,
        e_con_id: auxPerson3.id,
      },
      {
        name: "Frank Wilson",
        email: "frank@example.com",
        password: "hashed_password6",
        contact: "555-555-5556",
        dob: new Date("1986-06-15"),
        SSN: 888777666,
        is_US_citizen: true,
        drivers_license: "DL11111",
        state_id: "NY",
        is_active_tenant: false,
        e_con_id: auxPerson1.id,
      },
      {
        name: "Grace Thomas",
        email: "grace@example.com",
        password: "hashed_password7",
        contact: "555-555-5557",
        dob: new Date("1988-07-17"),
        SSN: 999888777,
        is_US_citizen: false,
        state_id: "TX",
        passport: "P2223334",
        visa: "V333444",
        is_active_tenant: true,
        e_con_id: auxPerson3.id,
      },
      {
        name: "Hank Miller",
        email: "hank@example.com",
        password: "hashed_password8",
        contact: "555-555-5558",
        dob: new Date("1995-08-20"),
        SSN: 123123123,
        is_US_citizen: true,
        drivers_license: "DL65432",
        state_id: "CA",
        is_active_tenant: false,
        e_con_id: auxPerson2.id,
      },
      {
        name: "Ivy Garcia",
        email: "ivy@example.com",
        password: "hashed_password9",
        contact: "555-555-5559",
        dob: new Date("1991-09-01"),
        SSN: 456789123,
        is_US_citizen: true,
        drivers_license: "DL33333",
        state_id: "NY",
        is_active_tenant: true,
        e_con_id: auxPerson1.id,
      },
      {
        name: "Jack Martinez",
        email: "jack@example.com",
        password: "hashed_password10",
        contact: "555-555-5560",
        dob: new Date("1994-10-22"),
        SSN: 666777888,
        is_US_citizen: false,
        state_id: "TX",
        passport: "P6549873",
        visa: "V987456",
        is_active_tenant: false,
        e_con_id: auxPerson3.id,
      },
    ],
  });

  console.log({ persons });
}

main()
  .then(async () => {
    await newPrisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await newPrisma.$disconnect();
    process.exit(1);
  });

