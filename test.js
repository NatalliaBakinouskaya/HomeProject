const isPrime = (num) => {
    let i = 1
  
    while (i++ < num - 1) {
        console.log(i);
      if (num % i === 0) {
        return false
      }
    }
  
    return num > 1
  }
  console.log(isPrime(14067071));