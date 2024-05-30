"use client";

import { db } from "@/db";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { Loader2 } from "lucide-react";
import { redirect, useRouter, useSearchParams } from "next/navigation";

const Page = async () => {
  const router = useRouter();

  const searchParams = useSearchParams();

  const origin = searchParams.get("origin");
  const id = searchParams.get("id");

  const apiResponse = await db.user.findFirst({
    where: {
      id: id?.toString(),
    },
  });

  if (!apiResponse) {
    // create user in db
    const { getUser } = getKindeServerSession();
    const user = await getUser();
    if (user) {
      await db.user.create({
        data: {
          id: user.id,
          username: user.given_name,
          email: user.email,
        },
      });
      console.log(
        "user created in db with id: ",
        user.id,
        "and email: ",
        user.email,
        "and username: ",
        user.given_name
      );
    }
  }
  redirect("/notes");

  return (
    <div className="w-full mt-24 flex justify-center">
      <div className="flex flex-col items-center gap-2">
        <Loader2 className=" h-8 w-8 animate-spin text-zinc-800" />
        <h3 className=" font-semibold text-xl">Setting up your account</h3>
        <p>you will be redirected automatically</p>
      </div>
    </div>
  );
};

export default Page;
