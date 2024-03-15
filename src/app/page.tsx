import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { getDb } from "@/app/actions";

export default async function Home() {
  // TODO: Use middleware to protect routes
  const user = cookies().get("user");
  if (!user) redirect("/login");

  const db = await getDb();

  return (
    <section className="p-6">
      <ul>
        {db.images.map((image: any, key: any) => (
          <li key={key}>
            <img src={`/${image}`} alt="" />
          </li>
        ))}
      </ul>
    </section>
  );
}
