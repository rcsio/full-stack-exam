"use client";

import { login } from "@/app/login/actions";
import { useFormState } from "react-dom";

const initialState = {
  message: "",
};

export default function LoginForm() {
  const [state, action] = useFormState(login, initialState);

  return (
    <form className="grid gap-4 p-6" action={action}>
      <h2 className="sr-only">Log In</h2>

      <label className="grid">
        <span className="font-bold">Username</span>
        <input type="text" name="username" required />
      </label>

      <label className="grid">
        <span className="font-bold">Password</span>
        <input type="password" name="password" required />
      </label>

      <button className="bg-purple-700 text-white font-bold min-h-10">
        Log in
      </button>

      <p>{state.message}</p>
    </form>
  );
}
