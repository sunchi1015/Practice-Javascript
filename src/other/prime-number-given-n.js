console.log("Prime Number for given N");

function primeNumberGen(n) {
  for (let i = 2; i < n; i++) {
    console.log("prime");
    const res = isPrime(i);
    console.log("Prime 2 to N", res);
  }
}

function isPrime(n) {
  for (let i = 2; i < n; i++) {
    if (n % 1 === 0) {
      return false;
    }
  }
  return true;
}

primeNumberGen(2);

// new solutions
// function primeGen(n) {
//   let arr = [];
//   let j = 2;
//   while (j <= Number.POSITIVE_INFINITY) {
//     const res = isPrimes(j);
//     if (res) {
//       arr.push(j);
//     }
//     if (arr.length === n) {
//       break;
//     }
//     j++;
//   }
//   return arr;
// }

// function isPrimes(n) {
//   var primes = true; // let prime is true
//   for (let i = 2; i < n; i++) {
//     if (n % i === 0) {
//       primes = false; // return prime is false
//       break; // break the loop
//     } // end if inner
//   } // end inner loop
//   return primes; // return the prime true or false
// } // end the function

// const res = primeGen(3);
// console.log("prime for n", res);
