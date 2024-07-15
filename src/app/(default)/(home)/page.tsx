import { Container } from "@/components/_shared/container";
import { Section } from "@/components/_shared/section";
import { Title } from "@/components/_shared/title";
import { FeaturedCarousel } from "@/components/carousel";
import { HeroImage } from "@/components/hero";
import { ProductCard } from "@/components/product/card";
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

      <Section>
        <Title tag="h2" fontWeight="normal" className="mb-8 mt-2 text-pink-400">
          Produtos em destaque
        </Title>

        <FeaturedCarousel />

        <Title tag="h2" fontWeight="normal" className="mb-8 mt-2 text-pink-400">
          Produtos em pomoção
        </Title>

        <FeaturedCarousel />
      </Section>
    </Container>
  );
}
