import pokemon from "pokemon";
import fs from "fs";

const getRandomInt = (max) => Math.floor(Math.random() * max) + 1;

if (!fs.existsSync(`pokemons`)) fs.mkdirSync(`pokemons`);
Array(getRandomInt(10))
  .fill(0)
  .forEach((x) => fs.mkdirSync(`pokemons\\` + pokemon.random(`ko`)));
