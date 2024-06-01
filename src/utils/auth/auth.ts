import { AuthOptions, User } from "next-auth";
import GoogleProvider from 'next-auth/providers/google';
import Creadentials from 'next-auth/providers/credentials';
import { users } from "@/constants/users";

const googleProvider = GoogleProvider({
  clientId: process.env.GOOGLE_CLIENT_ID!,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
});

const credentials = Creadentials({
  credentials: {
    email: { label: 'Email', type: 'email', required: true },
    password: { label: 'Password', type: 'password', required: true },
  },
  async authorize(credentials) {
    if (!credentials?.email || !credentials.password) return null;

    const currentUser = users.find(user => user.email === credentials.email);

    if (currentUser && currentUser.password === credentials.password) {
      const { password, ...userWithoutPass } = currentUser;

      return userWithoutPass as User;
    }

    return null;
  },
})

export const authConfig: AuthOptions = {
  providers: [googleProvider, credentials],
  pages: { signIn: '/signin' },
};