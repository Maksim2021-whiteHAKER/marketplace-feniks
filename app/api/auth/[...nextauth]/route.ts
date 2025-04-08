// api/auth/[...nextauth]/route.tsx
import NextAuth, { type NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { compare } from "bcryptjs";
import { supabase } from '@/lib/supabase'; // Импортируем клиент Supabase

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
          const { data: user, error: userError } = await supabase
            .from("users")
            .select("*")
            .eq("email", credentials.email)
            .maybeSingle();

          if (userError) {
            console.error("Ошибка при поиске пользователя:", userError);
            return null;
          }

          if (!user) {
            console.log("Пользователь не найден: пользователь: ",user);
            return null;
          }

          const isPasswordValid = await compare(
            credentials.password,
            user.password_hash
          );

          if (!isPasswordValid) {
            console.log("Неверный пароль");
            return null;
          }

          console.log("Правильный пароль");

          return {
            id: user.id,
            email: user.email,
            name: user.name,
            role: user.role,
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
  callbacks: {
    jwt: async({token, user}) =>{
      if (user){
        token.name,
        token.email
      }
      return token
    },
  session: async({session, token})=>{
    session.user.name = token.name as string,
    session.user.email = token.email as string
    return session
  }
  }
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };