// this is my age
const myAge = 35;

// my first years
let earlyYears = 2;
earlyYears *= 10.5;

// my late years
let laterYears = myAge - 2;
laterYears *= 4;

// console.log("earlyYears", earlyYears);
// console.log("laterYears", laterYears);

const myAgeInDogYears = earlyYears + laterYears;

const myName = "Kai".toLowerCase();
console.log(
	`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`
);
