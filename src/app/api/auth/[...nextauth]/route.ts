import nextAuth from "next-auth";
import NextAuth from "next-auth/next";
import { AuthConfig } from "../../../../../config/auth";

const handler = nextAuth(AuthConfig)


export {handler as GET, handler as POST}
