/*
A visitor receives a prompt upon opening the website to
enter a list of comma-separated froyo flavors.
They type vanilla,vanilla,vanilla,strawberry,coffee,coffee.
In this case, they will be able to observe that they have ordered three vanilla,
two coffee, and one strawberry froyo.
*/

// Need Prompt --> vanilla,vanilla,vanilla,strawberry,coffee,coffee

// create a prompt that will prompt the user to enter a list of froyo flavors

const userInput = prompt(
  "What's your flavor of the day? If more than one, please, separate them by coma ','"
);
console.log(userInput);

// convert the string into an array using split() (delete commas)
const froyoFlavors = userInput.split(",");

console.log("froyoFlavors --->", froyoFlavors);

const arrayOfFlavors = [
  "vanilla",
  "vanilla",
  "vanilla",
  "strawberry",
  "coffee",
  "coffee",
];

console.table(arrayOfFlavors);

// create a function named freqCounter that takes in an array as a parameter
function createFreqCounter(array) {
  // create an empty object to populate with key:value pairs
  // key:values are going to be a count of all the elements in the array
  const flavorCounter = {};
  // loop over the froyoFlavors array to get every element
  for (let i = 0; i < array.length; i++) {
    // grab each element and store in a variable
    const element = array[i];
    // if the element  exist in the object
    if (element in flavorCounter) {
      // Increment the value in the object
      flavorCounter[element] += 1;
      // otherwise
    } else {
      //Add the element to the object and give it a value of 1
      flavorCounter[element] = 1;
    }
  }

  // return the built object
  return flavorCounter;
}

const getFlavorCount = createFreqCounter(froyoFlavors);
console.table(getFlavorCount);
