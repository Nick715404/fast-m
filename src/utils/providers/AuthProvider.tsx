'use client';

import { SessionProvider } from "next-auth/react";

type AuthProviderProps = { children: React.ReactNode, };

export function AuthProvider({ children }: AuthProviderProps) {
  return <SessionProvider>{children}</SessionProvider>;
};