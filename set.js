const mySet = new Set([1, 2, 3, 4, 5]);
console.log(mySet);

const set = new Set();
set.add(1);
set.add("apple");
set.add(2);
set.add("grape");
console.log(set);

// mengakses nilai set dengan for
for (const number of set) {
  console.log(number);
}

// dengan foreach
set.forEach((value) => console.log(value));

// menghapus nilai set
set.delete(2);
set.delete("grape");
console.log(set);
