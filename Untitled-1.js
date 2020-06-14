function computeRanks(number, games) {
    
  let teams = [];
  let table;
  let filteredGames = [];
  let check = 1;
  
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
    return table[index] = [elem, 0, 0, 0];
    });
  }

  function makeFilledTable (gametable){
    return  gametable.map(function (elem, index, arr){
     if(elem[2] > elem[3]){
      
       table[elem[0]][1] += 2;
      
     }
     else if(elem[2] < elem[3]){
      
      table[elem[1]][1] += 2;
     }
     else{
      table[elem[0]][1] += 1;
      table[elem[1]][1] += 1;
    }
    table[elem[0]][2] += elem[2] - elem[3];
    table[elem[0]][3] += elem[2];
    table[elem[1]][2] += elem[3] - elem[2];
    table[elem[1]][3] += elem[3];
   

    });
  }

  function sortFilledTable(){
    table.sort(function(a, b) {
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
    // return table.sort(function(a, b) {
    //   return b[1] - a[1];
    // })
    //   .sort(function(a, b) {
    //     if (a[1] == b[1]){
    //       return b[2] - a[2];        
    //   }
    //    else 
    //    return b[1] - a[1];
    // })
      // .sort(function(a, b) {
      //   if (a[1] == b[1] && a[2] == b[2]){
      //     return b[3] - a[3]        
      // }
      //  else 
      //  return b[2] - a[2];
    // });
     

  }
  function makeOrder(){
    table.map(function(elem, index, arr){
      
      if (index != 0 && elem[1] == arr[index - 1][1] && elem[2] == arr[index - 1][2] && elem[3] == arr[index - 1][3] ){
        elem[4] = arr[index - 1][4];
        check = 100;
      }
      else elem[4] = index + 1;
       
    });
    table = table.map((elem) => [elem[0], elem[4]]);
    return table; 
  }


  function searchSame(tab){
    listTeams();
    let k;
    
    tab.map(function(elem, index, arr){
      if (index != tab.length -1 && elem[1] == arr[index + 1][1]){
        teams[elem[0]] = elem[0];
      }
      else if ((index == tab.length -1  || elem[1] != arr[index + 1][1]) && index != 0   && elem[1] == arr[index - 1][1]){
        teams[elem[0]] = elem[0];
        k = index + 1;
          
        filterGames(games);
        makeBlankTable();
        makeFilledTable(filteredGames);
        trancateTable();
        sortFilledTable(table);
        makeOrder();
           
        if (table.length > 2 && table[0][1] != table[table.length - 1][1] && check > 1){
            // console.log("recursion", table, tab)
            check = 0;
            table = searchSame(table);
        }
     
        pastTable(tab, k);

      }
       
    });
    
    return tab;
  }
  function filterGames(){
    let ts = [];
    console.log("teams", teams)
    teams.map(function(elem){
      if(elem >= 0){
        ts.push(elem);
      }
    
    });
    console.log("teams + ts", teams, ts);
    filteredGames = games.filter(function(elem){
      if (ts.indexOf(elem[0]) >= 0 && ts.indexOf(elem[1]) >= 0){
      return elem;
      }
    });
  }
  function trancateTable(){
    table = table.filter(function(elem){
      if(elem[0] > -1){
        return elem;
      }
    });
  }
  function pastTable(t, kk){
    // console.log("past table", table, t)
    listTeams();
    let startpoint = kk - table.length;
    for (let i = startpoint; i < table.length + startpoint; i++){
      table[i - startpoint][1] += startpoint;
      t[i] = table[i-startpoint];
    }
    return t;
  }
// -----------------------
  
  findTeams();
  makeBlankTable();
  makeFilledTable(games);
  // console.log("origin u÷nfiltered table", table);
  sortFilledTable(table);
  // console.log("origin filtered ÷table", table);
  makeOrder(table);
  let filledTable = table.slice();
  searchSame(filledTable);
  return filledTable.sort((a, b) => a[0] - b[0])
  .map((elem) => elem[1]);    
}
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
  [ 8, 11, 0, 0 ], 
  [ 0, 17, 0, 0 ],
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
  [ 8, 11, 0, 0 ],
  [ 0, 17, 0, 0 ],
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
  [ 8, 11, 0, 0 ], 
  [ 0, 17, 0, 0 ],
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
  // Expected: [11, 14, 14, 7, 13, 18, 8, 14, 4, 17, 6, 9, 4, 10, 2, 1, 2, 11], instead got: [10, 14, 14, 7, 13, 18, 8, 14, 4, 17, 6, 9, 4, 10, 2, 1, 2, 10]