let num = prompt();

for (let i = 1; i <= num; i++) {
  let result = ""; // 반복될 때마다 초기값이 적용됨.

  for (let j = 1; j <= num - i; j++) {
    result += " "; // i가 값이 늘 때마다 j를 줄여서 빈칸의 수를 줄임.
  }

  for (let k = 1; k <= i * 2 - 1; k++) {
    result += "*"; // 홀수로 반복 해줘야함. 1, 3, 5, 7, 9
  }
  console.log(result); // 결과 출력. 이후 첫번째 for문으로 돌아가면서 result는 초기 값으로 돌아감.
}
