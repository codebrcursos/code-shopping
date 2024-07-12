import { Footer } from "@/components/_shared/footer";
import { Header } from "@/components/_shared/header";
import { Main } from "@/components/_shared/main";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </>
  );
}
