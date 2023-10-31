// Battle Game Project 10/27/2023

// Add an event handler to the button element
	document.getElementById("button").onclick = startBattle;
// Definition of the startBattle() function which starts the game
	function startBattle() {
// Clear any old messages in the document from previous games
	document.getElementById("victory").textContent = "";
	document.getElementById("defeat").textContent = "";
// Initial prompt for the user input that gets stored in a variable
	let action = window.prompt("You're walking through Factory and Tagilla suddenly appears!\n\nDo you FIGHT Tagilla?\n\nDo you RUN from Tagilla?\n\nDo you try to BRIBE Tagilla?").toUpperCase()
// Switch statement to handle the player's choice
	switch(action) {
		case "FIGHT": {
			fightBattle();
			break;
		}
		case "RUN": {
			runBattle();
			break;
		}
		case "BRIBE": {
			bribeBattle();
			break;
		}
		default: {
// were here because the user has not entered a valid prompt
			window.alert("you entered: " + action + ". That is not a valid choice! Please try again!");
			startBattle();
			break;
		}
	}
}
// Definition of the fightBattle() function
	function fightBattle() {
// Start collecting some user repsonses with variables
			let skill = window.prompt("Are you a skilled fighter? (Yes or NO)").toUpperCase();
			let strong = window.prompt("Do you think you are stronger than Tagilla? (YES or NO)").toUpperCase();
// Logic that analyzes the responses and creates the outcome
			if (skill === "YES" || strong === "YES") {
// The user said YES to at least one prompt
				document.getElementById("victory").innerHTML = "You have won with either skill or strength!</br>You survive another day!"
				document.getElementById("win").play();
				document.getElementById("button").textContent = "Play Again?";
			} else {
				document.getElementById("defeat").innerHTML = "You are not skilled or strong?</br>Why did you fight Tagilla</br>You have been defeated!!"
				document.getElementById("lose").play();
				document.getElementById("button").textContent = "Play Again?";
			}
	}
// Definition of the runBattle() function
	function runBattle() {
// Variable to store the user repsonse
		let fast = window.prompt("Do you have a SJ-6? (YES or NO)").toUpperCase();
// Logic to analyze the variable and provide the outcome
		if(fast === "YES") {
			document.getElementById("victory").innerHTML = "Your SJ-6 has saved you!</br>But at what cost?";
			document.getElementById("win").play();
			document.getElementById("button").textContent = "Try Again?"
		}else {
			document.getElementById("defeat").innerHTML = "You didn't have an SJ-6, Tagilla caught you trying to exit Gate 3!";
			document.getElementById("lose").play();
			document.getElementById("button").textContent = "Try Again?"
		}
	}
// Definition of the bribeBattle() function
	function bribeBattle() {
// Variable to store the user repsonse
		let moeny = window.prompt("You can try to give Tagilla an Alyonka.\nDo you have one? (YES or NO)").toUpperCase();
// Logic to analyze the variable and provide the outcome
		if(money === "YES") {
// They said they had money, now ask for the amount
			let amount = window.prompt("How many Alyonka's do you have?\nPlease enter a NUMERIC VALUE!");
// Check the amount against out condition
			if (amount > 3) {
				document.getElementById("victory").innerHTML = "You were able to distract Tagilla long enough to get past him"
				document.getElementById("win").play();
				document.getElementById("button").textContent = "Try Again?"
			} else {
// User had money, just not enough of it
				document.getElementById("defeat").innerHTML = "You didn't have a enough chocolate.</br> You didn't survive!";
				document.getElementById("lose").play();
				document.getElementById("button").textContent = "Try Again?"
			}
		}else {
// User daid they didnt have any money
			document.getElementById("defeat").innerHTML = "You didn't have a chocolate.</br> You didn't survive!";
			document.getElementById("lose").play();
			document.getElementById("button").textContent = "Try Again?"
		}
	}