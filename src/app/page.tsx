import { Button } from "@/components";

export default function HomePage() {
  return (
    <main className="flex flex-col justify-center mt-56">
      <div className="container">
      <Button as='button' mode="light" size="l">Личный кабинет</Button>
      <Button as='button' mode="light" size="l">Личный кабинет</Button>
      <Button as='button' mode="light" size="s">Личный кабинет</Button>
      <Button as='button' mode="dark" size="m">Личный кабинет</Button>
      </div>
    </main>
  );
};