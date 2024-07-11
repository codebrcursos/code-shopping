import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
};

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>home page</h1>
    </main>
  );
}
