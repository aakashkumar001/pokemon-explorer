"use client";

import FilterablePokedexTable from "@/components/FilterablePokedexTable";
import PokemonSearchForm from "@/components/PokemonSearchForm";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <header className="text-3xl text-green-500 font-bold w-full flex items-center justify-center">
        <Image src="/logo.png" width={480} height={320} alt="logo" />
      </header>
      <main>
        <PokemonSearchForm />
        <FilterablePokedexTable />
      </main>
      <footer className="text-center">2024 ©️ All rights Reserved</footer>
    </>
  );
}
