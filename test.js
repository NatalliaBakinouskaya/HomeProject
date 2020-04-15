function computeRanks(number, games) {
  let start = Date.now();
  let teams = [];
  let table = [];
  let check = 0;
  let k = 0.0000001;

  function findTeams (num){
    for(let i = 0; i < num; i++){
     teams.push(i);
    }
    return teams;
}

  function makeTable (list, games){
      table = list.map(function(elem, index ){
          return table[index] = [elem, 0];
         
          
      })
      games.map(function(elem, index, arr){
         
          for (let i = 0; i <= 1; i++){
                      
          let sign = i > 0 ? -1: 1;
          let points = (elem[2] - elem[3]) * sign  > 0 ? 2: (elem[2] - elem[3]) * sign < 0 ? 0: 1;
          let scoringD = (elem[2] - elem[3]) * sign;
          let goals = i < 1? elem[2]: elem[3];
          
          if (list.indexOf(elem[0]) > -1 && list.indexOf(elem[1]) > -1){

                  
              table[list.indexOf(elem[i])][1] += points * 1000000 + scoringD * 1000 + goals;
              }
          }
          
      })
         
     table = table.sort((a, b) => b[1] - a[1]);
     return table;
  }
  function findSame(tab){
      let teams = [];
      
      
      tab.map(function(elem, index, arr){
        
        
        if(index != arr.length - 1 && elem[1] == arr[index+1][1]){
            
            teams.push(elem[0]);
        }
        else if ((index == arr.length - 1 || index != 0 && elem[1] != arr[index+1][1]) && elem[1] == arr[index-1][1] ){
         
            
            teams.push(elem[0]);
            
            makeTable(teams,games);
            
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
            teams = [];
           
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
  
  findTeams(number);
  makeTable(teams,games);
  let tableFull = table.slice();
  // console.log(tableFull);

  while (check < 1){
    findSame(tableFull);
  }
  let end = Date.now();
    console.log(end - start);
  return makeOrder(tableFull);
  
}
console.log(computeRanks(6, 
       [[0, 5, 1, 1],  
       [1, 4, 3, 1],  
       [2, 3, 2, 2],  
       [1, 5, 1, 2],   
       [2, 0, 1, 1],   
       [3, 4, 3, 2],   
       [2, 5, 3, 1],   
       [3, 1, 0, 1],   
       [4, 0, 2, 1],   
       [3, 5, 0, 0],   
       [4, 2, 0, 1],  
       [0, 1, 1, 2],   
       [4, 5, 2, 0],   
       [0, 3, 3, 2],   
       [1, 2, 0, 0]]  ));