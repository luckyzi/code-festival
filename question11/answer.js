첫 번째 풀이

let s = 0;

for(let i = 1; i <= 100; i++){
  s += i
}

console.log(s);


두 번째 풀이
let s = 0;
s = 101;
// 첫 번째 숫자 1과 끝 숫자 100을 더하면 101
// 그 다음 2와 99를 더하면 101. 
// 이렇게 해서 100 / 2 - 1의 횟수만큼 계산하면 동일한 결과가 나옴.
for(let i = 1; i <= 49; i++){
  s+= 101
}
console.log(s);