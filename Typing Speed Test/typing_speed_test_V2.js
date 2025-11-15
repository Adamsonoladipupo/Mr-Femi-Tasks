const prompt = require ("prompt-sync")({sigint:true});


// sentences
let word = "Innovation"
let sentenseOne = "The progressive developement of man is vitally dependednt on innovation";
let sentenseTwo = "Bests with thesame feathers flocks together";
let sentenceThree = "Use consistent naming conventions across your project.";
let userName = prompt("Enter your name: ");

	const mainDisplay = `
	
	==> ${userName} Typing Speed Test <==

	1. Start Test
	2. Check performance
	3. Exit

	`;
let userInput = 4
while(userInput != 3){
	console.log(mainDisplay);
	userInput = prompt("Enter 1 to start: ");
	switch(userInput){
		case "1": {
			const start = Date.now();
			let test = `

	Sentence : ${sentenseOne}

			`;
			console.log(test);
			let answer = prompt("Let's Go !!! : ");
			const end = Date.now();
			const duration = end - start;
 			
			const durationInMinutes = duration/ 60000
			const wpm = 10/durationInMinutes;
			
			console.log("Total time spend: ", duration/1000,"Seconds");
			console.log("Word per minutes: ",wpm)
			break;
		}

		case "2": {
			console.log("no performance yet");
			break;
		}
		case "3": {
			console.log("Thank you for testing");
			break;
		}
		default: {
			console.log("Please, enter a valid input");
			break;
		}
	}

}


