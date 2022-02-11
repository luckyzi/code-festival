let str = prompt().split(" ");
// 입력 받을 때 공백에 따라 배열로 나눠서 받기
let share = str[0] / str[1];
// 몫 계산

let remainder = str[0] % str[1];
// 나머지 계산

console.log(share, remainder);
// , 기호로 공백 넣어 출력
