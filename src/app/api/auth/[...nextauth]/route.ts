import nextAuth from "next-auth";
import { AuthConfig } from "../../../../../config/auth";

const handler = nextAuth(AuthConfig)


export {handler as GET, handler as POST}
