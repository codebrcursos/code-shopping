import { Container } from "@/components/_shared/container";
import { HeroImage } from "@/components/hero";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
};

export default function HomePage() {
  return (
    <Container>
      <HeroImage
        src="/banner-1.png"
        width={1920}
        height={720}
        alt="Banner com 4  mulheres"
        className="rounded-2xl overflow-hidden"
      />
    </Container>
  );
}
