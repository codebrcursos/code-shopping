import {
  CartButton,
  NotificationButton,
  UserButton,
} from "@/components/_shared/btnActions";
import { Container } from "@/components/_shared/container";
import { DesktopMenu } from "@/components/_shared/menu";
import { SearchForm } from "@/components/_shared/searchForm";
import Image from "next/image";

export const Header = () => {
  return (
    <header className="w-full pt-6 pb-2">
      <Container>
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-between gap-12 xl:gap-16">
            <Image src="/logo.png" width={160} height={66} alt="logo do site" />

            <DesktopMenu />
          </div>

          <div className="flex items-center justify-between gap-10">
            <SearchForm className="hidden lg:flex" />

            <div className="flex">
              <UserButton className="hidden lg:block text-gray-400" />
              <NotificationButton className="hidden lg:block text-gray-400" />
              <CartButton className="sm:px-4 sm:bg-transparent sm:text-gray-400 sm:hover:bg-accent sm:hover:text-inherit px-[10px] bg-pink-500 text-white hover:bg-pink-400 hover:text-white" />
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
};
