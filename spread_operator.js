// spread operator di object
const obj1 = { name: "Hoerudin" };
const obj2 = { lastName: "Permana", address: "Cileungsi, Bogor" };
const newobj = { ...obj1, ...obj2 };

console.log(newobj);

const originalObj = { name: "John", age: "22" };
const newObj2 = { ...originalObj };

console.log(newObj2);

// spread operator di array
const firstName = ["Budi"];
const lastName = ["Santoso", "Ciwidey, Bandung"];
const fullName = [...firstName, ...lastName];

console.log(fullName);
