import {
  RegisterLink,
  LoginLink,
  LogoutLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import { Button, buttonVariants } from "@/components/ui/button";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { ModeToggle } from "./theme-toggle";
import Link from "next/link";

export default async function NavBar() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  const isSignedIn = user !== null;

  return (
    <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16">
      {/* <DeployButton />
        <div className=" space-x-6"> */}
      {!isSignedIn && (
        <div className="w-full max-w-4xl flex justify-end items-center p-3 text-sm space-x-6">
          <div>
            <LoginLink className=" border rounded-md px-2 py-3 mx-2">
              <Button>Sign In</Button>
            </LoginLink>
            <RegisterLink className=" border rounded-md px-2 py-3 mx-2 bg-blue-700  text-white w-8">
              <Button>Sign Up</Button>
            </RegisterLink>
            <ModeToggle />
          </div>
        </div>
      )}
      {isSignedIn && (
        //
        <div className="w-full max-w-4xl flex justify-between items-center p-3 text-sm">
          <span>Hello, {user?.email}</span>
          <div className="flex items-center space-x-6">
            {user?.email === process.env.NEXT_PUBLIC_ADMIN_EMAIL && (
              <Button variant={"default"}>Admin Dashboard</Button>
            )}
            <Link href="/notes">
              <Button variant={"default"}>Dashboard</Button>
            </Link>
            <LogoutLink>
              <Button variant={"outline"}>Sign Out</Button>
            </LogoutLink>

            <ModeToggle />
          </div>
        </div>
      )}

      {/* </div> */}
    </nav>
  );
}
