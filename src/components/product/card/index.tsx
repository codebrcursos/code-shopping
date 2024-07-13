import { Title } from "@/components/_shared/title";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const ProductCard = () => {
  return (
    <div className="w-full overflow-hidden rounded-2xl border border-gray-200">
      <Link
        href="/product/camisa"
        title="Product"
        className="block relative w-full h-44 sm:h-56 md:h-96 lg:h-72"
      >
        <Image
          src="/productCard.webp"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover"
          alt="product card"
        />
      </Link>

      <div className="py-4 px-4">
        <Link href="/product/camisa" title="Product">
          <Title tag="h4" fontWeight="semi-bold" className="text-gray-400">
            Vestido Azul Royal
          </Title>
        </Link>
        <div className="flex justify-between items-center mt-4">
          <Title tag="h5" fontWeight="bold" className="text-pink-400">
            R$ 299,00
          </Title>
          <Button
            variant="outline"
            className="px-2 py-0 lg:px-4 lg:py-1 rounded-xl border-pink-400 text-pink-400 hover:bg-pink-400 hover:text-white"
          >
            <Link href="/product/camisa" title="Product">
              <ShoppingCart className="lg:w-6 lg:h-6 w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};
