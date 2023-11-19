import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Next App | About",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
      <div className="container">
        <h1>About US</h1>
        <ul className="about_nav">
            <li><Link href='/about/contacts'>Contacts</Link></li>
            <li><Link href='/about/team'>Team</Link></li>
        </ul>
        {children}
      </div>
  );
}
