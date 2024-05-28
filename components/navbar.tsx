import DeployButton from "@/components/DeployButton";
import {
  RegisterLink,
  LoginLink,
  LogoutLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import { Button } from "@/components/ui/button";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export default async function NavBar() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  const isSignedIn = user !== null;

  return (
    <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16">
      <div className="w-full max-w-4xl flex justify-between items-center p-3 text-sm">
        <DeployButton />
        <div className=" space-x-6">
          {!isSignedIn && (
            <>
              <LoginLink className=" border rounded-md px-6 py-3 w-8">
                <Button>Sign In</Button>
              </LoginLink>
              <RegisterLink className=" border rounded-md px-6 py-3 bg-blue-700  text-white w-8">
                Sign up
              </RegisterLink>
            </>
          )}
          {isSignedIn && (
            <div className="flex items-center space-x-6">
              <span>Hello, {user?.email}</span>
              <LogoutLink>
                <Button>Sign Out</Button>
              </LogoutLink>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
