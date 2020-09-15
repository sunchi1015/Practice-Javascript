function message(data) {
  try {
    var result = data.split(".");
    return result;
  } catch (error) {
    return error;
  }
}

// const res = message("H.E.L.L.O.W");
const res = message(123);
console.log("RESULT :::::", res);
