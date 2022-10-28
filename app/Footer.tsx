import Link from "next/link";

export default function Footer() {
  return (
    <footer className="fixed bottom-0">
      <div className="footer-social">
        <h4>Connect With Us!</h4>
        <div className="footer-links">
          <Link href="#">github</Link>
          <Link href="#">twitter</Link>
          <Link href="#">insta</Link>
          <Link href="#">linkedin</Link>
          <Link href="#">discord</Link>
        </div>
      </div>
      <p className="">Copyright © 2022 TwofoldTechLLC</p>
    </footer>
  );
}
