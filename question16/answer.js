let str = prompt();
// 입력
let newStr = ''
// 새로운 값을 담아 출력할 변수
for (let i = str.length - 1; i >= 0; i--) {
  newStr += str[i]
  반복될 때마다 인덱스의 역순으로 새로운 변수에 추가
}

console.log(newStr)