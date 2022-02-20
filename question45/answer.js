let num = prompt().split("");
let result = 0;
for (let i = 0; i < num.length; i++) {
  result += Number(num[i]);
}
console.log(result);

풀이2;

let num = prompt();
let result = 0;

while (num) {
  num += num % 10;
  num = Math.floor(num / 10);
}
