import {publicProcedure, router} from "../trpc";
import {z} from "zod";
import prisma from "../../lib/prisma"


export const pokemonRouter = router({
    //Get a single Pokemon
    getPokemon: publicProcedure.input(z.string()).query(async ({input}) => {
        const pokemon = await prisma.pokemon.findUnique({where:{name:input}});
        return {
            id:pokemon?.id,
            name:pokemon?.name,
            type:pokemon?.types,
            sprite:pokemon?.sprite,
        };
    }),
    //Get Pokemons Array
    getPokemonsArray: publicProcedure.input(z.array(z.string())).query(async ({input}) => {
         const pokemons = await prisma.pokemon.findMany({
            where:{
                name:{
                    in: input,
                },
            },
         });

         return pokemons;
    }),
   //Get Pokemons By Type
    getPokemonsByType: publicProcedure.input(z.string()).query(async ({input}) => {
        const pokemons = await prisma.pokemon.findMany({
           where:{
               types:{
                   has: input,
               },
           },
        });

        return pokemons;
   }),
});
