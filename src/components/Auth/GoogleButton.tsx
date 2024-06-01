'use client';

import { signIn } from "next-auth/react";
import { Button } from "../Button";
import { useSearchParams } from "next/navigation";

export function GoogleButton() {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get('callbackUrl') || '/profile'
  const handleSighIn = () => signIn('google', { callbackUrl })

  return (
    <Button onClick={handleSighIn} as='button' mode="light" size="m">
      Google
    </Button>
  )
}