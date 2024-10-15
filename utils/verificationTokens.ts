import bcryptjs from "bcryptjs"

export async function generateToken(data: string) {
  const hash = await bcryptjs.hash(data, 10)
  const base64encoded = Buffer.from(hash).toString('base64')
  const token = base64encoded.replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '')
  return token
}
