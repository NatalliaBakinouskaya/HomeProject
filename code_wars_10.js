// Define a function that takes an integer argument and returns logical value true or false depending on if the integer is a prime.

// Per Wikipedia, a prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.

// Example

// is_prime(1)  /* false */
// is_prime(2)  /* true  */
// is_prime(-1) /* false */
// Assumptions

// You can assume you will be given an integer input.
// You can not assume that the integer will be only positive. You may be given negative numbers as well (or 0).
// There are no fancy optimizations required, but still the most trivial solutions might time out. Try to find a solution which does not loop all the way up to n.
function isPrime(num) {
   
        if (num < 2) {
            return false;
        }
    
        let arr = [];

        for(let i = 2; i * i <= num; i++){
            arr[i] = i;
        }
        
        for(let i = 2;  i * i <= num; i++){

            if(arr[i] == 1){
                continue
            }
            
           else if(num % arr[i] > 0){
                for(let j = i;  j * j <= num; j = j + i){
                   arr[j] = 1;
                };
            }
            else {
                return false;
            }
        }

        arr = arr.filter(function(elem){
            return elem > 1;
          
        });   
        return arr.length == 0;
      }
     
  console.log(isPrime(14067071)); 
//   console.log(isPrime(41)); 