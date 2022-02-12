let key = prompt().split(" ");
let value = prompt().split(" ");
let result = {};

for (let i = 0; i < key.length; i++) {
  result[key[i]] = value[i];
}

console.log(result);
