// api/auth/[...nextauth]/route.tsx
import NextAuth, { type NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { compare } from "bcryptjs";
import { query } from "@/lib/db";

declare module "next-auth" {
  interface User {
    id: string;
    role?: string;
    name?: string;
  }

  interface Session {
    user: {
      id: string;
      email: string;
      name?: string;
      role?: string;
    };
  }
}

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null;

        try {
          const result = await query('SELECT * FROM users WHERE email = ?', [credentials.email]);
          console.log('Результат запроса:', result); // Добавьте эту строку

          
          if (result.length === 0) return null;

          const user=result[0];

          const isPasswordValid = await compare(
            credentials.password,
            user.password
          );
          if (isPasswordValid) console.log("правильный пароль",credentials.password)
          if (!isPasswordValid) return null;

          return {
            id: user.id,
            email: user.email,
            name: user.name,
            role: user.role
          };

        } catch (error) {
          console.error("Ошибка авторизации:", error);
          return null;
        }
      },
    }),
  ],
  session: { strategy: "jwt" },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/login/enter",
    signOut: "/",
    error: "/login",
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };