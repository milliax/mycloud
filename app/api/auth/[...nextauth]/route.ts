import NextAuth, { AuthOptions } from 'next-auth'
import EmailProvider from "next-auth/providers/email"


export const authOptions: AuthOptions = {
    providers: [
        EmailProvider({
            server: process.env.EMAIL_SERVER,
            from: process.env.EMAIL_FROM,
        }),
    ],

}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }