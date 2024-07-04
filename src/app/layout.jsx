import { Open_Sans } from "next/font/google";
import "./globals.css";

const inter = Open_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Muhammad Awais Arif | Full Stack Developer | Filmmaker | Blogger",
  description:
    "Muhammad Awais Arif is a Full Stack Developer, Filmmaker, and Blogger. He is passionate about building web applications, creating videos, and writing blogs.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
