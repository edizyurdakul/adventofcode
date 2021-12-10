const fs = require("fs");

//
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

// part two

increased = 0;

for (let i = 3; i < input.length; i++) {
  const current = input[i] + input[i - 1] + input[i - 2];
  const last = input[i - 1] + input[i - 2] + input[i - 3];
  current > last ? increased++ : null;
}

console.log(increased);

/* 
199  A      
200  A B    
208  A B C  
210    B C D
200  E   C D
207  E F   D
240  E F G  
269    F G H
260      G H
263        H
*/
