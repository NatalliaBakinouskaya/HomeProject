



function sortFilledTable(table){

let kontrol;

    return table
    // .sort(function(a, b) {
    //     return b[1] - a[1];
    // })

    // .sort(function(a, b) {
    //     if (a[1] == b[1]){
    //         return b[2] - a[2];        
    //     }
    //     else 
    //     return b[1] - a[1];
    // })
    .sort(function(a, b) {
        if (a[1] == b[1] && a[2] == b[2] && a[3] == b[3]){
            kontrol = 100;
            console.log(a,b);
        }
        else{
            kontrol = 0;
            console.log(kontrol);
        }
            
       
        if (a[1] == b[1] && a[2] == b[2]){
            return b[3] - a[3];        
        }
       
        else 
        if (a[1] == b[1]){
            return b[2] - a[2];        
        }
        else 
        return b[1] - a[1];

    })
    return table;
    // .sort(function(a, b) {
    //   if (b[1] === a[1]) {
    //     return b[2] - a[2];
    //   }
      
    // })
    // .sort(function(a, b) {
    //   if (b[1] === a[1] && b[2] === a[2]) {
    //     return b[3] - a[3];
    //   }
    // });
     

  }
  console.log(sortFilledTable([ [ 0, 4, 0, 2 ],
    [ 1, 6, 2, 2 ],
    [ 2, 5, 1, 3 ],
    [ 3, 4, 0, 2 ],
    [ 4, 5, 1, 3 ],
    [ 5, 4, 0, 1 ],
    [ 6, 4, 0, 2 ],
    [ 7, 3, -1, 1 ],
    [ 8, 2, -1, 1 ],
    [ 9, 3, 0, 2 ],
    [ 10, 1, -2, 1 ],
    [ 11, 4, 1, 2 ],
    [ 12, 0, -3, 0 ],
    [ 13, 3, 0, 1 ],
    [ 14, 1, -2, 0 ],
    [ 15, 2, -1, 1 ],
    [ 16, 1, -2, 0 ],
    [ 17, 2, -1, 1 ],
    [ 18, 3, 0, 2 ],
    [ 19, 3, 0, 1 ],
    [ 20, 3, 0, 1 ],
    [ 21, 2, -1, 1 ],
    [ 22, 6, 3, 3 ],
    [ 23, 5, 2, 3 ],
    [ 24, 2, -1, 1 ],
    [ 25, 5, 2, 2 ],
    [ 26, 4, 1, 2 ],
    [ 27, 5, 2, 3 ],
    [ 28, 1, -2, 1 ],
    [ 29, 4, 1, 2 ],
    [ 30, 5, 2, 2 ],
    [ 31, 4, 1, 2 ],
    [ 32, 4, 1, 2 ],
    [ 33, 5, 2, 2 ],
    [ 34, 3, 0, 0 ],
    [ 35, 2, -1, 2 ],
    [ 36, 1, -3, 1 ],
    [ 37, 3, -1, 1 ] ]));