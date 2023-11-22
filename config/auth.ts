import type { AuthOptions } from "next-auth";
import GoggleProvider from 'next-auth/providers/google'

export const AuthConfig: AuthOptions = {
    providers: [GoggleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID!,
        clientSecret: process.env.GOOGLE_SECRET!,
    })]
}



// http://localhost:3000/api/auth/callback/google