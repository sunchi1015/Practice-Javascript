// Cache result and required for same input reuse
// it saves time and memory
// it can be done using
// 1.Closure
// 2.HOC

// 1.Closure

function closure(a) {
  var b = a + 2;
  function bar(c) {
    console.log("c:::", c);
  }

  bar(b * 2);
}

closure(2);

// 2.HOC - Higher Order Functions
function closureNew(a) {
  var b = a + 2;
  function bar(c) {
    console.log("c:::", b);
  }

  return bar;
}

const res = closureNew(10);
res();
