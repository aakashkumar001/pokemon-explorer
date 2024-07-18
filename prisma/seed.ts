import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
  await prisma.pokemon.createMany({
    data: [
      {
        name: "Bulbasur",
        types: ["grass", "poison"],
        sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/001.png",
      },
      {
        name: "Squirtle",
        types: ["water"],
        sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/007.png",
      },
      {
        name: "Butterfree",
        types: ["bug", "flying"],
        sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/012.png",
      },
      {
        name: "Pikachu",
        types: ["electric"],
        sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/025.png",
      },
      {
        name: "Nidorino",
        types: ["poison"],
        sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/033.png",
      },
      {
        name: "Oddish",
        types: ["grass", "poison"],
        sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/001.png",
      },
      {
        name: "Meowth",
        types: ["normal"],
        sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/052.png",
      },
      {
        name: "Growlithe",
        types: ["fire"],
        sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/058.png",
      },
      {
        name: "Machoke",
        types: ["fighting"],
        sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/067.png",
      },
      {
        name: "Ponyta",
        types: ["fire"],
        sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/077.png",
      },
      {
        name: "Seel",
        types: ["water"],
        sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/086.png",
      },
      {
        name: "Drowzee",
        types: ["psychic"],
        sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/096.png",
      },
    ],
  });
}

main()
  .then(() => {
    console.log("Database Seeding Completed!");
  })
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
