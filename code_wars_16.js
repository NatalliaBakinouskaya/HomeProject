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
  let finishArray = [];
  let check = 'start not found';
    function FindExitInRows(row){
      
      for(i = 0; i < maze[row].length; i++){

        if(maze[row][i] == '<'|| maze[row][i] == '>'|| maze[row][i] == '^'|| maze[row][i] == 'v'){
          check = 'start found';

          finishArray.push([maze[row][i], row, i]);
          break;
        }
        else if(maze[row][i] == ' ' && (i == maze[row].length - 1 || maze[row][i + 1] == '#')){
          
          finishArray.push([row,i]);
        }
        
      }
      return finishArray;
    }

    function FindExitInColumns(column){
      
      for(i = 1; i < maze.length -1; i++){
       
        if(maze[i][column] == '<'|| maze[i][column] == '>'|| maze[i][column] == '^'|| maze[i][column] == 'v'){
          check = 'start found';

          finishArray = ([maze[i][column], i, column]);
          break;
        }
        else if(maze[i][column] == ' ' && (maze[i + 1][column] == '#')){
          // console.log('found', i, maze[i][column]);
          finishArray = [i,column];

        }
        
      }
      return finishArray;
    }
   
   let temparr = [0,maze.length -1];
   temparr.map(function(elem){
    //  console.log(check);
    if (check !== 'start found'){
      return FindExitInRows(elem);
    }
   })
   temparr = [0,maze[0].length - 1];
   temparr.map(function(elem){
    //  console.log(check);
    if (check !== 'start found'){
      return FindExitInColumns(elem);
    }
     
   })
   
    // FindExitInRows(0);
    // // console.log(maze.length -1);
    // FindExitInRows(maze.length -1);
    // FindExitInColumns(0);
    // FindExitInColumns(maze[0].length - 1);
    return finishArray;
  }
  console.log(escape([
    '# #',
    ' ><',
    '# #'
  ]));
