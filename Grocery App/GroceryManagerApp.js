const prompt = require("prompt-sync")({sigint: true});

console.log("Welcome to The Grocery Store \n1. Add item \n2. Remove item \n3. Show all available items");
let userInput = prompt("Make a selection: ");