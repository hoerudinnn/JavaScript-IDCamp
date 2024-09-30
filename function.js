const temperaturInCelcius = 90;
const temperaturInFahrenheit = (9 / 5) * temperaturInCelcius + 32;

console.log(`Nilai Konversi: ${temperaturInFahrenheit}`);

function greetWorld() {
  console.log("Hello World");
}
greetWorld();

function temperaturCelciusToFahrenheit(temperaturCelcius) {
  // Fungsi ini menerima satu parameter yaitu temperatur dalam Celcius
  const temperaturFahrenheit = (9 / 5) * temperaturCelcius + 32; // Mengonversi nilai Celcius ke Fahrenheit menggunakan rumus: (9/5) * Celcius + 32
  console.log(`Nilai Konversi: ${temperaturFahrenheit}`); // Menampilkan hasil konversi dalam Fahrenheit ke konsol
}

const temperaturCelcius = 90; // Mendefinisikan nilai temperatur dalam Celcius yang akan dikonversi
temperaturCelciusToFahrenheit(temperaturCelcius); // Memanggil fungsi dengan nilai Celcius 90 dan menampilkan hasil konversi

function message(name) {
  const sayHi = "My Name is Hoerudin";
  console.log(`Message: Hello ${name}, ${sayHi}`);
}

// message ("Budi");
name = "Putra";
message(name);

function sumNumber(a, b) {
  const result = a + b;
  return result;
}

const result = sumNumber(20, 10);
console.log(`Hasil 20 + 10 = ${result}`);

// function expression
const memberOfJfc = function () {
  const totalMember = 20;
  return totalMember;
};

const totalMember = memberOfJfc();
console.log(`Total member: ${totalMember}`);

// arrow function
const pertambahan = (tambah) => {
  const tambahan = 15 + 45 + tambah;
  return tambahan;
};

const tambahan = pertambahan(20);
console.log(`hasil: ${tambahan}`);

// arrow function menggunakan refactor
const perkalian = (numbers) => 20 * 10;

const hasil = perkalian(30);
console.log(`Hasil: ${hasil}`);
