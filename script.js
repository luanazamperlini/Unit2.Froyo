//Create a function with the prompt method with a message "What's your delicious order?"
let flavorsInput = prompt("What's your delicious order?");
// Receive the input of flavors the user wishes to order as a string.
// output :"vanilla,vanilla,vanilla,strawberry,coffee,coffee,strawberry,coffee,coffee"
console.log(flavorsInput);

// The user's input string is split into an array of strings. Remove the commas separation from the string input.
let flavors = flavorsInput.split(",");
console.log(flavors);

//Store the result of this input on a variable named "customerOrder".
let customerOrder = flavors;

// //Do a loop through the array and count each flavor inputted. It should count how many orders there are of each flavor.
