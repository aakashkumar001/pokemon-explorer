"use client";

import FilterablePokedexTable from "@/components/FilterablePokedexTable";
import PokemonForm from "@/components/PokemonForm";
import { trpc } from "@/server/client";

export default function Home() {

  // // const getUsers = await trpc.users.getUsers.useQuery();
  // const user = trpc.users.getPokemon.useQuery("bulbasur");
  // const users = trpc.users.getPokemonsArray.useQuery(["bulbasur","squirtle","pikachu"]);
  // const userss = trpc.users.getPokemonsByType.useQuery("poison");
  // console.log(userss.data)

  return (
   <div className="text-3xl text-green-500 font-bold">
    PokeDex
     {/* <h1>{JSON.stringify(userss.data)}</h1> */}
     <PokemonForm/>
     <FilterablePokedexTable/>
   </div>
  );
}
