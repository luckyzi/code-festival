let num = prompt();
// 숫자를 입력 받음

if (num === "0") {
  console.log(num);
}
// 분기로 3의 배수라면 짝, 아니면 n을 작성
else if (num % 3 === 0) {
  // 출력
  console.log("짝");
} else {
  console.log(num);
}
