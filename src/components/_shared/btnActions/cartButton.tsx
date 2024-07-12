"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ShoppingCart } from "lucide-react";

export const CartButton = ({ className }: { className: string }) => {
  return (
    <Button variant="ghost" className={cn("relative", className)}>
      <ShoppingCart size={22} />
      <span className="absolute top-[-2px] right-[-2px] w-5 h-5 rounded-full bg-pink-400 text-white flex items-center justify-center">
        10
      </span>
    </Button>
  );
};
