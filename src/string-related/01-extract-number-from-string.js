const str = "Checkout ( 8 )";

const res = str.split("(");

const trm = res[1].trim().charAt(0);

console.log(trm);
