console.log("Bubble Sort");
const arr = [2, 4, 1, 9, 8, 3];

function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      console.log("Iteration -->", j);
      if (arr[j] > arr[j + 1]) {
        const rep = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = rep;
      }
    }
  }
  return arr;
}

const res = bubbleSort(arr);

console.log("Bubble Sort Result ===> ", res);
