import Image from "next/image";
import Link from "next/link";
import NavLink from "./NavLink";

export default function Header() {
  return (
    <header className="flex flex-col grow-0">
      <Link
        className="inline-flex items-center justify-center w-full h-12 text-3xl font-black text-white border-0 border-b-2 border-gray-600 border-dotted hover:h-12 hover:text-3xl hover:border-0 hover:border-b-2 hover:border-gray-600 hover:border-dotted"
        href="/"
      >
        twofold
      </Link>

      <nav className="flex flex-row items-center justify-center w-full gap-1 pb-5">
        <NavLink href="/about">About</NavLink>
        <NavLink href="/blog">Blog</NavLink>
        <NavLink href="/team">Team</NavLink>
      </nav>
    </header>
  );
}
