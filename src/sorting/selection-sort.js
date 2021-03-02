console.log("SELECTION SORT");

function selectionSort(list) {
  const length = list.length;
  var min;
  for (var i = 0; i < length; i++) {
    min = i;

    for (var j = i + 1; j < length; j++) {
      if (list[min] > list[j]) {
        min = j;
        console.log("MIN ", min);
      }
    } //inner loop close
    if (min !== i) {
      let temp = list[i];
      list[i] = list[min];
      list[min] = temp;
    }
  } // outer loop close
  return list;
}

const res = selectionSort([5, 2, 6, 1, 4, 6, 2, 3]);
console.log("Result --> ", res);
