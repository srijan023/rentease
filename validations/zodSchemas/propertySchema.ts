import { z } from "zod";

export const propertySchema = z.object({
  name: z.string(),
  description: z.string().optional(),
  bedrooms: z.number({ required_error: "Number of bedrooms must be provided" }),
  bathrooms: z.number({ required_error: "Number of bathrooms must be provided" }),
  stories: z.number({ required_error: "You need to provide stories information" }),
  patio_porch: z.string({ required_error: "This field is required" }),
  heating_feature: z.string().optional(),
  cooling_feature: z.string().optional(),
  parking_features: z.string().optional(),
  basement_type: z.string().optional(),
  lot_size: z.number({ required_error: "Lot size needs to be provided" }),
  structure_area: z.number().optional(),
  parcel_number: z.number({ required_error: "Parcel number must be provided" }),
  attached_structure: z.boolean({ required_error: "This information must be provided" }),
  home_type: z.string({ required_error: "Home type must be provided" }),
  property_subtype: z.string({ required_error: "You need to provide property subtype" }),
  architecture_style: z.string({ required_error: "You need to provide architecture style" }),
  year_built: z.string(),
  warrenty: z.boolean(),
  construction_material: z.string().optional(),
  roof: z.string().optional(),
  sewer: z.string().optional(),
  water: z.string().optional(),
  state: z.string({ required_error: "You need to provide a state" }),
  city: z.string({ required_error: "You need to provide a region" }),
  location: z.string().optional(),
  monthly_rent: z.number({ required_error: "Monthly rent value has to be provided" }),
  assets: z.array(z.object({
    name: z.string({ required_error: "Each asset should have a name" }),
    link: z.string({ required_error: "Link for the asset is required" })
  })),
  leased: z.boolean(),
  tenant_id: z.number().optional(),
}).refine(data => {
  if (data.leased) {
    return data.tenant_id
  }
  return true
}, {
  path: ["tenant_id"],
  message: "If the property is leased tenant id has to be provided"
})
