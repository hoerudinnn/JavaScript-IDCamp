const fruits = ["aple", "banana", "grape", "orange", "manggo"];
console.log(fruits[1]);

// manipulasi array dengan indexing
const myArray = [1, 2, 3, 4, 5, 6];
myArray[2] = 10;

console.log(myArray);

// manipulasi array dengan push
const animals = ["cat", "dog", "chicken"];
animals.push("elephant");

console.log(animals);

// delete data array
const age = [22, 28, 30, 21, 20];
delete age[2];

console.log(age);

// delete menggunakan method splice
const laptop = ["acer", "asus", "lenovo", "HP", "dell"];
laptop.splice(1, 2);

console.log(laptop);

// delete menggunakan metode shift dan pop
const hp = ["oppo", "samsung", "xiaomi"];
hp.shift();
console.log(hp);

const hp2 = ["iphone", "asus", "vivo"];
hp2.pop();
console.log(hp2);

// array destructuring
const introduction = ["hello", "hoer"]; // Array berisi dua elemen: "hello" dan "hoer"
const [greeting, name] = introduction; // Destructuring: 'greeting' mengambil elemen pertama ("hello"), 'name' mengambil elemen kedua ("hoer")
console.log(greeting); // Menampilkan nilai 'greeting', yaitu "hello"

// array reverse (untuk membalikan nilai array)
const memberJfc = ["hoer", "ino", "hani"];
memberJfc.reverse();
console.log(memberJfc);

// sort
const memberJfc2 = ["fira", "ara", "salsa"];
memberJfc2.sort();
console.log(memberJfc2);
