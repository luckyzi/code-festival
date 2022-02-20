let month = prompt();
let date = prompt();
let day = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

function solution(a, b) {
  let theDay = new Date(`2020-${a}-${b}`);
// new Date 를 통해 날짜 정보를 문자열로 반환하는 객체 생성
// 이때 매개변수로 일자를 지정해주면 해당 일자 기준으로 정보를 반환.Date

  console.log(day[theDay.getDay()]);
// .getday() 메소드는 요일을 일요일부터 0-6의 숫자로 반환

}

solution(month, date);


date 사용법 관련 문제

