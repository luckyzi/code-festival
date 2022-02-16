let num = prompt().split(" ");

let obj = {};
let result;

for (let i = 0; i < num.length; i++) {
  //  반복하면서 키 : 밸류로 담기.
  if (obj[num[i]] === undefined) {
    obj[num[i]] = 1;
  } else {
    obj[num[i]]++;
  }
}

result = Object.entries(obj).sort((a, b) => b[1] - a[1]);
// entries를 사용시 [[키, 밸류], [키, 밸류]] 형태로 배열로 반환.
// sort를 통해 밸류에 따라 정렬

console.log(`${result[0][0]}(이)가 총 ${result[0][1]}표로 반장이 되었습니다.`);
// 가장 큰 값이 앞으로 와 있으니 각 키 와 밸류를 출력

풀이2;

let num = prompt().split(" ");

let obj = {};
let result;

for (let i = 0; i < num.length; i++) {
  //  반복하면서 키 : 밸류로 담기.
  if (obj[num[i]] === undefined) {
    obj[num[i]] = 1;
  } else {
    obj[num[i]]++;
  }
}

result = Object.keys(obj).reduce((a, b) => {
  console.log(a, b);
  return obj[a] > obj[b] ? a : b;
  // obj[a] 즉 원범의 값과 obj[b] 혜원의 값 을 비교해서 원범의 값이 크면? 원범을 남기고 : 아니면 혜원을 남긴다.
  // reduce의 결과로 '혜원'이 result에 할당됨
});

console.log(`${result}(이)가 총 ${obj[result]}표로 반장이 되었습니다.`);
