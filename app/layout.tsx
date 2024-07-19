import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import {TRPCProvider} from "../providers/TRPC-Provider";

const poppins = Poppins({weight:"500",subsets:["latin"]});

export const metadata: Metadata = {
  title: "Pokedex Problem",
  description: "Pokedex Problem Task",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        {/* Wrapping TRPC Provider */}
        <TRPCProvider>
        {children}
        </TRPCProvider>
        </body>
    </html>
  );
}
