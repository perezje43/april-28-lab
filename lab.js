'use strict';

// LAB: SORTING AND CAMPY SCI-FI

// Be sure to read all the comments!
// That's where the instructions are!

// All of the instructions are inline with the assignment below.
// Look for the word TODO in comments.  Each TODO will have a
// description of what is required.

//*********************************************************
// SETUP
//*********************************************************

// We're going to use this special assert method to
// test our code
function assert(expression, failureMessage) {
  if (!expression) {
    console.log('assertion failure: ', failureMessage);
  }
}

//*********************************************************
// PROBLEM 1: The Blob
//*********************************************************

/* Dowington, PA had 1000 citizens on the night the blob escaped
 its meteorite. At first, the blob could only find and consume
 Pennsylvanians at a rate of 1/hour. However, each time it digested
 someone, it became faster and stronger: adding to its consumption
 rate by 1 person/hour.
    for the...      | starting rate of | persons consumed |
                    |  consumption     |    that hour     |
--------------------|------------------|------------------|
    first hour      |    1/hour        |        1         |
    second hour     |    2/hour        |        2         |
    third hour      |    3/hour        |        3         |
    fourth hour     |    4/hour        |        4         |
 TODO: First, make a constructor function, called Blob, that makes blobs.
 TODO: Next, create an instance of Blob named blob.
 TODO: Then, use a loop to calculate how long it took the blob to finish
 with Dowington.
*/

function Blob(name) {
  this.name = name;
}

var blob = new Blob('blob');

// var population = 1000;
// var startingConsumptionRate = 1;
// hoursSpentInDowington();

// var hoursSpentInDowington = ; // TODO: assign me the value of the
                           // above calculation (how long it took
                           // the blob to eat Dowington)

// var hoursSpentInDowington = blob.hoursToOoze(1000, 1);

// Now, write a method that takes a population for an arbitrary
// town, and the starting consumption rate, and returns the number
// of hours the blob needs to ooze its way through that town.

Blob.prototype.hoursToOoze = function (population, startingConsumptionRate) {
  // TODO: implement me based on the instructions above.
  // Be sure to then assign me to the Blob's prototype.
  var eaten = 0;
  var hoursInDowington = 0;
  for(var i = 0; i < population; i = eaten) {
    hoursInDowington++;
    eaten += startingConsumptionRate;
    startingConsumptionRate++;
  }
  return hoursInDowington;
};

var hoursSpentInDowington = blob.hoursToOoze(1000, 1);

assert(blob.hoursToOoze(0, 1) === 0, 'no people means no time needed.');
assert(blob.hoursToOoze(1000, 1) === hoursSpentInDowington,
  'hoursSpentInDowington should match hoursToOoze\'s result for 1000');

// TODO: write three more assertions like the two above, testing out
// the hoursToOoze method.

assert(blob.hoursToOoze(1, 1) === 1, 'Should be 1.');
assert(blob.hoursToOoze(2, 24) === 1, 'Wrong');
assert(blob.hoursToOoze(25, 24) === 2, 'You idiot.');

//*********************************************************
// PROBLEM 2: Universal Translator
//*********************************************************
//
// var hello = {
//   klingon: 'nuqneH',  // home planet is Qo'noS
//   romulan: 'Jolan\'tru', // home planet is Romulus
//   'federation standard': 'hello' // home planet is Earth
// };
//
// // TODO: define a constructor that creates objects to represent
// // sentient beings. They have a home planet, a language that they
// // speak, and method (that you'll place on the prototype) called
// // sayHello.
//
// function SentientBeing (homePlanet, language) {
//   // TODO: specify a home planet and a language
//   // you'll need to add parameters to this constructor
//   this.homePlanet = homePlanet;
//   this.language = language;
// }
//
// // sb is a SentientBeing object
// function sayHello (sb) {
//     // TODO: say hello prints out (console.log's) hello in the
//     // language of the speaker, but returns it in the language
//     // of the listener (the sb parameter above).
//     // use the 'hello' object at the beginning of this exercise
//     // to do the translating
//
//     //TODO: put this on the SentientBeing prototype
// }
//
// // TODO: create three subclasses of SentientBeing, one for each
// // species above (Klingon, Human, Romulan).
//
// assert((new Human()).sayHello(new Klingon()) === 'nuqneH',
//   'the klingon should hear nuqneH');
//
// // TODO: write five more assertions, to complete all the possible
// // greetings between the three types of sentient beings you created above.

//*********************************************************
// PROBLEM 3: Sorting
//
// Implement the following functions. Write at least 2
// assertions for each one (the assertions are how you
// will test your code)
//*********************************************************

function lastLetterSort(stringArray) {
  function byLastLetter(a, b) {
    //TODO: Sort the strings in alphabetical
    // order using their last letter
    // Read this about how the sort function works:
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
    // this byLastLetter function is a "compare function"
    // And check out the "comparing strings" section  here:
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
    if(a[a.length - 1] < b[b.length - 1]) {
      return -1;
    } else if (a[a.length - 1] > b[b.length - 1]) {
      return 1;
    } else {
      return 0;
    }
  }
  stringArray.sort(byLastLetter);
  console.log(stringArray);
}

function sumArray(numberArray) {
  var sum = 0;
  numberArray.forEach(function(value) {
    sum += value;
  });
  return sum;
  // TODO: implement me using forEach
}

// var numberArray1 = [1,2,3];
// sumArray(numberArray1);
// console.log(sumArray(numberArray1));

function sumSort(arrayOfArrays) {
  var sumArrayOfArrays = [];
  arrayOfArrays.sort(function(item) {
    // TODO: implement me using sumArray
    //  order the arrays based on the sum of the numbers
    //  inside each array
    sumArray(item);
    sumArrayOfArrays.push(sumArray(item));
    // console.log(sumArray(item));
    // console.log(sumArrayOfArrays);
  });
  return sumArrayOfArrays;
}

var item1 = [[1,2,4], [1,2,3], [1,2,5]];
console.log(sumSort(item1));
sumSort(item1);
