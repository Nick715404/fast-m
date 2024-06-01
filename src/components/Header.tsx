import { Logo, Navigation } from "./";
import { AuthButton } from "./Auth";

export function Header() {
  return (
    <header className="pt-9 mb-9">
      <div className="container">
        <div className="flex items-center justify-between">
          <Logo />
          <Navigation />
          <AuthButton />
        </div>
      </div>
    </header>
  );
};