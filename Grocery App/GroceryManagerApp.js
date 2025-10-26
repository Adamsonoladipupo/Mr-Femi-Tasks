const prompt = require("prompt-sync")({sigint: true});

let cart = [];
console.log("Welcome to The Grocery Store \n1. Add item \n2. Remove item \n3. Show all available items");
let userInput = prompt("Make a selection: ");
switch (userInput){
	case "1": {
		let userInput = prompt("Enter item: ");
		cart = cart + userInput;
		console.log("%s added successfully", userInput);

	}
	case "2": {console.log("remove item")}
	case "3": {
		console.log("Available Items")
		for (let count = 0; count<= cart.length; count++){
			console.log("%d. %s", count+1, cart[count])
		}

	}
	default: {console.log("Invalid input, please select from the options")}

}