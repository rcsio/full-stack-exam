import { upload } from "@/app/upload/actions";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default function Page() {
  // TODO: Use middleware to protect routes
  const user = cookies().get("user");
  if (!user) redirect("/login");

  return (
    <form className="p-6 space-y-4" action={upload}>
      <label>
        <span className="sr-only">Choose file</span>
        <input type="file" accept="image/*, video/*" name="file" required />
      </label>

      <button className="bg-purple-700 text-white font-bold min-h-10 w-full">
        Upload
      </button>
    </form>
  );
}
