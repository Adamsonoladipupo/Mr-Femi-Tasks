/*
Accuracy = total character/ total match character) * 100

	for (const char1 of sample1){
		console.log("1:",char1);
		totalCharacter++;
		for (const char2 of sample2){
			console.log("2:",char2);
			if (char1 == char2){
				match++;
			}
		}

	}


*/

let sample1 = "The brown";
let sample2 = "The b.rown";
//console.log(sample1.length);
let match = 0;
let totalCharacter = 0;
for (let count = 0; count < sample1.length; count++){
	totalCharacter++;
	if (sample1[count] == sample2[count]){
		match++;
	}
}
console.log(match);
console.log(totalCharacter);
let accuracy = (match/totalCharacter) * 100;
console.log("Accuracy: ",accuracy);
