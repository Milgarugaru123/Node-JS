import pokemon from "pokemon";
import fs from "fs";
import path from "path";
import os from "os";

const name = pokemon.random(`ko`);
const path1 = path.join(os.homedir(), `Desktop\\` + name);
const path2 = `./\\` + name;

fs.mkdir(path2, (err) => {
  if (err) {
    console.error("폴더 생성 실패:", err);
    return;
  }

  console.log("폴더 생성 완료");
});
