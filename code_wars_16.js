// That's terrible! Some evil korrigans have abducted you during your sleep and threw you into a maze of thorns in the scrubland D:
// But have no worry, as long as you're asleep your mind is floating freely in the sky above your body.

// Seeing the whole maze from above in your sleep, can you remember the list of movements you'll have to do to get out when you awake?

// Input

// You are given the whole maze maze as a 2D grid, more specifically in your language:

// an array of strings

// maze[0][0] is the top left-hand corner

// maze[maze.length - 1][maze[0].length - 1] is the bottom right-hand corner

// Inside this 2D grid:

// ' ' is some walkable space
// '#' is a thorn bush (you can't pass through)
// '^', '<', 'v' or '>' is your sleeping body facing respectively the top, left, bottom or right side of the map.
// Output

// Write the function escape that returns the list/array of moves you need to do relatively to the direction you're facing in order to escape the maze (you won't be able to see the map when you wake up). as an array of the following instructions:

// 'F' move one step forward
// 'L' turn left
// 'R' turn right
// 'B' turn back
// Note: 'L','R', and 'B' ONLY perform a rotation and will not move your body

// If the maze has no exit, return an empty array.

// This is a real maze, there is no "escape" point. Just reach the edge of the map and you're free!
// You don't explicitely HAVE to find the shortest possible route, but you're quite likely to timeout if you don't ;P
// Aside from having no escape route the mazes will all be valid (they all contain one and only one "body" character and no other characters than the body, "#" and " ". Besides, the map will always be rectangular, you don't have to check that either)

// Return the array of movements to execute to get out of the maze

function escape(maze) {
  
  let exits = [];
  let path = [];
  let finish = 0;
  function FindExit(){
    let check = 'start not found';
    function FindExitInRows(row){
      for(i = 0; i < maze[row].length; i++){

        if(maze[row][i] == '<'|| maze[row][i] == '>'|| maze[row][i] == '^'|| maze[row][i] == 'v'){
          check = 'start found';

          exits.push([maze[row][i], row, i]);
          break;
        }
        else if(maze[row][i] == ' ' && (i == maze[row].length - 1 || maze[row][i + 1] == '#')){
          
          exits.push([row,i]);
        }
        
      }
      return exits;
    }

    function FindExitInColumns(column){
      
      for(i = 1; i < maze.length -1; i++){

        if(maze[i][column] == '<'|| maze[i][column] == '>'|| maze[i][column] == '^'|| maze[i][column] == 'v'){
          check = 'start found';

          exits = ([maze[i][column], i, column]);
          break;
        }
        else if(maze[i][column] == ' ' && (maze[i + 1][column] == '#')){
          exits.push([i, column]);
        }
        
      }
      return exits;
    }
  
  [0,maze.length -1].forEach(function(elem){
    if (check !== 'start found'){
      FindExitInRows(elem);
    }
   });
   [0,maze[0].length -1].forEach(function(elem){
    
    if (check !== 'start found'){
      FindExitInColumns(elem);
    }
   });
  }
  function FindPath(exit){
    let step = exit;
    
    let check = "Path not found";
    
    let path = [];
    let finish = "";
    let crossroads = [];
    
    function NextStep(){
      
      check = "Pass not found";
      
      let movements = [[[step[0]],[step[1] +1]],[[step[0]],[step[1] -1]]];
      if(maze[step[0] -1]){
        movements.push([[step[0] -1],[step[1]]]);
      }
      if(maze[step[0] +1]){
        movements.push([[step[0] +1],[step[1]]]);
      }
         

      let temp = maze[step[0]].split("");
      temp[step[1]] = "X";
      maze[step[0]] = temp.join("");
      
      
      path.push([step[0],step[1]]);
      
      movements.forEach(function(elem, index, arr){
        
        if(maze[elem[0]][elem[1]] == '<'|| maze[elem[0]][elem[1]] == '>'|| maze[elem[0]][elem[1]] == '^'|| maze[elem[0]][elem[1]] == 'v'){
          check = "Path found";
          
        }
        else if(maze[elem[0]][elem[1]] == ' '){
          if(check == "Pass not found"){
            
            step[0] = elem[0][0];
            step[1] = elem[1][0];
            
            
            check = "Step found";
  
          }
          else {
            crossroads.push([elem[0][0],elem[1][0]]);
            if(check == "Step found" || check =="Crossroad found"){
              path.push("crossroad");
            }
            check = "Crossroad found";
          }
        }
        else if(index == movements.length -1 && maze[elem[0]][elem[1]] != ' ' && check == "Pass not found" ){
          
          if(crossroads.length > 0){
            check = "Deadlock";
            for(i = path.length -1; i >= 0; i--){
              if(path[i] == 'crossroad'){
                
                path = path.slice(0, i);
                
                step = crossroads[crossroads.length - 1].slice();
                crossroads.pop();
                
                break;
                
  
              }
            }
            
           
          }
          else {
            check = "Finish";
          }
          
          
        }
        
        return step;
      })
      
      return path;
      
    }
    
      
      while(check != "Finish" && check != "Path found"){
        
      NextStep();
      
      }
      
      
      console.log('final path:', path,'crossroads:', crossroads, "step", step, check, maze);
    
  }

  FindExit()
  console.log(exits);
  
  for(exit of exits){
    FindPath(exit);
  }
  
  // console.log(check);
 
  
  }
  
  console.log(escape([
    " ########################################",
  "#     #       #     #         # #   #   #",
  "##### # ##### # ### # # ##### # # # ### #",
  "# #   #   #   #   #   # #     #   #   # #",
  "# # # ### # ########### # ####### # # # #",
  "#   #   # # #       #   # #   #   # #   #",
  "####### # # # ##### # ### # # # #########",
  "#   #     # #     # #   #   # # #       #",
  "# # ####### ### ### ##### ### # ####### #",
  "# #             #   #     #   #   #   # #",
  "# ############### ### ##### ##### # # # #",
  "#               #     #   #   #   # #   #",
  "##### ####### # ######### # # # ### #####",
  "#   # #   #   # #         # # # #       #",
  "# # # # # # ### # # ####### # # ### ### #",
  "# # #   # # #     #   #     # #     #   #",
  "# # ##### # # ####### # ##### ####### # #",
  "# #     # # # #   # # #     # #       # #",
  "# ##### ### # ### # # ##### # # ### ### #",
  "#     #     #     #   #     #   #   #    ",
  "#########################################"
  ]));
