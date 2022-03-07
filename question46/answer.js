for (let i = 0; i < 20; i++) {
  let stringValue = (i + 1).toString();
  let result = 0;
  for (let j = 0; j < stringValue.length; j++) {
    if (stringValue[j] === "1") {
      result += 1;
    } else if (stringValue[j] === "2") {
      result += 2;
    } else {
      result += i;
    }
  }
  console.log(result);
}
