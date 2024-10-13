export enum auxPersonType {
  Landlord = "Landlord",
  Emergency_Contact = "Emergency_Contact"
}

export interface tokenData {
  id: number,
  email: string,
  name: string
}

export interface typeAuxPerson {
  id?: number,
  name: string,
  email: string,
  contact: string,
  state: string,
  region: string,
  sub_division: string,
  person_type: auxPersonType
}

export interface typePerson {
  name: string,
  email: string,
  password: string,
  backup_email: string,
  contact: string,
  dob: string,
  ssn: string,
  no_ssn_reason: string,
  is_US_citizen: boolean,
  drivers_license: string,
  state_id: string,
  passport: string,
  visa: string,
  is_International_student: boolean,
  i_20: string,
  balance_statement: string,
  emergency_contact?: typeAuxPerson | { create?: typeAuxPerson, connect?: { id: number } },
  prev_landlord?: typeAuxPerson | { create?: typeAuxPerson, connect?: { id: number } },
  no_residence_detail: string,
}
