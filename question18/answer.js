let str = prompt().split(" ");
// 입력 받을 때 공백에 따라 배열로 나눠서 받기

let result = 0;
// 결과를 담을 변수

for (let i = 0; i < str.length; i++) {
  result += Number(str[i]);
  // 반복할 때마다 배열 내의 원소들을 합함
}

console.log(Math.floor(result / str.length));
// 평균값 출력
// 소수점 자리는 버리는 메소드 추가
