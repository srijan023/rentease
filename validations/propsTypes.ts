export enum auxPersonType {
  Landlord = "Landlord",
  Emergency_Contact = "Emergency_Contact"
}

export interface tokenData {
  id: number,
  email: string,
  name: string,
  role?: string
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
  dob: string | Date,
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

export interface typeProperty {
  name: string,
  description?: string,
  bedrooms: number,
  bathrooms: number,
  stories: number,
  patio_porch: string,
  heating_feature?: string,
  cooling_feature?: string,
  parking_feature?: string,
  basement_type?: string,
  lot_size: number,
  structure_area: number,
  parcel_number: number,
  attached_structure: boolean,
  home_type: string,
  property_subtype: string,
  architecture_style: string,
  year_built: string,
  warrenty: boolean,
  construction_material?: string,
  roof?: string,
  sewer?: string,
  water?: string,
  state: string,
  city: string,
  location?: string,
  monthly_rent: number,
  assets: asset[] | { create?: asset[], connect?: { id: number } },
  leased: boolean,
  tenant_id?: number,
}

export interface asset {
  name: string,
  link: string
}
