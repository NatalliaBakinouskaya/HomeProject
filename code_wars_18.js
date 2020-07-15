// Call nb_dig (or nbDig or ...) the function taking n and d as parameters and returning this count.

// #Examples:

// n = 10, d = 1, the k*k are 0, 1, 4, 9, 16, 25, 36, 49, 64, 81, 100
// We are using the digit 1 in 1, 16, 81, 100. The total count is then 4.

// nb_dig(25, 1):
// the numbers of interest are
// 1, 4, 9, 10, 11, 12, 13, 14, 19, 21 which squared are 1, 16, 81, 100, 121, 144, 169, 196, 361, 441
// so there are 11 digits `1` for the squares of numbers between 0 and 25.
function nbDig(n, d) {
    let result = 0;
   for(i = 0; i<= n; i++){
        for(char of (i * i).toString()){
           if(+char === d){
               result++;
           }
       }
   }
return result;
}
console.log(nbDig(5750, 0))