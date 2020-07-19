// 
// function findEvenIndex(arr){
  
//   let RL = [arr[arr.length - 1]];
  
//   arr.reduceRight(function(sum, elem){
//     RL.push(sum + elem);
//     return sum += elem;
//   },)

//   if(RL[RL.length-2]  == 0){
//       return 0;
//   }
//   if(RL[RL.length-1] - arr[arr.length - 1] == 0){
//     return arr.length - 1;
// }
//   for(let i = 0, j = RL.length - 3, sum = 0;j >= 0; i++,j--){
      
//       sum = sum + arr[i];
//       if(sum == RL[j]){
//           return i + 1;
//       }   
//   }
//   return -1;
// }
// console.log(findEvenIndex([10,-80,10,10,15,35,20]))

function findEvenIndex(arr)
{
  for(var i=1; i<arr.length-1; i++) {
      console.log(arr.slice(0, i), arr.slice(i+1));
    // if(arr.slice(0, i).reduce((a, b) =>  a+b) === arr.slice(i+1).reduce((a, b) =>  a+b)) {
    //   return i;
    // }
  }
  return -1;
}
console.log(findEvenIndex([10,-80,10,10,15,35,20]))