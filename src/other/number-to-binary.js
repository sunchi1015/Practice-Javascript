// n to biunary
function ntobinary(n) {
  let binaryNum = [];
  while (n >= 1) {
    // Storing remainder in binary array
    binaryNum.unshift(Math.floor(n % 2));
    n = n / 2;
  }
  return binaryNum.join("");
  // return binaryNum;
}

const res1 = ntobinary(8);
console.log("binary number --->", res1);
