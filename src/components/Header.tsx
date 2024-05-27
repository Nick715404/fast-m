import { LoginLink } from "./Auth";
import { Button, Logo, Navigation } from "./";

export function Header() {
  return (
    <header className="absolute w-full top-8 left-0">
      <div className="container">
        <div className="flex items-center justify-between">
          <Logo />
          <Navigation />
          <LoginLink />
        </div>
      </div>
    </header>
  );
};