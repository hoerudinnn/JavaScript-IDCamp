function myFunct(number, ...myArgmnts) {
  console.log(myArgmnts.length);
  console.log("number", number);
  console.log("myArgments", myArgmnts);
}

myFunct("one", "two", "three");

const favorites = [
  "nasi goreng",
  "bakso",
  "mie ayam",
  "seblak",
  "sate",
  "soto ayam",
];

const [first, second, ...rest] = favorites;

console.log(first);
console.log(second);
console.log(rest);
