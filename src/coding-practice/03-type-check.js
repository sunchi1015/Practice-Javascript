console.log("Type check");

(function () {
  var a = (b = 3);
})();

document.write("a defined?" + typeof a !== "undefined");
document.write("b defined?" + typeof b !== "undefined");
