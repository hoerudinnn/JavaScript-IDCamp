const productMap = new Map([
  ["shoes", 500],
  ["cap", 350],
  ["jeans", 200],
]);

console.log(productMap);

// menyimpan nilai di map menggunakan method set
const map = new Map();
map.set("name", "hoer");
console.log(map);

const map2 = new Map();
map2.set(1, "number one");
console.log(map2);

// mengakses nilai di map
const map3 = new Map();
map3.set("name", "hoer");
console.log(map3.get("name"));

const biodata = new Map();
biodata.set("first name", "Hoerudin");
biodata.set("last name", "Permana");
biodata.delete("last name");
console.log(biodata);
