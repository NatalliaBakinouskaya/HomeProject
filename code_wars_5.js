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
  let start = Date.now();
    let teams = [];
    let table;
    let check = 0;
    let k = 0.0000001;

    function findTeams (num){
      for(let i = 0; i < num; i++){
       teams.push(i);
      }
      // console.log(teams);
      return teams;
  }

    function makeTable (list){
        table = [];
      // let start = Date.now();
        table = list.map(function(elem, index ){
            return table[index] = [elem, 0];
           
            
        })
        games.map(function(elem, index, arr){
           
            for (let i = 0; i <= 1; i++){
                        
            let sign = i > 0 ? -1: 1;
            let points = (elem[2] - elem[3]) * sign  > 0 ? 2: (elem[2] - elem[3]) * sign < 0 ? 0: 1;
            let scoringD = (elem[2] - elem[3]) * sign;
            let goals = i < 1? elem[2]: elem[3];
            
                if (list.length == number){

                  // console.log("nonono");
                    
                  table[elem[i]][1] += points * 1000000 + scoringD * 1000 + goals;
                  // console.log(table);
                }
                else if (teams.indexOf(elem[i]) > -1 && teams.indexOf(elem[i + sign]) > -1){
                    table[teams.indexOf(elem[i])][1] += points * 1000000 + scoringD * 1000 + goals;
                    // table[teams.indexOf(elem[i + sign])][1] += points * 1000000 + scoringD * 1000 + goals;
                    console.log(elem, "first and second",table);
                    // break;
                 }
                
                

            }
            
        })
           
       table = table.sort((a, b) => b[1] - a[1]);
       teams = [];
      //  let end = Date.now();
      //  console.log(end - start);
      // console.log(table);
      return table;
    }
    function findSame(tab){
      // let teams = [];
      
      
      tab.map(function(elem, index, arr){
        
        
        if(index != arr.length - 1 && elem[1] == arr[index+1][1]){
            
            teams.push(elem[0]);
        }
        else if ((index == arr.length - 1 || index != 0 && elem[1] != arr[index+1][1]) && elem[1] == arr[index-1][1] ){
         
            
            teams.push(elem[0]);
            
            makeTable(teams);
            console.log(table);
            
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
            // teams = [];
           
        }
     
      });
      tab = tab.sort((a, b) => b[1] - a[1]);
      k *= 0.0000001;
      
  }
    function makeOrder(tab){
      // let start = Date.now();
      tab.map(function(elem, index, arr){
        if (index != 0 && elem[1] == arr[index - 1][1]){
          elem[2] = arr[index - 1][2];
        }
        else elem[2] = index + 1;
         
      });
      tab.sort((a, b) => a[0] - b[0]);
      
      tab = tab.map((elem) => elem[2]);
      // let end = Date.now();
      // console.log(end - start);
      return tab; 
    }
    
    findTeams(number);
    makeTable(teams);
    let tableFull = table.slice();
    // teams = [];
    console.log(check);
   
    while (check < 1){
      findSame(tableFull);
    }
    let end = Date.now();
    console.log(end - start);
    return makeOrder(tableFull);
    return tableFull;
  //   [ [ 1, 7003007.10000001 ],
  // [ 2, 7003007.10000001 ],
  // [ 3, 3999007.2000005 ],
  // [ 4, 3999007.20000042 ],
  // [ 0, 3999007.2000004 ],
  // [ 5, 3997004 ] ]
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