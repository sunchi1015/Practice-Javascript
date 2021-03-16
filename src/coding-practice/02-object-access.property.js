const obj = {
  name: "Abc",
  setName: (newName) => {
    // with obj name can access property
    // obj.setNewName(newName);
    // not with the this keyword
    this.setNewName(newName);
  },
  setNewName: (newName) => {
    obj.name = newName;
  }
};

obj.setName("Sunil");
console.log("New Name --->", obj.name);
