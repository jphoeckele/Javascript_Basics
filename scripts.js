// var visitorName = prompt("What is your name?");
// alert(visitorName);

// var visitor = prompt("What is your name?");
// var message = "Hello " + visitor + "! " + "Welcome to my JavaScript examples";
// message += "I'm so glad that you decided to stop by, ";
// message += visitor;
// message += ". Please come back again soon!";
// document.write(message);

// var passphrase = 'Open Sesame';
// document.write(passphrase.length);
// console.log(passphrase.length);

// var stringToShout = prompt("What should I shout?");
// var shout = stringToShout.toUpperCase();
// shout += "!!!";
// alert(shout);

// var userName = prompt("What is your name?");
// alert("Nice to meet you " + userName);
// alert("We're going to write a short story");
// var location = prompt("Please enter the name of a city.");
// alert("Good Choice!");
// var animal = prompt("Please, enter your favorite type of animal.");
// var animalName = prompt("Enter one more name, please.");
// var day = prompt("Alright, now enter a day of the week.");
// var sentence1 = ("Once there was a beautiful princess named " + userName + " ");
// var sentence2 = ("Princess " + userName + " lived in the magical kindom of " + location + ".");
// var sentence3 = (userName + " had a giant " + animal + " named " + animalName + ".");
// var sentence4 = (animalName + " was so big that she was only fed on " + day + "s.");
// document.write(sentence1 + sentence2 + sentence3 + sentence4);


// var adjective = prompt('Please type an adjective');
// var verb = prompt('Please type a verb');
// var noun = prompt('Please type a noun' + questionsLeft);
// alert('All done. Ready for the message?');
// var sentence = "<h2>There once was a " + adjective;
// sentence += ' programmer who wanted to use JavaScript to ' + verb;
// sentence += ' the ' + noun + '.</h2>';
// document.write(sentence);


/* Seconds Alive Counter */
// var secondsPerMin = 60;
// var minPerHour = 60;
// var hourPerDay = 24;
// var secondsPerDay = secondsPerMin * minPerHour * hourPerDay;
// // document.write("There are " + secondsPerDay + " in a day!");
// var daysPerYear = 365;
// var yearsAlive = prompt("How old are you?");
// var secondsPerYear = secondsPerDay * daysPerYear;
// var ageInSeconds = secondsPerYear * yearsAlive;
// document.write("<h1>You have been alive for more than " + ageInSeconds + " seconds!!!");

// var userNum = prompt("Please enter a number");
// var dieRoll = Math.floor(Math.random() * userNum ) + 1;
// var message = "<p>" + dieRoll + " is a number between 1 and " + userNum + "!";
// document.write(message);

/*********** Conditional Statements *************/
// var answer = prompt("What programming language is the name of a gem?");
// if ( answer.toUpperCase() === "RUBY") {
// document.write("<p>That's right!</p>");
// } else {
// 	document.write("<p>Sorry, that's incorrect.</p>");
// }


// Assumes that the player guessed incorrectly
// var correctGuess = false;
// //Generates a random number between 1 and 6
// var randomNumber = Math.floor(Math.random() * 6) + 1;
// var guess = prompt("I am thinking of a number between 1 and 6. What is it?");
// /*Tests to see if the player is 
// 	1. correct
// 	2. guessed too high
// 	3. guessed to low
// */
// if (randomNumber === parseInt(guess)) {
// 	correctGuess = true;
// }	else if (parseInt(guess) < randomNumber) {
// 	var guessMore = prompt('Try again, the number I am thinking of is more than ' + guess + ".");
// 	if (randomNumber === parseInt(guessMore)) {
// 		correctGuess = true;
// 	}
// } else if (parseInt(guess) > randomNumber) {
// 	var guessLess = prompt('Try again, the number I am thinking of is less than ' + guess + ".");
// 	if (randomNumber === parseInt(guessLess)) {
// 		correctGuess = true;
// 	}
// }
// // Test if player is correct and produes output
// if (correctGuess) {
// 	document.write('<p>You guessed correctly');
// } else {
// 	document.write('<p>Sorry, but ' + guess + ' was not the correct number.<br>The number I was thinking of was ' + randomNumber + "!");
// }
var total = 0
var question1 = prompt("What is 2 + 2 ?");
if (parseInt(question1) === 4) {
	total += 1;
}
var question2 = prompt("What is 4 + 4 ?");
if (parseInt(question2) === 8) {
	total += 1;
}
var question3 = prompt("What is 6 + 6 ?");
if (parseInt(question3) === 12) {
	total += 1;
}
var question4 = prompt("What is 8 + 8 ?");
if (parseInt(question4) === 16) {
	total += 1;
}
var question5 = prompt("What is 10 + 10 ?");
if (parseInt(question5) === 20) {
	total += 1;
}
if (total === 1){
	alert("What the hell buddy? You only got " + total + " question correct!");
} else if (total <= 4) {
	alert("Not bad. You got " + total + " questions correct!");
} else {
	alert("Congratulations, you answered " + total + " questions correct. You're almost a 2nd grader!")
}






