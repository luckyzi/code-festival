let str = prompt().split("");
let newStr = [];
for (let i = 0; i < str.length; i++) {
  if (str[i] === "q") {
    newStr.push("e");
  } else {
    newStr.push(str[i]);
  }
}
console.log(newStr.join(""));

풀이2;

let str = prompt().split("q").join("e");
// q를 기준으로 split 한 후 그걸 e로 join하면 변경됨.
// split - join 연계
console.log(str);
