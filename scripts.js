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

var dieRoll = Math.floor(Math.random() * 6 ) + 1;
alert("You rolled a " + dieRoll) + "!";



