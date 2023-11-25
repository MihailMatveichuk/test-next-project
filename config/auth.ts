import type { AuthOptions, User } from "next-auth";
import GoggleProvider from 'next-auth/providers/google';
import Credentials from "next-auth/providers/credentials";
import { users } from "../data/users";

export const AuthConfig: AuthOptions = {
    providers: [GoggleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID!,
        clientSecret: process.env.GOOGLE_SECRET!,
    }),
    Credentials({
        credentials: {
            email: {label: "email", type: "email", required: true},
            password: {label: "password", type: "password", required: true},
        },
       async authorize(credentials){
        if(!credentials?.email || !credentials.password) return null;

        const currentUSer = users.find(user => user.email === credentials.email);

        if(currentUSer && currentUSer.password === credentials.password){
            const {password, ...userWithoutPassword} = currentUSer;

            return userWithoutPassword as User;
        }
        return null;
       }
    })
]
}



// http://localhost:3000/api/auth/callback/google