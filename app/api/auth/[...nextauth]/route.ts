import NextAuth from "next-auth/next";
import { authOptions } from "./options";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
