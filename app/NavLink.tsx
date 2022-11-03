"use client";
import Link from "next/link";
import { useSelectedLayoutSegments } from "next/navigation";
import { use } from "react";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

export default function NavLink({ href, children }: NavLinkProps) {
  let layoutSegments = useSelectedLayoutSegments();
  let segment = layoutSegments[0];
  let active = false;

  if (href === "/" && segment === undefined) {
    active = true;
  } else {
    active = href === `/${segment}`;
  }

  return (
    <Link
      href={href}
      className={` inline-flex w-full justify-center items-center h-10 hover:text-white hover:border-0 hover:border-b-2 hover:border-white hover:border-dotted ${
        active ? "text-white" : "text-gray-500"
      }`}
    >
      {children}
    </Link>
  );
}
