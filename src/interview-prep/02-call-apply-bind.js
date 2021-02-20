console.log("call, apply and bind");

const emp1 = { name: "Abc", age: 28 };

function invite(param1) {
  console.log(`Name:${this.name} age:${this.age} greet:${param1}`);
}

// call
invite.call(emp1, "Hellow EMP1-call");
//apply
invite.apply(emp1, ["Hellow EMP1-apply"]);
//bind
const newfunc = invite.bind(emp1);
newfunc("Hellow EMP1-bind");
