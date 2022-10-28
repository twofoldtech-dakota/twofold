import Image from "next/image";
import Link from "next/link";
import NavLink from "./NavLink";

export default function Header() {
  return (
    <header>
      <Link href="/">twofold</Link>

      <nav>
        <NavLink href="/about">About</NavLink>
        <NavLink href="/blog">Blog</NavLink>
        <NavLink href="/team">Team</NavLink>
      </nav>
    </header>
  );
}
