// 1
/* This is a
multi-line comment */ 

// 2 
var myName; 
   
// 3   
var a;
a = 7  

// 4
var a 
var b = a

// 5
var myVar = 0;
var a = 9

// 6
var myFirstName = 'Bon'
var myLastName  = "Jovi";

// 7
var a = 5;
var b = 10;
var c = "I am a"; 

// Do not change the code below this line

a = a + 1;
b = b + 5;
c = c + " String!";

// 8
// Variable declarations
var studlyCapVar;
var properCamelCase;
var titleCaseOver;

// Variable assignments
studlyCapVar = 10;
properCamelCase = "A String";
titleCaseOver = 9000;

// 9
let catName = "Oliver";
let catSound = "Meow!";

// 10
const FCC = "freeCodeCamp";
let fact = "is cool!";
// fact = "is awesome!"; 
console.log(FCC, fact);

// 11
const sum = 10 + 10;

// 12
const difference = 45 - 33;
console.log(difference); 

// 13 
const product = 8 * 10;
console.log(product); 

// 14
const quotient = 66 / 33;
console.log(quotient);

// 15
let myVar = 11;
// Only change code below this line
myVar--;
console.log(myVar); 

// 16
const myDecimal = 5.7;

// 17
const product = 2.0 * 2.5;

// 18
const quotient = 4.4 / 2.0;

// 19
const remainder = 11 % 3;

// 20
let a = 3;
let b = 17;
let c = 12;

a += 12;
b += 9;
c += 7;

// 21
let a = 11;
let b = 9;
let c = 3;

// Only change code below this line
a -= 6;
b -= 15;
c -= 1;

// 22
let a = 5;
let b = 12;
let c = 4.6;

// Only change code below this line
a *= 5;
b *= 3;
c *= 10;

// 23
let a = 48;
let b = 108;
let c = 33;

// Only change code below this line
a /= 12;
b /= 4;
c /= 11;

// 24
const myStr = "I am a \"double quoted\" string inside \"double quotes\".";

// 25
const myStr = '<a href="http://www.example.com" target="_blank">Link</a>';

// 26
const myStr = 'FirstLine\n\t\\SecondLine\nThirdLine';

// 27
const myStr = "This is the start. " + "This is the end.";

// 28
let myStr = "This is the first sentence. ";
myStr += "This is the second sentence.";

// 28 
const myName = "Your Name";
const myStr = "My name is " + myName + " and I am well!";

//  29
const someAdjective = "fun";
let myStr = "Learning to code is ";
myStr += someAdjective;

// 30

let lastNameLength = 0;
const lastName = "Lovelace";

// Only change code below this line
lastNameLength = lastName.length;

// 31
let firstLetterOfLastName = "";
const lastName = "Lovelace";

// Only change code below this line
firstLetterOfLastName = lastName[0];

// 32
let myStr = "Jello World";

// Only change code below this line
myStr = "Hello World";
// Only change code above this line

// 33
const lastName = "Lovelace";

// Only change code below this line
const thirdLetterOfLastName = lastName[2];

// 34
const lastName = "Lovelace";

// Only change code below this line
const thirdLetterOfLastName = lastName[2];

// 35

const lastName = "Lovelace";

// Only change code below this line
const lastLetterOfLastName = lastName[lastName.length - 1];

// 36
const lastName = "Lovelace";

// Only change code below this line
const secondToLastLetterOfLastName = lastName[lastName.length - 2];

// 37
const lastName = "Lovelace";

// Only change code below this line
const secondToLastLetterOfLastName = lastName[lastName.length - 2];

// 38
const lastName = "Lovelace";

// Only change code below this line
const secondToLastLetterOfLastName = lastName[lastName.length - 2];

// 39
const myNoun = "dog";
const myAdjective = "big";
const myVerb = "ran";
const myAdverb = "quickly";

// Only change code below this line
const wordBlanks = "The " + myAdjective + " " + myNoun + " " + myVerb + " " + myAdverb + ".";
// Only change code above this line

// 40
// Only change code below this line
const myArray = ["Hello", 42];
// Only change code above this line

// 41
// Only change code below this line
const myArray = [["apple", "banana", "orange"], [1, 2, 3]];
// Only change code above this line

// 42

const myArray = [50, 60, 70];

// Only change code below this line
const myData = myArray[0];
// Only change code above this line

// 43
// Setup
const myArray = [18, 64, 99];

// Only change code below this line
myArray[0] = 45;
// Only change code above this line


// 44
const myArray = [
[1, 2, 3],
[4, 5, 6],
[7, 8, 9],
[[10, 11, 12], 13, 14],
];

const myData = myArray[2][1];


// 45
const myArray = [
[1, 2, 3],
[4, 5, 6],
[7, 8, 9],
[[10, 11, 12], 13, 14],
];

const myData = myArray[2][1];


// 46
// Setup
const myArray = [["John", 23], ["cat", 2]];

// Only change code below this line
myArray.push(["dog", 3]);
// Only change code above this line

// 47
// Setup
const myArray = [["John", 23], ["cat", 2]];

// Only change code below this line
const removedFromMyArray = myArray.pop();
// Only change code above this line

console.log(removedFromMyArray);


// 48
// Setup
const myArray = [["John", 23], ["dog", 3]];

// Only change code below this line
const removedFromMyArray = myArray.shift();
// Only change code above this line

console.log(removedFromMyArray);


// 49
// Setup
const myArray = [["John", 23], ["dog", 3]];
myArray.shift();

// Only change code below this line
myArray.unshift(["Paul", 35]);

console.log(myArray);


// 50
const myList = [
  ["Chocolate Bar", 15],
  ["Milk", 2],
  ["Apples", 10],
  ["Bread", 3],
  ["Eggs", 12]
];

console.log(myList);


// 51
function reusableFunction() {
  console.log("Hi World");
}

reusableFunction();

// 52
function functionWithArgs(num1, num2) {
  console.log(num1 + num2);
}

functionWithArgs(3, 7);

// 53
function timesFive(num) {
  return num * 5;
}

const result = timesFive(4);
console.log(result);

// 54
let myGlobal = 10; // Declare and initialize myGlobal variable in the global scope

function fun1() {
  oopsGlobal = 5; // Assign 5 to oopsGlobal (without using var, let, or const)
}

function fun2() {
  let output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}

fun1(); // Call fun1 to assign a value to oopsGlobal
fun2(); // Call fun2 to check the values of myGlobal and oopsGlobal

// 55
function myLocalScope() {
  const myVar = "local variable"; // Declare the local variable myVar inside myLocalScope
  console.log('inside myLocalScope', myVar);
}

myLocalScope();

// The following line will throw a ReferenceError because myVar is not defined outside of myLocalScope
console.log('outside myLocalScope', myVar);

// 56
const outerWear = "T-Shirt";

function myOutfit() {
  const outerWear = "sweater"; // Add a local variable to override the value of outerWear
  return outerWear;
}

myOutfit();

// 57
let sum = 0;

function addThree() {
  sum = sum + 3;
}

function addFive() {
  sum = sum + 5;
}

addThree();
addFive();

// 58
let processed = 0;

function processArg(num) {
  return (num + 3) / 5;
}

processed = processArg(7);

// 59
function nextInLine(arr, item) {
  arr.push(item); 
  return arr.shift();
}

// Setup
let testArr = [1, 2, 3, 4, 5];

// Display code
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));


// 60
function welcomeToBooleans() {
  // Only change code below this line

  return true; // Change this line

  // Only change code above this line
}


// 61
function trueOrFalse(wasThatTrue) {
  // Only change code below this line
  if (wasThatTrue) {
    return "Yes, that was true";
  } else {
    return "No, that was false";
  }
  // Only change code above this line
}


// 62
function testEqual(val) {
  if (val == 12) {
    return "Equal";
  }
  return "Not Equal";
}

testEqual(10);


// 63
function testStrict(val) {
  if (val === 7) {
    return "Equal";
  }
  return "Not Equal";
}

testStrict(10); // Returns "Not Equal"
testStrict(7);  // Returns "Equal"


// 64
function compareEquality(a, b) {
  if (a === b) {
    return "Equal";
  }
  return "Not Equal";
}

compareEquality(10, "10"); // Returns "Not Equal"

// 65
function testNotEqual(val) {
  if (val != 99) {
    return "Not Equal";
  }
  return "Equal";
}

testNotEqual(10); // Returns "Not Equal"
testNotEqual(99); // Returns "Equal"

// 66
function testStrictNotEqual(val) {
  if (val !== 17) {
    return "Not Equal";
  }
  return "Equal";
}

testStrictNotEqual(10); // Returns "Not Equal"
testStrictNotEqual(17); // Returns "Equal"

// 67
function testGreaterThan(val) {
  if (val > 100) {
    return "Over 100";
  }

  if (val > 10) {
    return "Over 10";
  }

  return "10 or Under";
}

testGreaterThan(10); // Returns "10 or Under"
testGreaterThan(101); // Returns "Over 100"
testGreaterThan(20); // Returns "Over 10"

// 68
function testGreaterOrEqual(val) {
  if (val >= 20) {
    return "20 or Over";
  }

  if (val >= 10) {
    return "10 or Over";
  }

  return "Less than 10";
}

testGreaterOrEqual(10); // Returns "10 or Over"
testGreaterOrEqual(20); // Returns "20 or Over"
testGreaterOrEqual(5); // Returns "Less than 10"


// 69
function testLessThan(val) {
  if (val < 25) {
    return "Under 25";
  }

  if (val < 55) {
    return "Under 55";
  }

  return "55 or Over";
}

testLessThan(10); // Returns "Under 25"
testLessThan(30); // Returns "Under 55"
testLessThan(60); // Returns "55 or Over"


// 70
function testLessOrEqual(val) {
  if (val <= 12) {
    return "Smaller Than or Equal to 12";
  }

  if (val <= 24) {
    return "Smaller Than or Equal to 24";
  }

  return "More Than 24";
}

testLessOrEqual(10); // Returns "Smaller Than or Equal to 12"
testLessOrEqual(20); // Returns "Smaller Than or Equal to 24"
testLessOrEqual(30); // Returns "More Than 24"


// 71
function testLogicalAnd(val) {
  if (val <= 50 && val >= 25) {
    return "Yes";
  }
  return "No";
}

testLogicalAnd(10); // Returns "No"
testLogicalAnd(30); // Returns "Yes"
testLogicalAnd(60); // Returns "No"


// 72
function testLogicalOr(val) {
  if (val < 10 || val > 20) {
    return "Outside";
  }
  return "Inside";
}

testLogicalOr(15); // Returns "Inside"
testLogicalOr(5); // Returns "Outside"
testLogicalOr(25); // Returns "Outside"


// 73
function testElse(val) {
  let result = "";
  
  if (val > 5) {
    result = "Bigger than 5";
  } else {
    result = "5 or Smaller";
  }
  
  return result;
}

testElse(4); // Returns "5 or Smaller"
testElse(6); // Returns "Bigger than 5"


// 74
function testElseIf(val) {
  if (val > 10) {
    return "Greater than 10";
  } else if (val < 5) {
    return "Smaller than 5";
  } else {
    return "Between 5 and 10";
  }
}

testElseIf(7); // Returns "Between 5 and 10"
testElseIf(15); // Returns "Greater than 10"
testElseIf(3); // Returns "Smaller than 5"


// 75
function orderMyLogic(val) {
  if (val < 5) {
    return "Less than 5";
  } else if (val < 10) {
    return "Less than 10";
  } else {
    return "Greater than or equal to 10";
  }
}

orderMyLogic(7); // Returns "Less than 10"


// 76
function testSize(num) {
  if (num < 5) {
    return "Tiny";
  } else if (num < 10) {
    return "Small";
  } else if (num < 15) {
    return "Medium";
  } else if (num < 20) {
    return "Large";
  } else {
    return "Huge";
  }
}

testSize(7); // Returns "Small"


// 77
const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {
  if (strokes === 1) {
    return names[0];
  } else if (strokes <= par - 2) {
    return names[1];
  } else if (strokes === par - 1) {
    return names[2];
  } else if (strokes === par) {
    return names[3];
  } else if (strokes === par + 1) {
    return names[4];
  } else if (strokes === par + 2) {
    return names[5];
  } else {
    return names[6];
  }
}

golfScore(5, 4); // Returns "Birdie"


// 78
function caseInSwitch(val) {
  let answer = "";

  switch (val) {
    case 1:
      answer = "alpha";
      break;
    case 2:
      answer = "beta";
      break;
    case 3:
      answer = "gamma";
      break;
    case 4:
      answer = "delta";
      break;
  }

  return answer;
}

caseInSwitch(1); // Returns "alpha"


// 79
function switchOfStuff(val) {
  let answer = "";

  switch (val) {
    case 'a':
      answer = "apple";
      break;
    case 'b':
      answer = "bird";
      break;
    case 'c':
      answer = "cat";
      break;
    default:
      answer = "stuff";
      break;
  }

  return answer;
}

switchOfStuff('a'); // Returns "apple"


// 78
function sequentialSizes(val) {
  let answer = "";

  switch (val) {
    case 1:
    case 2:
    case 3:
      answer = "Low";
      break;
    case 4:
    case 5:
    case 6:
      answer = "Mid";
      break;
    case 7:
    case 8:
    case 9:
      answer = "High";
      break;
  }

  return answer;
}

sequentialSizes(1); // Returns "Low"



// 79
function chainToSwitch(val) {
  let answer = "";

  // Only change code below this line
  switch (val) {
    case "bob":
      answer = "Marley";
      break;
    case 42:
      answer = "The Answer";
      break;
    case 1:
      answer = "There is no #1";
      break;
    case 99:
      answer = "Missed me by this much!";
      break;
    case 7:
      answer = "Ate Nine";
      break;
    default:
      answer = "";
      break;
  }
  // Only change code above this line

  return answer;
}

chainToSwitch(7); // Returns "Ate Nine"


// 80
function isLess(a, b) {
  // Only change code below this line
  return a < b;
  // Only change code above this line
}

isLess(10, 15); // Returns true


// 81
function abTest(a, b) {
  // Only change code below this line
  if (a < 0 || b < 0) {
    return undefined;
  }
  // Only change code above this line
  return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}

abTest(2, 2);


// 82
let count = 0;

function cc(card) {
  // Only change code below this line
  switch (card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count++;
      break;
    case 10:
    case 'J':
    case 'Q':
    case 'K':
    case 'A':
      count--;
      break;
  }

  if (count > 0) {
    return count + " Bet";
  } else {
    return count + " Hold";
  }
  // Only change code above this line
}

cc(2); cc(3); cc(7); cc('K'); cc('A');


// 83
const myDog = {
  name: "Buddy",
  legs: 4,
  tails: 1,
  friends: ["Max", "Charlie", "Daisy"]
};


// 84
// Setup
const testObj = {
  "hat": "ballcap",
  "shirt": "jersey",
  "shoes": "cleats"
};

// Only change code below this line
const hatValue = testObj.hat;
const shirtValue = testObj.shirt;

// 85
// Setup
const testObj = {
  "an entree": "hamburger",
  "my side": "veggies",
  "the drink": "water"
};

// Only change code below this line
const entreeValue = testObj["an entree"];
const drinkValue = testObj["the drink"];


// 86
// Setup
const testObj = {
  12: "Namath",
  16: "Montana",
  19: "Unitas"
};

// Only change code below this line
const playerNumber = 16;
const player = testObj[playerNumber];

// 87
// Setup
const testObj = {
  12: "Namath",
  16: "Montana",
  19: "Unitas"
};

// Only change code below this line
const playerNumber = 16;
const player = testObj[playerNumber];


// 88
// Setup
const myDog = {
  "name": "Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"]
};

// Update name property using dot notation
myDog.name = "Happy Coder";

// Update name property using bracket notation
myDog["name"] = "Happy Coder";



// 89
// Define myDog object
const myDog = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"]
};

// Add bark property to myDog using dot notation
myDog.bark = "woof";

// Add bark property to myDog using bracket notation
myDog["bark"] = "woof";


// 90
const myDog = {
"name": "Happy Coder",
"legs": 4,
"tails": 1,
"friends": ["freeCodeCamp Campers"],
"bark": "woof"
};

delete myDog.tails;


// 91
function phoneticLookup(val) {
  let result = "";

  // Object lookup
  const lookup = {
    "alpha": "Adams",
    "bravo": "Boston",
    "charlie": "Chicago",
    "delta": "Denver",
    "echo": "Easy",
    "foxtrot": "Frank"
  };

  result = lookup[val]; // Lookup the value in the object

  return result;
}

phoneticLookup("charlie");



// 92
function checkObj(obj, checkProp) {
  if (obj.hasOwnProperty(checkProp)) {
    return obj[checkProp];
  } else {
    return "Not Found";
  }
}



// 93
const myMusic = [
  {
    "artist": "Billy Joel",
    "title": "Piano Man",
    "release_year": 1973,
    "formats": [
      "CD",
      "8T",
      "LP"
    ],
    "gold": true
  },
  {
    "artist": "Your Artist",
    "title": "Your Title",
    "release_year": 2022,
    "formats": [
      "CD",
      "Digital",
      "Vinyl"
    ]
  }
];


// 93
const myStorage = {
  "car": {
    "inside": {
      "glove box": "maps",
      "passenger seat": "crumbs"
    },
    "outside": {
      "trunk": "jack"
    }
  }
};

const gloveBoxContents = myStorage.car.inside["glove box"];



// 94
const myPlants = [
  {
    type: "flowers",
    list: [
      "rose",
      "tulip",
      "dandelion"
    ]
  },
  {
    type: "trees",
    list: [
      "fir",
      "pine",
      "birch"
    ]
  }
];

const secondTree = myPlants[1].list[1];



// 95
const recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};

function updateRecords(records, id, prop, value) {
  // Make a copy of the records object to avoid directly modifying it
  const updatedRecords = { ...records };

  if (value === "") {
    // If value is an empty string, delete the prop property from the album
    delete updatedRecords[id][prop];
  } else if (prop !== "tracks") {
    // If prop isn't tracks and value isn't an empty string, assign the value to that album's prop
    updatedRecords[id][prop] = value;
  } else {
    // If prop is tracks and value isn't an empty string
    if (!updatedRecords[id].hasOwnProperty("tracks")) {
      // If the album does not have a tracks property, assign it an empty array
      updatedRecords[id]["tracks"] = [];
    }
    // Add the value as the last item in the album's tracks array
    updatedRecords[id]["tracks"].push(value);
  }

  return updatedRecords;
}

updateRecords(recordCollection, 5439, 'artist', 'ABBA');



// 96
const myArray = [];

let i = 5;
while (i >= 0) {
  myArray.push(i);
  i--;
}


// 97
const myArray = [];

for (let i = 1; i <= 5; i++) {
  myArray.push(i);
}


// 98
const myArray = [];

for (let i = 9; i >= 1; i -= 2) {
  myArray.push(i);
}


// 99
var ourArr = [ 9, 10, 11, 12];
var ourTotal = 0;

for (var i = 0; i < ourArr.length; i++) {
  ourTotal += ourArr[i];
}

// Setup
var myArr = [ 2, 3, 4, 5, 6];
var total = 0;

for (var i = 0; i < myArr.length; i++) {
  total += myArr[i];
}


// 100
function multiplyAll(arr) {
  let product = 1;
  
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      product *= arr[i][j];
    }
  }
  
  return product;
}

multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);


// 100
const myArray = [];
let i = 10;

// Only change code below this line
do {
  myArray.push(i);
  i++;
} while (i < 5);



// 101
const contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

function lookUpProfile(name, prop) {
  for (let i = 0; i < contacts.length; i++) {
    if (contacts[i].firstName === name) {
      if (contacts[i][prop] !== undefined) {
        return contacts[i][prop];
      } else {
        return "No such property";
      }
    }
  }
  return "No such contact";
}

console.log(lookUpProfile("Akira", "likes")); // Output: ["Pizza", "Coding", "Brownie Points"]


// 101
function randomWholeNum() {
  return Math.floor(Math.random() * 10);
}


// 102
function randomRange(myMin, myMax) {
  return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
}



// 103
function convertToInteger(str) {
  return parseInt(str);
}

convertToInteger("56");


// 104
function checkSign(num) {
  return num > 0 ? "positive" : num < 0 ? "negative" : "zero";
}

checkSign(10);


// 105
function countdown(n) {
  if (n < 1) {
    return [];
  } else {
    const countArray = countdown(n - 1);
    countArray.unshift(n);
    return countArray;
  }
}

console.log(countdown(5));


// 106
function rangeOfNumbers(startNum, endNum) {
  if (startNum > endNum) {
    return [];
  } else {
    const countArray = rangeOfNumbers(startNum, endNum - 1);
    countArray.push(endNum);
    return countArray;
  }
}
