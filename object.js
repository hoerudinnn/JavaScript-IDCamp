const product = {
  name: "panci",
  price: 50000,
};

console.log(product.name);
console.log(product["price"]);

// Mengakses menggunakan object destructuring
const { name, price } = product;
console.log(name, price);

const user = {
  name: "Hoerudin",
  age: 22,
  alamat: "Bogor",
  agama: "Islam",
  negara: "Indonesia",
};

user.alamat = "Bandung";
console.log(user.alamat);

delete user.agama;
// delete user['agama']; cara lainnya
console.log(user);
