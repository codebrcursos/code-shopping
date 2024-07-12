import { Container } from "@/components/_shared/container";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
};

export default function HomePage() {
  return (
    <Container>
      <h1>home page</h1>
    </Container>
  );
}
