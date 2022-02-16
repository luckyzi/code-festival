let weight = prompt();
let friend = prompt();
let count = 0;
while (weight > 0) {
  let num = prompt();
  if (weight < num) {
    break;
  } else {
    weight = weight - num;
    count++;
    friend--;
  }
}

console.log(count);
