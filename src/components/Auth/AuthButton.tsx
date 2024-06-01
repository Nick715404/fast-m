'use client';

import { useSession, signOut } from "next-auth/react";
import { Button } from "../";

export function AuthButton() {
  const session = useSession();

  const handleSignOut = () => signOut({ callbackUrl: '/' });

  if (!session.data) {
    return <Button as="link" href="/signin" mode="light" size="m">Регистрация</Button>
  };

  return (
    <Button onClick={handleSignOut} as="link" href="#" mode="light" size="m">
      Выйти
    </Button>
  )
}