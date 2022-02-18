let num = prompt();
let count = 1;

for (let i = 2; i <= num; i++) {
  if (num % i === 0) {
    count++;
  }
}

if (count > 2) {
  console.log("NO");
} else {
  console.log("YES");
}
