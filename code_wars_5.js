// Note: There is a simpler version (Sports League Table Ranking) of this.

// Description

// You organize a sports league in a round-robin-system. Each team meets all other teams. In your league a win gives a team 2 points, a draw gives both teams 1 point. After some games you have to compute the order of the teams in your league. You use the following criteria to arrange the teams:

// Points
// Scoring differential (the difference between goals scored and those conceded)
// Goals scored
// First you sort the teams by their points. If two or more teams reached the same number of points, the second criteria comes into play and so on. Finally, if all criteria are the same, a tiebreaker rule 'head-to-head' decides the order. This means that you arrange the tied teams by considering only the games between these teams. Again you use the criteria 'points', 'scoring differential', 'goals scored' and the tiebreaker rule 'head-to-head' on these games. This process could repeat as long as the tiebracker rule finds any difference. Otherwise the tied teams share the place.

// Input

// number: Number of teams in your league.
// games: An array of arrays. Each item represents a played game with an array of four elements [TeamA,TeamB,GoalA,GoalB] (TeamA played against TeamB and scored GoalA goals and conceded GoalB goals ).
// Output

// positions: An array of positions. The i-th item should be the position of the i-th team in your league.
// Example

// number = 6
// games = [[0, 5, 1, 1],   // Team 0 - Team 5 => 1:1
//          [1, 4, 3, 1],   // Team 1 - Team 4 => 3:1
//          [2, 3, 2, 2],   // Team 2 - Team 3 => 2:2
//          [1, 5, 1, 2],   // Team 1 - Team 5 => 1:2
//          [2, 0, 1, 1],   // Team 2 - Team 0 => 1:1
//          [3, 4, 3, 2],   // Team 3 - Team 4 => 3:2
//          [2, 5, 3, 1],   // Team 2 - Team 5 => 3:1
//          [3, 1, 0, 1],   // Team 3 - Team 1 => 0:1
//          [4, 0, 2, 1],   // Team 4 - Team 0 => 2:1
//          [3, 5, 0, 0],   // Team 3 - Team 5 => 0:0
//          [4, 2, 0, 1],   // Team 4 - Team 2 => 0:1
//          [0, 1, 1, 2],   // Team 0 - Team 1 => 1:2
//          [4, 5, 2, 0],   // Team 4 - Team 5 => 2:0
//          [0, 3, 3, 2],   // Team 0 - Team 3 => 3:2
//          [1, 2, 0, 0]]   // Team 1 - Team 2 => 0:0
// With the first three criteria you may compute the following table:

// Rank	Team	For : Against	GD	Points
// 1.	Team 1	7 : 4	+3	7
// 1.	Team 2	7 : 4	+3	7
// 3.	Team 0	7 : 8	-1	4
// 3.	Team 3	7 : 8	-1	4
// 3.	Team 4	7 : 8	-1	4
// 6.	Team 5	4 : 7	-3	4
// All values of Team 1 and Team 2 are the same. The head-to-head comparison (0:0) also produces no winner, so these teams share the first place. All values of Team 0, Team 3 and Team 4 are the same. Hence you may compute the following table, in which only the games are considered between these teams:

// Rank	Team	For : Against	GD	Points
// 3.	Team 3	5 : 5	0	2
// 4.	Team 0	4 : 4	0	2
// 4.	Team 4	4 : 4	0	2
// Again there are two teams with identical values, but in this case the head-to-head comparison (Team 4 - Team 0 => 2:0) produces a winner. Hence Team 4 ranks at the forth place, Team 0 ranks at the fifth place.

// As a result the final table is:

// Rank	Team	For : Against	GD	Points
// 1.	Team 1	7 : 4	+3	7
// 1.	Team 2	7 : 4	+3	7
// 3.	Team 3	7 : 8	-1	4
// 4.	Team 4	7 : 8	-1	4
// 5.	Team 0	7 : 8	-1	4
// 6.	Team 5	4 : 7	-3	4
// In this example you have to return the array [5, 1, 1, 3, 4, 6].

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
     
      filteredGames = games.filter(function(elem){
        if (teams.indexOf(elem[0]) >= 0 && teams.indexOf(elem[1]) >= 0){
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
//  
  // console.log(computeRanks(6, 
  //   [[0, 5, 1, 1],  
  //   [1, 4, 3, 1],  
  //   [2, 3, 2, 2],  
  //   [1, 5, 1, 2],   
  //   [2, 0, 1, 1],   
  //   [3, 4, 3, 2],   
  //   [2, 5, 3, 1],   
  //   [3, 1, 0, 1],   
  //   [4, 0, 2, 1],   
  //   [3, 5, 0, 0],   
  //   [4, 2, 0, 1],  
  //   [0, 1, 1, 2],   
  //   [4, 5, 2, 0],   
  //   [0, 3, 3, 2],   
  //   [1, 2, 0, 0]] ));
    // 5, 1, 1, 3, 4, 6
  // console.log(computeRanks(8, [ [ 0, 7, 2, 0 ] ] ));
  // [ 1, 2, 2, 2, 2, 2, 2, 8 ] [ 3, 4, 8, 1, 6, 2, 5, 7 ]
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
    // ? [ 1, 1, 8, 1, 1, 1, 1, 7 ]
  // console.log(computeRanks(20 , [ [ 0, 19, 0, 1 ],
  //   [ 1, 18, 0, 0 ],
  //   [ 2, 17, 0, 0 ],
  //   [ 3, 16, 0, 1 ],
  //   [ 4, 15, 0, 1 ],
  //   [ 5, 14, 1, 1 ],
  //   [ 6, 13, 0, 1 ],
  //   [ 7, 12, 0, 1 ],
  //   [ 8, 11, 0, 0 ],
  //   [ 9, 10, 1, 1 ],
  //   [ 1, 19, 0, 1 ],
  //   [ 2, 0, 1, 0 ],
  //   [ 3, 18, 1, 0 ],
  //   [ 4, 17, 1, 1 ],
  //   [ 5, 16, 1, 0 ],
  //   [ 6, 15, 0, 1 ],
  //   [ 7, 14, 1, 1 ],
  //   [ 8, 13, 1, 1 ],
  //   [ 9, 12, 0, 1 ],
  //   [ 10, 11, 0, 1 ],
  //   [ 2, 19, 1, 1 ],
  //   [ 3, 1, 1, 1 ],
  //   [ 4, 0, 0, 0 ],
  //   [ 5, 18, 1, 1 ],
  //   [ 6, 17, 0, 1 ],
  //   [ 7, 16, 0, 0 ],
  //   [ 8, 15, 1, 0 ],
  //   [ 9, 14, 1, 0 ],
  //   [ 10, 13, 1, 0 ],
  //   [ 11, 12, 0, 0 ] ]));
    // Expected: [19, 15, 5, 11, 17, 3, 20, 17, 4, 10, 9, 8, 2, 12, 14, 7, 13, 5, 15, 1], instead got: [19, 15, 5, 11, 17, 3, 20, 17, 4, 10, 9, 8, 2, 11, 14, 7, 13, 5, 15, 1]

    console.log(computeRanks(38, [ [ 0, 37, 1, 0 ],
    [ 1, 36, 1, 0 ],
    [ 2, 35, 1, 1 ],
    [ 3, 34, 0, 0 ],
    [ 4, 33, 0, 0 ],
    [ 5, 32, 0, 0 ],
    [ 6, 31, 1, 0 ],
    [ 7, 30, 0, 1 ],
    [ 8, 29, 1, 0 ],
    [ 9, 28, 1, 1 ],
    [ 10, 27, 1, 1 ],
    [ 11, 26, 1, 0 ],
    [ 12, 25, 0, 1 ],
    [ 13, 24, 0, 0 ],
    [ 14, 23, 0, 1 ],
    [ 15, 22, 0, 1 ],
    [ 16, 21, 0, 0 ],
    [ 17, 20, 0, 0 ],
    [ 18, 19, 0, 1 ],
    [ 1, 37, 0, 0 ],
    [ 2, 0, 1, 0 ],
    [ 3, 36, 1, 1 ],
    [ 4, 35, 1, 0 ],
    [ 5, 34, 0, 0 ],
    [ 6, 33, 0, 1 ],
    [ 7, 32, 0, 1 ],
    [ 8, 31, 0, 1 ],
    [ 9, 30, 0, 0 ],
    [ 10, 29, 0, 1 ],
    [ 11, 28, 1, 0 ],
    [ 12, 27, 0, 1 ],
    [ 13, 26, 0, 1 ],
    [ 14, 25, 0, 0 ],
    [ 15, 24, 1, 0 ],
    [ 16, 23, 0, 1 ],
    [ 17, 22, 0, 1 ],
    [ 18, 21, 1, 0 ],
    [ 19, 20, 0, 0 ],
    [ 2, 37, 0, 0 ],
    [ 3, 1, 0, 0 ],
    [ 4, 0, 1, 1 ],
    [ 5, 36, 1, 0 ],
    [ 6, 35, 1, 1 ],
    [ 7, 34, 0, 0 ],
    [ 8, 33, 0, 1 ],
    [ 9, 32, 1, 1 ],
    [ 10, 31, 0, 1 ],
    [ 11, 30, 0, 1 ],
    [ 12, 29, 0, 1 ],
    [ 13, 28, 1, 0 ],
    [ 14, 27, 0, 1 ],
    [ 15, 26, 0, 1 ],
    [ 16, 25, 0, 1 ],
    [ 17, 24, 1, 1 ],
    [ 18, 23, 1, 1 ],
    [ 19, 22, 0, 1 ],
    [ 20, 21, 1, 1 ],
    [ 3, 37, 1, 1 ],
    [ 4, 2, 1, 1 ],
    [ 5, 1, 0, 1 ],
    [ 6, 0, 0, 0 ],
    [ 7, 36, 1, 0 ]]));
    // Expected: [15, 2, 8, 17, 8, 18, 15, 25, 31, 19, 33, 10, 38, 23, 35, 28, 35, 29, 19, 21, 21, 31, 1, 3, 30, 5, 14, 3, 33, 11, 5, 11, 11, 5, 24, 27, 37, 25], instead got: [14, 2, 7, 16, 7, 17, 14, 24, 31, 19, 33, 10, 38, 23, 35, 28, 35, 29, 19, 21, 21, 31, 1, 3, 30, 5, 13, 3, 33, 18, 9, 11, 11, 5, 26, 27, 37, 24]
