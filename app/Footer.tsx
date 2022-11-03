import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bottom-0 flex flex-col justify-center mt-12 mb-5 text-xs text-center grow-0">
      <div className="w-full">
        <h4 className="m-0">Connect With Us!</h4>
        <div className="flex flex-row justify-center gap-1">
          <Link
            className="inline-flex justify-center w-20 p-3 text-gray-500"
            href="#"
          >
            github
          </Link>
          <Link
            className="inline-flex justify-center w-20 p-3 text-gray-500"
            href="#"
          >
            twitter
          </Link>
          <Link
            className="inline-flex justify-center w-20 p-3 text-gray-500"
            href="#"
          >
            insta
          </Link>
          <Link
            className="inline-flex justify-center w-20 p-3 text-gray-500"
            href="#"
          >
            linkedin
          </Link>
          <Link
            className="inline-flex justify-center w-20 p-3 text-gray-500"
            href="#"
          >
            discord
          </Link>
        </div>
      </div>
      <p className="w-full pt-5 text-gray-500">
        Copyright © 2022 TwofoldTechLLC
      </p>
    </footer>
  );
}
