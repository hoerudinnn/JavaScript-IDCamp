const age = 22;
const name = "Hoerudin";

console.log(`Hello, My Name is ${name} My Age is ${age}`);

// Error
// name = "Budi";
// console.log(`Hello, My Name is ${name}`);

const currentYear = new Date().getFullYear();
console.log(`Sekarang adalah tahun ${currentYear}`);

// mengubah tipe data
// to string
const number = 12345;
const bool = true;

const numbToStr = String(number);
const boolToStr = bool.toString();

console.log(numbToStr);
console.log(boolToStr);

// string ke number
const strNumber = "123";
const strFloat = "3.14";
const strBool = false;

const strToNumber = Number(strNumber);
const strToFloat = Number(strFloat);
const boolToNumber = Number(strBool);

console.log(strToNumber, strToFloat, boolToNumber);

// fungsi parseint
const cm = "20cm";
const pxl = "64pxl";

const cmToInt = parseInt(cm);
const pxlToInt = parseInt(pxl);

console.log(cmToInt, pxlToInt);

// fungsi parseFloat
const cmFloat = "20.45cm";
const pxlFloat = "64.99pxl";

const cmToFloat = parseFloat(cmFloat);
const pxlToFloat = parseFloat(pxlFloat);

console.log(cmToFloat, pxlToFloat);

// mengubah ke boolean
const angka = 123;
const string = "Hoerudin";
const empty = null;

const angkaToBool = Boolean(angka);
const stringToBool = Boolean(string);
const emptyToBool = Boolean(empty);

console.log(angkaToBool, stringToBool, emptyToBool);

// konversi implisit
const umur = 20;
const message = "Umurku: " + umur;

console.log(message);

/*Konversi implisit terjadi ketika JavaScript secara otomatis mengubah tipe data tanpa instruksi eksplisit dari programmer. 
Ini biasanya terjadi dalam konteks tertentu, seperti operasi aritmetika, perbandingan, dan konteks logika. Meskipun konversi 
implisit bisa sangat berguna dan menghemat penulisan kode, penting untuk memahami alasan hal ini terjadi untuk menghindari bug 
dan perilaku yang tidak terduga dalam kode.*/

const stringNumber = "123";
const result = stringNumber * 2;

console.log(result);

const booleanImplisit = true;
const hasil = 1 + booleanImplisit;

console.log(hasil);

// operator
console.log(10 + 2);
console.log(7 - 5);
console.log(8 * 5);
console.log(20 / 2);
console.log(10 % 2);
