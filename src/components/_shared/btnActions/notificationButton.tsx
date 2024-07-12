import { Button } from "@/components/ui/button";
import { Bell } from "lucide-react";

export const NotificationButton = ({ className }: { className: string }) => {
  return (
    <Button variant="ghost" className={className}>
      <Bell />
    </Button>
  );
};
