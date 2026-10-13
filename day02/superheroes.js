import { randomSuperhero } from "superheroes";
import fs from "fs";

const getRandomInt = (max) => Math.floor(Math.random() * max) + 1;

if (!fs.existsSync(`superheroes`)) fs.mkdirSync(`superheroes`);
Array(getRandomInt(10))
  .fill(0)
  .forEach((x) => fs.mkdirSync(`superheroes\\` + randomSuperhero()));
