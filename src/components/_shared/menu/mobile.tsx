import {
  NotificationButton,
  UserButton,
} from "@/components/_shared/btnActions";
import { SearchForm } from "@/components/_shared/searchForm";
import { Separator } from "@/components/ui/separator";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { AlignJustify } from "lucide-react";
import Link from "next/link";
import { data } from "./data";

export const MobileMenu = () => {
  return (
    <div className="block lg:hidden">
      <Sheet>
        <SheetTrigger className="text-white border px-2 py-2 rounded-lg bg-pink-500 hover:bg-pink-400 transition-all">
          <AlignJustify />
        </SheetTrigger>
        <SheetContent side="left">
          <ul className="flex flex-col gap-3 mt-6 mb-4">
            {data.map((item) => (
              <li key={item.name}>
                <Link
                  href="{item.url}"
                  title={item.name}
                  className="font-medium text-lg hover:text-pink-400 transition-all"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          <Separator />

          <div className="flex gap-2 py-4">
            <UserButton />
            <NotificationButton />
          </div>

          <Separator />

          <SearchForm className="mt-6" />
        </SheetContent>
      </Sheet>
    </div>
  );
};
