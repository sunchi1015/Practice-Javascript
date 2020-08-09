const str = "Checkout ( 8 )";

const res = str.split("(");

const trm = res[1].trim().charAt(0);

console.log(trm);

const row = "₹. 100000";
const ex = row.split(".")[1].trim();
console.log("EX:--->", Number(ex));
