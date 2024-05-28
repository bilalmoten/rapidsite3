import { createClient } from "@/utils/supabase/server";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export default async function Page() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  const username = user?.given_name;
  console.log("username", username);
  const supabase = createClient();
  const { data: notes } = await supabase
    .from("notes")
    .select()
    .eq("username", username);

  return (
    <div>
      <h1 className=" font-bold  pt-5">Notes</h1>
      <div>
        <ul className=" py-4">
          {notes!.map((note) => (
            <li
              className="  py-3 px-2  my-2 border border-gray-200 rounded-md shadow-md w-96"
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
