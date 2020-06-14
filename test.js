function computeRanks(number, games) {
  let start = Date.now();

  let teams;
  let table;
  let check = 0;
  let k = 0.0000001;
  
  function findTeams(fil){
    teams = [];
    switch(fil){
     case 1: 
       for(let i = 0; i < number; i++){
       teams.push(i);
       }
       break;
     case -1: 
       for(let i = 0; i < number; i++){
       teams.push(fil);
       }
       break;
    }
    return teams;
  }
  
  function makeBlankTable(){
    table = [];
    table = teams.map(function(elem, index ){
    return table[index] = [elem, 0];
    })
  }
  function makeFilledTable (){
      
      games.map(function(elem, index, arr){
         
          for (let i = 0; i <= 1; i++){
              
              if (teams[elem[0]] > -1 && teams[elem[1]] > -1 ){
                let sign = i > 0 ? -1: 1;
                
                table[elem[i]][1] += ((elem[2] - elem[3]) * sign  > 0 ? 2: (elem[2] - elem[3]) * sign < 0 ? 0: 1) * 1000000 + ((elem[2] - elem[3]) * sign) * 1000 + (i < 1? elem[2]: elem[3]);
              }
              else {
                break;
               }
          }
      })    
      return table.sort((a, b) => b[1] - a[1]);
    
  }
  function findSame(tab){
    
    findTeams(-1);
    
    
    tab.map(function(elem, index, arr){
      
      
      if(index != arr.length - 1 && elem[1] == arr[index+1][1]){
          teams[elem[0]] = elem[0];
          
         
      }
      else if ((index == arr.length - 1 || index != 0 && elem[1] != arr[index+1][1]) && elem[1] == arr[index-1][1] ){
       
          teams[elem[0]] = elem[0];
          
          makeBlankTable();
          makeFilledTable();
         

          table = table.filter(function(elem){
           if(elem[0] > -1){
             return elem;
           }
          });
        
          findTeams(-1);
        
          if (table[0][1] == table[table.length - 1][1]){
              
              check = 1;
             
          }
          else {
           
            table.map(function(elem,index,array){
              if(index != 0 && elem[1] == array[index - 1][1]){
                
                check = 0;
                
              }
               
            })
          }
         
          tab.map(function(elem, index){
            for(let i = 0; i < table.length; i++){
                if(elem[0] == table[i][0]){
                    elem[1] = elem[1] + table[i][1] * k;
                }
            }
          
          });
         
          table = [];
          
      }
   
    });
    tab = tab.sort((a, b) => b[1] - a[1]);
    k *= 0.0000001;
    
}
  function makeOrder(tab){
    
    tab.map(function(elem, index, arr){
      if (index != 0 && elem[1] == arr[index - 1][1]){
        elem[2] = arr[index - 1][2];
      }
      else elem[2] = index + 1;
       
    });
    tab.sort((a, b) => a[0] - b[0]);
    
    tab = tab.map((elem) => elem[2]);
    
    return tab; 
  }
  
  findTeams(1);
  makeBlankTable();
 
  makeFilledTable();
  
  let tableFull = table.slice();
  // console.log(tableFull);
  // console.log(check);
  // if (check < 1){
  //   check += 1;
  //   findSame(tableFull);
  // }
  // console.log("ddd");
  let end = Date.now();
  console.log(end - start);
  findSame(tableFull);
  findSame(tableFull);
  findSame(tableFull);
  findSame(tableFull);
  findSame(tableFull);
  findSame(tableFull);
  findSame(tableFull);
  return makeOrder(tableFull);
 
  
}
// console.log(computeRanks(8, [ [ 0, 7, 0, 0 ],
//   [ 1, 6, 2, 2 ],
//   [ 2, 5, 0, 0 ],
//   [ 3, 4, 0, 0 ],
//   [ 1, 7, 0, 0 ],
//   [ 2, 0, 0, 0 ],
//   [ 3, 6, 0, 0 ],
//   [ 4, 5, 0, 0 ],
//   [ 2, 7, 2, 2 ],
//   [ 3, 1, 0, 0 ],
//   [ 4, 0, 0, 0 ],
//   [ 5, 6, 0, 0 ],
//   [ 3, 7, 0, 0 ],
//   [ 4, 2, 0, 0 ],
//   [ 5, 1, 1, 1 ],
//   [ 6, 0, 0, 0 ],
//   [ 4, 7, 2, 2 ],
//   [ 5, 3, 1, 3 ],
//   [ 6, 2, 0, 0 ],
//   [ 0, 1, 1, 1 ],
//   [ 5, 7, 0, 0 ],
//   [ 6, 4, 2, 2 ],
//   [ 0, 3, 3, 1 ],
//   [ 1, 2, 0, 0 ],
//   [ 6, 7, 0, 0 ],
//   [ 0, 5, 0, 2 ],
//   [ 1, 4, 0, 0 ],
//   [ 2, 3, 0, 0 ] ] ));
  console.log(computeRanks(18, [ [ 0, 17, 0, 0 ],
    [ 1, 16, 0, 1 ],
    [ 2, 15, 0, 1 ],
    [ 3, 14, 1, 1 ],
    [ 4, 13, 1, 1 ],
    [ 5, 12, 0, 1 ],
    [ 6, 11, 1, 1 ],
    [ 7, 10, 0, 1 ],
    [ 8, 9, 1, 0 ],
    [ 1, 17, 0, 0 ],
    [ 2, 0, 0, 0 ],
    [ 3, 16, 1, 1 ],
    [ 4, 15, 0, 1 ],
    [ 5, 14, 0, 1 ],
    [ 6, 13, 0, 0 ],
    [ 7, 12, 0, 0 ],
    [ 8, 11, 0, 0 ] ]))