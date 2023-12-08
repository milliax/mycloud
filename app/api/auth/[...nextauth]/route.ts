import NextAuth, { AuthOptions } from 'next-auth'

import { nextAuthConfig } from './authOptions.config'

const handler = NextAuth(nextAuthConfig)

export { handler as GET, handler as POST }