"use server";

import { redirect } from "next/navigation";
import { cookies } from "next/headers";

export async function login(prevState: any, formData: FormData) {
  const username = formData.get("username");
  const password = formData.get("password");

  // fake auth logic
  const users = [{ username: "mart", password: "test" }];

  const user = users.filter(
    (user) => user.username === username && user.password === password,
  )[0];

  if (!user) {
    return {
      message: "Incorrect username or password",
    };
  }

  cookies().set({ name: "user", value: user.username, httpOnly: true });
  redirect("/");
}
