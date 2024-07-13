import Image, { type ImageProps } from "next/image";

type Props = ImageProps & {
  className?: string;
};

export const HeroImage = ({ className, src, alt, width, height }: Props) => {
  return (
    <section className={className}>
      <Image src={src} alt={alt} width={width} height={height} />
    </section>
  );
};
