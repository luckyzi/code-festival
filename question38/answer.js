let num = prompt().split(" ");
let obj = {};
let result;

for (let i = 0; i < num.length; i++) {
  if (obj[num[i]] === undefined) {
    obj[num[i]] = 1;
  } else {
    obj[num[i]]++;
  }
}
//  반복하면서 키 : 밸류로 담고 점수에 따른 학생 카운트

result = Object.entries(obj).sort((a, b) => b[0] - a[0]);
// entries를 사용시 [[키, 밸류], [키, 밸류]] 형태로 배열로 반환.
// sort를 통해 밸류 기준으로 정렬
result = result[0][1] + result[1][1] + result[2][1];
// 1, 2, 3 등 점수의 학생수를 각 1번 인덱스 값을 합해서 구함.

console.log(result);

풀이2;

let num = prompt().split(" ").sort();

let top3 = [];
let count = 0;

while (top3.length <= 3) {
  let n = num.pop();

  if (!top3.includes(n)) {
    top3.push(n);
  }
  count++;
  // top3에 동일한 숫자가 있을 때 카운트는 하지만 배열 자체에 추가로 push 하지는 않음.
}

console.log(count - 1);
