import { CircleUserIcon, Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";
import { useAuth0 } from "@auth0/auth0-react";
import MobileNavLinks from "./MobileNavLinks";

const MobileNav = () => {
  const { isAuthenticated, loginWithRedirect, user, logout } = useAuth0();

  return (
    <Sheet>
      <SheetTrigger>
        <Menu className="text-orange-500" />
      </SheetTrigger>
      <SheetContent className="space-y-3">
        <SheetTitle>
          {isAuthenticated ? (
            <span className="flex items-center font-bold gap-2">
              {user?.picture ? (
                <>
                  <img
                    src={user?.picture}
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                  {user?.name}
                </>
              ) : (
                <>
                  <CircleUserIcon className="text-orange-500" />
                  {user?.name}
                </>
              )}
            </span>
          ) : (
            <span>Welcome to PernEats.com</span>
          )}
        </SheetTitle>
        <Separator />
        <SheetDescription className="flex flex-col gap-4">
          {isAuthenticated ? (
            <MobileNavLinks />
          ) : (
            <Button className="flex-1 font-bold bg-orange-500">Log In</Button>
          )}
        </SheetDescription>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
