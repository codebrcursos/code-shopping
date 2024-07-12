import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { CircleUserRound, LogOut } from "lucide-react";

export const UserButton = ({ className }: { className: string }) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className={cn("flex gap-2", className)}>
          <CircleUserRound />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end">
        <DropdownMenuItem>Meus dados</DropdownMenuItem>
        <DropdownMenuItem>
          <Button
            variant="link"
            className="px-0 py-0 h-auto flex gap-2 items-center !no-underline"
          >
            Sair <LogOut strokeWidth={1} />
          </Button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
