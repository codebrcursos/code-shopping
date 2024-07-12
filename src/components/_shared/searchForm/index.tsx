"use client";

import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { Search } from "lucide-react";

export const SearchForm = ({ className }: { className: string }) => {
  return (
    <form
      action=""
      className={cn("flex relative min-w-72 xl:min-w-80", className)}
    >
      <Search className="absolute top-3 left-2" size={18} />

      <Input
        type="search"
        placeholder="Pesquisar..."
        className="bg-gray-100 pl-8"
      />
    </form>
  );
};
