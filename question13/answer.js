let num = prompt();
// 원하는 행성의 순서

let solarSystem = [수성, 금성, 지구, 화성, 목성, 토성, 천왕성, 해왕성];
// 행성을 배열로 담아서 활용

console.log(solarSystem[num - 1]);
// 인덱스는 0부터 시작되니 원하는 순서는 -1을 해야 정확히 출력된다.
