import java.util.Scanner;

public class TypingSpeedTest{
	public static int getTimeInMinutes(int userInput){
		return userInput;
	}

	public static void printResult(int userInput){
		
	}

	public static void printSentence(String input){
		String display = """

	Sentence: %s

		""";
		System.out.printf(display, input);
	}

	public static void printMainMenu(String name){
		String display = """
		
	==> %s Typing Speed Test <==

	1. Start Test
	0. Exit
		""";
	System.out.printf(display, name);
	}

	public static void main(String[] args){
		Scanner inputCollector = new Scanner(System.in);

		String sentence = "The progressive development of man";
		System.out.print("Enter your name: ");
		String userName = inputCollector.nextLine();

		String userInput = "4";
		while(!userInput.equalsIgnoreCase("0")){
			printMainMenu(userName);

			System.out.print("Make a selection: ");
			userInput = inputCollector.nextLine();
			switch (userInput){
				case "1"-> {
					printSentence(sentence);
					System.out.print("Lets Go!!!: ");
					String answer = inputCollector.nextLine();


					int matched = 0; int totalCharacter = 0;
					for (int count = 0; count < sentence.length(); count++){
						totalCharacter++;
						char sentkk = sentence.charAt(count);
						System.out.print(sentkk);
					}
					//int accuracy = (matched/totalCharacter) * 100;
					
				} // end of case 1
/*


				case "0"-> {
					System.out.print("Thank you for testing");
					break;
				}
				default-> {
					System.out.print("Please, enter a valid input");
					break;
				}
*/

			}
		}	
	}
}