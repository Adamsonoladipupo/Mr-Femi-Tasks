const prompt = require("prompt-sync")({sigint: true});

// Functions
function AddItem(item, cart){
	cart.push(item);
	let message = "Item added successfully";
	return message;	
}
function RemoveItem(item, cart){
	cart.pop(item);
	let message = "Item remove successfully";
	return message;	
}


let cart = [];

while (true){
	console.log("----------------------------------- \nWelcome to The Grocery Store \n1. Add item \n2. Remove item \n3. Show all available items \n----------------------------------");
	let userInput = prompt("Make a selection: ");
	if (userInput == 1){
		let userInput = prompt("What item are you adding: ");
		let AddingItem = AddItem(userInput, cart);
		console.log("'%s' added successfully",userInput);
	}
	if (userInput == 2){
		let userInput = prompt("What item are you removing: ");
		let RemovingItem = RemoveItem(userInput, cart);
		console.log("'%s' removed successfully",userInput);
	}
	if (userInput == 3){
		console.log("Available items in the cart:")
		for (let count = 0; count < cart.length; count++){
			console.log("%d. %s", count+1, cart[count]);
		}
	}
	if (userInput != 1 && userInput != 2 && userInput != 3){
		console.log("Invalid input, please select from the options")
	}
} // end of while loop
