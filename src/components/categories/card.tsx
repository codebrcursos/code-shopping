import { Title } from "@/components/_shared/title";
import Image from "next/image";
import Link from "next/link";

type Props = {
  slug: string;
  title: string;
  image: string;
};

export const CardCategory = ({ slug, title, image }: Props) => {
  return (
    <div className="w-full mb-6">
      <Link
        href={`produtos?categoria=${slug}`}
        title={title}
        className="flex flex-col gap-4 relative w-full"
      >
        <div className="overflow-hidden rounded-2xl shadow-lg">
          <Image
            src={image}
            width={400}
            height={400}
            alt={`imagem da categoria ${title}`}
            className="object-cover transition-all hover:scale-110"
          />
        </div>

        <Title tag="h4" fontWeight="normal" className="text-gray-400 truncate">
          {title}
        </Title>
      </Link>
    </div>
  );
};
