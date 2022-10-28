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
    <Link href={href} className={active ? "active" : ""}>
      {children}
    </Link>
  );
}
