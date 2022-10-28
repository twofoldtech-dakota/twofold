import Image from "next/image";
import Link from "next/link";
import Header from "./Header";

export default function Home() {
  return (
    <div className="home-wrapper">
      <div className="page-intro">
        <div className="page-intro-text">
          <h5>Digital Solution Experts</h5>
          <h1>Experience Matters.</h1>
          <h3>
            We specialize in building Sitecore experiences for our customers
          </h3>
        </div>
      </div>
    </div>
  );
}
