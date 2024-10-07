import CredentialsProvider from "next-auth/providers/credentials";
import prisma from "@/db"

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Email",

      credentials: {
        email: { label: "Email", type: "email", placeholder: "johndoe@email.com" },
        password: { label: "Password", type: "password" }
      },

      async authorize(credentials: any) {
        const user = await prisma.person.findFirst({
          where: {
            email: credentials.email,
            password: credentials.password
          }
        })

        if (user) {
          return {
            id: user.id.toString(),
            email: user.email,
            name: user.name
          }
        }

        return null
      }
    })
  ],
  secret: process.env.NEXTAUTH_SECRET || "sample_secret",
  callbacks: {
    jwt: async ({ user, token }: any) => {
      if (user) {
        token.uid = user.id;
      }
      return token;
    },
    session: async ({ session, token, user }: any) => {
      // only gets called with getSession() or useSession() is used on the cient side
      if (session.user) {
        session.user.id = token.uid
      }
      return session
    }
  },
}
