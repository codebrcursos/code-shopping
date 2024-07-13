import { Carousel } from "@/components/carousel";
import { ProductCard } from "@/components/product";
import { CarouselItem } from "@/components/ui/carousel";

export const FeaturedCarousel = () => {
  const products = Array.from({ length: 8 });

  return (
    <Carousel>
      {products.map((_, index) => (
        <CarouselItem
          key={index}
          className="sm:basis1/2 md:basis-1/3 lg:basis-1/4"
        >
          <ProductCard />
        </CarouselItem>
      ))}
    </Carousel>
  );
};
