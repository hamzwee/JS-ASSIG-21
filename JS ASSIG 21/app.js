// STRING METHODS


// Q1
// let firstname = prompt("Please enter your first name:");
// let lastname = prompt("Please enter your lastname:");
// let fullname = firstname+" "+lastname;
// alert("Hello, " + fullname + "! Assalamualaikum. ");


// Q2
// let favoritePhone = prompt("Please enter your favorite mobile phone model:");

// let lengthOfInput = favoritePhone.length;

// document.write("<h1><h1/>My Favorite Phone is " + favoritePhone + ". Length of string: " + lengthOfInput);


// Q3
// let word = "Pakistani";
// let indexOfN = word.indexOf("n");
// document.write("<h1>String: " + word + ", index of 'n': " + indexOfN);



// Q4
// let word = "Hello World";
// let lastIndexofL = word.lastIndexOf("l");
// document.write("<h1>String: " + word + ", last index of 'l': " + lastIndexofL);



// Q5
// let word = "Pakistani";
// let characterAtIndex3 = word.charAt(3);
// document.write("String: " + word + ", character at index 3: " + characterAtIndex3);



// Q6
// let firstName = prompt("Please enter your first name:");
// let lastName = prompt("Please enter your last name:");
// let fullName = firstName.concat(" ", lastName);
// alert("Hello, " + fullName + "! Welcome.");




// Q7
// let word = "Hyderabad";
// let replacedWord = word.replace("Hyder", "Islam");
// document.write("City: " + word + "<br>");
// document.write("After Replacement: " + replacedWord);




// Q8
// var message = "Ali and Sami are best friends. They play cricket and football together.";
// var replacedMessage = message.replace(/and/g, "&");
// document.write("Original Message: " + message + "<br>");
// document.write("After Replacement: " + replacedMessage);




// Q9
// var str = "472";
// var num = parseInt(str);
// document.write("Value: " + str + "  Type: " + typeof str + "<br>");
// document.write("Value: " + num + "  Type: " + typeof num);



// Q10
// var userInput = prompt("Please enter your input:");

// var uppercaseInput = userInput.toUpperCase();

// alert("Uppercase Input: " + uppercaseInput);



// Q11
// var userInput = prompt("Please enter your input:");
// var titleCaseInput = userInput.toLowerCase().replace(/\b\w/g, function(char) {
//     return char.toUpperCase();
// });
// alert("Input in Title Case: " + titleCaseInput);



// Q12
// var num = 35.36;
// var numAsString = num.toString();
// var numWithoutDot = numAsString.replace(".", "");
// document.write("Original Number: " + num + "<br>");
// document.write("Number as String: " + numWithoutDot);




// Q13
// var username = prompt("Please enter your username:");
// if (/[!@.,]/.test(username)) {

//     alert("Please enter a valid username without special symbols [@, ., !]");
// } else {

//     alert("Your username is: " + username);
// }



// Q14
// var A = ["cake", "apple pie", "cookie", "chips", "patties"];

// var userInput = prompt("Enter an item to search for:");

// var userInputLowercase = userInput.toLowerCase();

// var found = false;

// for (var i = 0; i < A.length; i++) {

//     var currentItemLowercase = A[i].toLowerCase();

//     if (currentItemLowercase === userInputLowercase) {
//         found = true;
//         break;
//     }
// }

// if (found) {
//     alert("Yes, '" + userInput + "' is found in the list.");
// } else {
//     alert("Sorry, '" + userInput + "' is not found in the list.");
// }



// Q15
// var password = prompt("Please enter your password:");
// if (
//     password.length < 6 ||               
//     !isNaN(password.charAt(0)) ||        
//     !(/[a-zA-Z]/.test(password)) ||  
//     !(/[0-9]/.test(password))            
// ) {
//     alert("Please enter a valid password that contains alphabets and numbers, does not start with a number, and is at least 6 characters long.");
// } else {
//     alert("Password is valid.");
// }




// Q16
// var university = "University of Karachi";
// var universityArray = university.split(" ");
// document.write("Array elements:<br>");
// for (var i = 0; i < universityArray.length; i++) {
//     document.write(universityArray[i] + "<br>");
// }


// Q17
// var userInput = prompt("Please enter your input:");
// var lastCharacter = userInput.charAt(userInput.length - 1);
// alert("The last character of your input is: " + lastCharacter);


// Q18
// var sentence = "The quick brown fox jumps over the lazy dog";
// var lowercaseSentence = sentence.toLowerCase();
// var wordToSearch = "the";
// var occurrencesOfThe = lowercaseSentence.split(wordToSearch).length - 1;
// alert("Number of occurrences of the word 'the': " + occurrencesOfThe);


