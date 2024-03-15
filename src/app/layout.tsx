import type { Metadata } from "next";
import Link from "next/link";
import { Inter } from "next/font/google";
import "./globals.css";
import { cookies } from "next/headers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Full Stack Exam",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // TODO: Use middleware to protect routes
  const user = cookies().get("user");

  return (
    <html lang="en">
      <body className={`${inter.className} max-w-sm mx-auto`}>
        <header>
          <nav>
            <ul className="flex gap-2 p-6 pb-0">
              <li>
                <Link href="/" className="underline">
                  Home
                </Link>
              </li>

              {!user && (
                <li>
                  <Link href="/login" className="underline">
                    Log in
                  </Link>
                </li>
              )}

              {user && (
                <li>
                  <Link href="/logout" className="underline">
                    Log out
                  </Link>
                </li>
              )}

              <li>
                <Link href="/upload" className="underline">
                  Upload
                </Link>
              </li>
            </ul>
          </nav>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
