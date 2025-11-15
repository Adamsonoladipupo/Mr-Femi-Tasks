const prompt = require ("prompt-sync")({sigint:true});

let word = "Innovation"
let sentenseOne = "The progressive development of man is vitally dependent on innovation";

let userName = prompt("Enter your name: ");

	const mainDisplay = `
	
	==> ${userName} Typing Speed Test <==

	1. Start Test
	0. Exit

	`;
let userInput = 4
while(userInput != 0){
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

			let matched = 0; let = totalCharacter = 0;
			for (let count = 0; count < sentenseOne.length; count++){
				totalCharacter++;
				if (sentenseOne[count] == answer[count]){
					matched++;
				}
			}
			let accuracy = (matched/totalCharacter) * 100;


			const end = Date.now();
			const duration = end - start;
 			
			const durationInMinutes = duration/ 60000
			const wpm = 10/durationInMinutes;
			

			console.log("Time taken: ", duration/1000,"Seconds");
			console.log("Words per minutes: ",wpm)
			console.log("Accuracy: ",accuracy)

/*

			let finalResult = `
	----------------------------------
	Result				
	----------------------------------
	Time taken: ${duration/1000}seconds
	Words per minutes: ${wpm}
	Accuracy: ${accuracy}
	----------------------------------
			`;
			console.log(finalResult);
*/
			break;
		}
		case "0": {
			console.log("Thank you for testing");
			break;
		}
		default: {
			console.log("Please, enter a valid input");
			break;
		}
	}

}


