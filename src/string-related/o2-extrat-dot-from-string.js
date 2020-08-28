console.log("+++++ Extract DOT from string ++++++");

const str = "PO: PO10322...";

const first = str.split(" ")[1].split(".")[0];
console.log("first", first);
// console.log("first ----> ", typeof +first[0]);
