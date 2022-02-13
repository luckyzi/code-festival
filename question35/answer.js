정답

function one(n) {
  function two(s) {
    return s ** n
  }
  return two;
}

const a = one(2);
const b = one(3);
const c = one(4);

console.log(a(10));
console.log(b(10));
console.log(c(10));


클로저(Closure)에 대한 테스트.