const fs = require("fs");

const input = fs
  .readFileSync("input.txt", { encoding: "utf-8" })
  .split("\n")
  .filter((x) => Boolean(x))
  .map((x) => parseInt(x));

let increased = 0;

for (let i = 1; i < input.length; i++) {
  const current = input[i];
  const last = input[i - 1];
  current > last ? increased++ : null;
}

console.log(increased);
// 1665

/*
187 - last
195 - current
199
218
*/
