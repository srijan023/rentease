import { z } from "zod";

export const propertySchema = z.object({
  leased: z.boolean(),
  tenant_id: z.number().optional(),
  lot_size: z.number({ required_error: "Lot size needs to be provided" }),
  structure_area: z.number().optional(),
  parking_features: z.string().optional(),
  stories: z.number({ required_error: "You need to provide stories information" }),
  home_type: z.string({ required_error: "Home type must be provided" }),
  sewer: z.string().optional(),
  water: z.string().optional(),
  state: z.string({ required_error: "You need to provide a state" }),
  region: z.string({ required_error: "You need to provide a region" }),
  sub_division: z.string().optional(),
  street: z.string().optional(),
  bedrooms: z.number({ required_error: "Number of bedrooms must be provided" }),
  bathrooms: z.number({ required_error: "Number of bathrooms must be provided" }),
  basement_type: z.string().optional(),
  heating_feature: z.string().optional(),
  cooling_features: z.string().optional(),
  parcel_number: z.number({ required_error: "Parcel number must be provided" }),
  patio_porch: z.string({ required_error: "This field is required" }),
  attached_structure: z.boolean({ required_error: "This information must be provided" }),
  property_subtype: z.string({ required_error: "You need to provide property subtype" }),
  architecture_style: z.string({ required_error: "You need to provide architecture style" }),
  year_built: z.string(),
}).refine(data => {
  if (data.leased) {
    return data.tenant_id
  }
  return true
}, {
  path: ["tenant_id"],
  message: "If the property is leased tenant id has to be provided"
})
