import { Container } from "@/components/_shared/container";
import { Title } from "@/components/_shared/title";
import Image from "next/image";
import Link from "next/link";
import { data } from "./data";

export const Footer = () => {
  const categories = Array.from({ length: 6 });
  return (
    <footer className="pt-12 pb-6 bg-gray-100">
      <Container>
        <div className="grid grid-cols-6 lg:grid-cols-4 gap-12">
          <div className="col-span-6 lg:col-span-1 text-gray-400 flex flex-col gap-3">
            <Image src="/logo.png" width={161} height={66} alt="logo" />
            <p>Avenida Brigadeiro Faria Lima, 342 São Paulo, SP.</p>
            <p>oi@codeshopping.com </p>
            <p>+55 11 9 8877-6655</p>
          </div>

          <div className="col-span-6 md:col-span-2 lg:col-span-1">
            <Title tag="h4" className="mb-8 mt-2 text-pink-400">
              A CODE SHOPPING
            </Title>

            <ul className="flex flex-col gap-3">
              {data.map((data) => (
                <li key={data.title}>
                  <Link
                    href={data.url}
                    className="text-gray-400 hover:text-pink-400 transition-colors"
                  >
                    {data.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-span-6 md:col-span-2 lg:col-span-1">
            <Title tag="h4" className="mb-8 mt-2 text-pink-400">
              Loja
            </Title>

            <ul className="flex flex-col gap-3">
              {categories.map((_, index) => (
                <li key={index}>
                  <Link
                    href="conjuntos"
                    className="text-gray-400 hover:text-pink-400 transition-colors"
                  >
                    Conjuntos
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-span-6 md:col-span-2 lg:col-span-1">
            <Title tag="h4" className="mb-8 mt-2 text-pink-400">
              Ambiente seguro
            </Title>

            <Image src="/cards.webp" width={200} height={130} alt="cards" />
          </div>
        </div>

        <div className="mt-12 pt-12 border-t border-gray-200">
          <p className="text-gray-400">© 2024 Code Shopping</p>
        </div>
      </Container>
    </footer>
  );
};
