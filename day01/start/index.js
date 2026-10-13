import chalk from "chalk";
import pokemon from "pokemon";

const poke = pokemon.random(`ko`);
const pikachu = pokemon.getName(25, `ko`);

console.log(chalk.green(`안녕하세요.`));
console.log(chalk.red(`저의 이름은 ${poke}입니다.`));
console.log(
  chalk.yellow(
    `오늘 날짜는 ${new Date()
      .toLocaleDateString()
      .split(/[.][ ]?/)
      .reduce((x, y) => {
        if (y) return x + `/` + y;
        else return x + y;
      })} 입니다.`,
  ),
);
console.log(chalk.blue(`ㅅㄱ`));

// console.log(pokemon.all());
console.log(chalk.yellow(pikachu));
