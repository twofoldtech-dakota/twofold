import Head from "next/head";
import Image from "next/image";
import "../styles/globals.css";
import Footer from "./Footer";
import Header from "./Header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <title>Twofold Tech</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className="text-black bg-white dark:bg-darkGrey dark:text-white">
        <Header />
        <main className="p-10 grow-[2]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
