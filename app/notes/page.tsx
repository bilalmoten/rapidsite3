import AddNoteButton from "@/components/addnote";
import { Button } from "@/components/ui/button";
import { db } from "@/db";
import { createClient } from "@/utils/supabase/server";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

export default async function Page() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  if (!user) {
    redirect("/auth-callback?origin=/notes");
  }
  // const username = user?.given_name;
  // console.log("username", username);
  const supabase = createClient();
  const { data: notes } = await supabase
    .from("notes")
    .select()
    .eq("username", user?.given_name);

  // check user in db
  const userInDb = await db.user.findFirst({
    where: {
      id: user?.id,
    },
  });
  if (!userInDb) {
    console.log("user not in db");
    redirect("/auth-callback?origin=/notes&id=" + user?.id);
  } else {
    console.log("user in db");
  }
  return (
    <div>
      <div className="w-screen justify-between flex flex-row space-x-6 items-center px-12 py-4">
        <h1 className="font-bold pt-5">Notes</h1>
        <AddNoteButton />
      </div>
      <div>
        <ul className="py-4">
          {notes!.map((note) => (
            <li
              className="py-3 px-2 my-2 border border-gray-200 rounded-md shadow-md w-96"
              key={note.id}
            >
              {note.title}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
