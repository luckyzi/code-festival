let str = prompt().split(" ");

let str2 = str.slice().sort();
// str을 정렬한 배열을 복사.

let result = "YES";
// 기본값은 YES

for (let i = 0; i < str.length - 1; i++) {
  if (str[i] !== str2[i]) {
    result = "NO";
    // 각 인덱스 비교 후 다른 값이 나오면 result를 변경
    // 동일하다면 기존의 YES 유지됨.
  }
}

console.log(result);


다른 풀이

let str = prompt()
let str2 = (str.split(' ').sort((a,b)=>(a-b))).join(' ')
// 원본 str문자열을 ' ' 공백으로 배열로 나누고. sort로 정렬한 후 .join으로 다시 문자열로 돌려서 담음
if(str === str2){
  // 원본 str문자열과 정렬된 str2문자열 비교
  console.log('YES')
}else{
  console.log('NO')
}