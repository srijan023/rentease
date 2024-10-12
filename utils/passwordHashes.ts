import bcryptjs from "bcryptjs"
export async function hashPassword(password: string) {

  const salt = await bcryptjs.genSalt(10)
  const hashedPassword = await bcryptjs.hash(password, salt)
  return hashedPassword
}

export async function validateHashedPasswords(plaintext: string, hashPassword: string) {

  const validPassword = await bcryptjs.compare(plaintext, hashPassword)
  if (!validPassword) {
    return false
  }
  return true
}
