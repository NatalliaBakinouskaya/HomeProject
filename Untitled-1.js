function computeRanks(number, games) {
    
    let teams = [];
    let table;
    let check = 0;
    let check2 = 0;
    let k = 0.01;
    
    function findTeams(){
      
         for(let i = 0; i < number; i++){
          teams[i] = i;
         }
      return teams;
    }
    function listTeams(){
      
      for(let i = 0; i < number; i++){
      teams[i] = -1;
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
                  
                  table[elem[i]][1] += ((elem[2] - elem[3]) * sign  > 0 ? 2: (elem[2] - elem[3]) * sign < 0 ? 0: 1) * 1000 + ((elem[2] - elem[3]) * sign) * 10 + (i < 1? elem[2]: elem[3]);
                }
                else {
                  break;
                 }
            }
        });    
        table.sort((a, b) => b[0] - a[0]);
        for(let i = 0; i < table.length; i++){
          if (table[i][0] == -1){
            table = table.slice(0, i)
            
          }
        }
        table.sort((a, b) => b[1] - a[1]);
        // console.log("calculated", table);
        table.map(function(elem, index, arr){
        
          if (index != 0 && elem[1] == arr[index - 1][1]){
            elem[2] = arr[index - 1][2];
          }
          else elem[2] = arr.length - index;
           
        });
        table.sort((a, b) => b[1] - a[1]);
        
        table = table.map((elem) => [elem[0], elem[2]]);
        // console.log(table);
        return table; 
      
    }
    function findSame(tab){
      check2 = 1;
      
      listTeams();
      tab.map(function(elem, index, arr){
        
        
        if(elem[1] != 0 && index != arr.length - 1 && elem[1] == arr[index+1][1]){
            teams[elem[0]] = elem[0];
            check2 = 0;
            // console.log(teams);
            
           
        }
        else if (elem[1] != 0 && (index == arr.length - 1 || index != 0 && elem[1] != arr[index+1][1]) && elem[1] == arr[index-1][1] ){
          
            teams[elem[0]] = elem[0];
            // console.log("close", elem);
            // console.log(teams);
            makeBlankTable();
            // console.log("blank", table);
            makeFilledTable();
            // console.log("filled", table);
            listTeams();

            if (table.length < 1 || table[0][1] == table[table.length - 1][1]){
                
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
            tab = tab.sort((a, b) => b[1] - a[1]);
 
        }
        
      });
      
      k *= 0.01;
      
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
    
    findTeams();
    
    makeBlankTable();
    
    makeFilledTable();
    // console.log(table);
   
    let tableFull = table.slice();
    
    while (check < 1 && check2 <1){
      findSame(tableFull);
    }
    // findSame(tableFull);
    return makeOrder(tableFull);
}
console.log(computeRanks(8, [ [ 0, 7, 0, 0 ],
    [ 1, 6, 2, 2 ],
    [ 2, 5, 0, 0 ],
    [ 3, 4, 0, 0 ],
    [ 1, 7, 0, 0 ],
    [ 2, 0, 0, 0 ],
    [ 3, 6, 0, 0 ],
    [ 4, 5, 0, 0 ],
    [ 2, 7, 2, 2 ],
    [ 3, 1, 0, 0 ],
    [ 4, 0, 0, 0 ],
    [ 5, 6, 0, 0 ],
    [ 3, 7, 0, 0 ],
    [ 4, 2, 0, 0 ],
    [ 5, 1, 1, 1 ],
    [ 6, 0, 0, 0 ],
    [ 4, 7, 2, 2 ],
    [ 5, 3, 1, 3 ],
    [ 6, 2, 0, 0 ],
    [ 0, 1, 1, 1 ],
    [ 5, 7, 0, 0 ],
    [ 6, 4, 2, 2 ],
    [ 0, 3, 3, 1 ],
    [ 1, 2, 0, 0 ],
    [ 6, 7, 0, 0 ],
    [ 0, 5, 0, 2 ],
    [ 1, 4, 0, 0 ],
    [ 2, 3, 0, 0 ] ] ));