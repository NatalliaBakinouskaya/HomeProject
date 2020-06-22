// function FindBiggerSum(arr){
//     let sum = 0, temp1 = 0, temp2 = 0;
//     for(let i = 0; i < arr.length; i++){
//         elem = arr[i];
//         if(elem > 0 && temp1 == 0){
//             sum += elem;
//             console.log(sum);
//         }
//         else if(elem < 0 && sum > 0){
//             temp1 += elem;
//             console.log(sum, elem, temp1);
//         }
//         else if(elem > 0 && temp1 < 0){
    
//             temp2 += elem;
//             console.log(sum, elem, temp1, temp2);

//         }
      
//         if(elem < 0 && temp2 > 0 || i == arr.length - 1){
//             if(sum < sum + temp1 + temp2 ){
//                 sum += temp1 + temp2;
            
                
//             }
//             if(i != arr.length - 1){
//                 sum += elem;
//             }
//             temp1 = temp2 = 0;
//         }
//     }
//     return sum;
// }
// console.log(FindBiggerSum([-1, -1, -3, -1, -1]))
function getMaxSubSum(arr) {
    let maxSum = 0;
    let partialSum = 0;
  
    for (let item of arr) { // для каждого элемента массива
      partialSum += item; // добавляем значение элемента к partialSum
      maxSum = Math.max(maxSum, partialSum); // запоминаем максимум на данный момент
      if (partialSum < 0) partialSum = 0; // ноль если отрицательное
    }
  
    return maxSum;
  }
console.log(getMaxSubSum([1, 2, 3, -7, 2]));