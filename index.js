const info = require("./information");

let cowsay = require("cowsay");

console.log(
  cowsay.say({
    text: ` Hi! I am ${info.name}from ${info.compus}`,
    e: "Oo",
    T: "Uu",
  })
);
