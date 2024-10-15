import bcryptjs from "bcryptjs"

export async function generateToken(data: string) {
  const token = await bcryptjs.hash(data, 10)
  return token
}
