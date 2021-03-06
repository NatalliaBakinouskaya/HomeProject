// Task

// Mark got a rectangular array matrix for his birthday, and now he's thinking about all the fun things he can do with it. He likes shifting a lot, so he decides to shift all of its i-contours in a clockwise direction if i is even, and counterclockwise if i is odd.

// Here is how Mark defines i-contours:

//  the 0-contour of a rectangular array as the union 
//  of left and right columns as well as top and bottom rows;

//  consider the initial matrix without the 0-contour: 
//  its 0-contour is the 1-contour of the initial matrix;

//  define 2-contour, 3-contour, etc. 
//  in the same manner by removing 0-contours from the obtained arrays.
// Implement a function that does exactly what Mark wants to do to his matrix.

// Example

// For

// matrix = [[ 1,  2,  3,  4],
//             [ 5,  6,  7,  8],
//             [ 9, 10, 11, 12],
//             [13, 14, 15, 16],
//             [17, 18, 19, 20]]```
// the output should be
// contoursShifting(matrix) = [[ 5, 1, 2, 3], [ 9, 7, 11, 4], [13, 6, 15, 8], [17, 10, 14, 12], [18, 19, 20, 16]]```

// For matrix = [[238, 239, 240, 241, 242, 243, 244, 245]],

// the output should be [[245, 238, 239, 240, 241, 242, 243, 244]].

// Note, that if a contour is represented by a 1 × n array, its center is considered to be below it.

// For

// matrix = [[238],
//             [239],
//             [240],
//             [241],
//             [242],
//             [243],
//             [244],
//             [245]]```
// the output should be
// contoursShifting(matrix) = [[245], [238], [239], [240], [241], [242], [243], [244]]``` If a contour is represented by an n × 1 array, its center is considered to be to the left of it.

// Input/Output

// [input] 2D integer array matrix

// Constraints:

// 1 ≤ matrix.length ≤ 100,

// 1 ≤ matrix[i].length ≤ 100,

// 1 ≤ matrix[i][j] ≤ 1000.

// [output] 2D integer array

// The given matrix with its contours shifted.

function contoursShifting(matrix) {
   let tempArray = matrix.map(function(arr) {
      return arr.slice();
  });
   
   let start = 0,
   height = matrix.length,
   width = matrix[0].length,
   midpoint = Math.ceil(Math.min(height, width) / 2);
 
   function RotateClockweise(){
      for(i = width -1; i > start; i--){
         matrix[start][i] = tempArray[start][i - 1];
      }
      for(i = start; i < width -1; i++){
         matrix[height - 1][i] = tempArray[height -1][i + 1];
      }
      for(i = start; i < height -1; i++){
         matrix[i][start] = tempArray[i + 1][start];  
      }
      for(i = height - 1; i > start; i--){
         matrix[i][width -1] = tempArray[i - 1][width -1];  
      }
      stepIn();
      return matrix;
   }

   function RotateCounterClockweise(){
      for(i = start; i < width -1; i++){
         matrix[start][i] = tempArray[start][i + 1];
      }
      for(i = width -1; i > start; i--){
         matrix[height - 1][i] = tempArray[height - 1][i - 1];
      }
      for(i = height - 1; i > start; i--){
         matrix[i][start] = tempArray[i - 1][start];
      }
      for(i = start; i < height -1; i++){
         matrix[i][width -1] = tempArray[i + 1][width -1];
      }
      stepIn();
      return matrix ;  
   }

  function stepIn(){
   start += 1;
   width -= 1;
   height -= 1;
  }

  function FastFinishClockweise(){
   if (height - start == 1){
      for(i = width -1; i > start; i--){
         matrix[start][i] = tempArray[start][i - 1];
      }
      matrix[start][start] = tempArray[start][width - 1];
   }
   if (width - start == 1){
      for(i = height - 1; i > start; i--){
         matrix[i][width -1] = tempArray[i - 1][width -1]; 
      }
      matrix[start][start] = tempArray[height - 1][start];
   }
   stepIn();
   return matrix;
  }

  function FastFinishCounterClockweise(){
   if (height - start == 1){
      for(i = start; i < width -1; i++){
         matrix[start][i] = tempArray[start][i + 1];
      }
      matrix[start][width - 1] = tempArray[start][start];
   }
   if (width - start == 1){
      for(i = start; i < height -1; i++){
         matrix[i][width -1] = tempArray[i + 1][width -1];
      }
      matrix[height - 1][start] = tempArray[start][start];
   }
   stepIn();
   return matrix;
  }
  while(start < midpoint){
      if (start % 2 === 0){
         if(height - start == 1 || width - start == 1){
            FastFinishClockweise();
         } 
         else{
            RotateClockweise();
         }
      }
      else {
         if (start % 2 !== 0){
            if(height - start == 1 || width - start == 1){
               FastFinishCounterClockweise();
            } 
            else{
               RotateCounterClockweise();
            }
         }
      }
   }
   return matrix;
  }
// console.log(contoursShifting([
//             [ 1,  2,  3,  4, ],
//             [ 5,  6,  7,  8],
//             [ 9, 10, 11, 12],
//             [13, 14, 15, 16],
//             [17, 18, 19, 20]

// ]));
// console.log(contoursShifting([
//    [1, 5, 6]
// ]));
// console.log(contoursShifting([
//    [1, 5, 6, 7, 1, 1],
//    [8, 9, 10, 11, 2, 2],
//    [12, 13, 14, 15, 3, 3],
//    [16, 17, 18, 19, 4, 4],
//    [20, 21, 22, 23, 5, 5]
   
  

// ]));
// console.log(contoursShifting([
//    [1, 5, 6, 7, 1],
//    [8, 9, 10, 11, 2],
//    [12, 13, 14, 15, 3],
//    [16, 17, 18, 19, 4],
//    [20, 21, 22, 23, 5],
//    [24, 25, 26, 27, 6]
   
  

// ]));
// console.log(contoursShifting([
//    [1],
//    [8],
//    [12],
//    [164],
//    [20],
//    [24]
   
  

// ]));
console.log(contoursShifting([
   [ 1,  2,  3 ],
   [ 5,  6,  7],
   [ 9, 10, 11],
   [13, 14, 15],
   [17, 18, 190]

]));