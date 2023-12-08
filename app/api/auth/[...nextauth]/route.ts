import NextAuth, { AuthOptions } from 'next-auth'

import { authOptions } from './authOptions.config'

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }