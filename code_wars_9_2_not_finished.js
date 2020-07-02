function rotate(matrix, cw=true) {
    let result = matrix.map(r => r.slice())
    let rows = matrix.length, cols = matrix[0].length
    if (rows == 1) {
      if (cw) result[0][0] = matrix[0][cols-1]
      else result[0][cols-1] = matrix[0][0]
    }
    if (cols == 1) {
      if (cw) result[0][0] = matrix[rows-1][0]
      else result[rows-1][0] = matrix[0][0]
    }
    for (let r = 0; r < rows; ++r) for (let c = 0; c < cols; ++c) {
      if (cw) {
        if (r == 0 && c > 0) result[r][c] = matrix[r][c-1]
        else if (r > 0 && c == cols - 1) result[r][c] = matrix[r-1][c]
        else if (rows > 1 && r == rows - 1 && c < cols - 1) result[r][c] = matrix[r][c+1]
        else if (cols > 1 && r < rows - 1 && c == 0) result[r][c] = matrix[r+1][c]
      }
      else {
        if (r == 0 && c < cols - 1) result[r][c] = matrix[r][c+1]
        else if (r < rows - 1 && c == cols - 1) result[r][c] = matrix[r+1][c]
        else if (rows > 1 && r == rows - 1 && c > 0) result[r][c] = matrix[r][c-1]
        else if (cols > 1 && r > 0 && c == 0) result[r][c] = matrix[r-1][c]
      }
    }
    return result
  }
  
  function contoursShifting(matrix, cw=true) {
    let rotated = rotate(matrix, cw)
    let rows = matrix.length, cols = matrix[0].length
    if (rows > 2 && cols > 2) {
      let inside = matrix.slice(1, -1).map(row => row.slice(1, -1))
      inside = contoursShifting(inside, !cw)
      for (let r = 1; r < rows - 1; ++r) for(let c = 1; c < cols - 1; ++c)
        rotated[r][c] = inside[r-1][c-1]
    }
    return rotated
  }

  console.log(contoursShifting([
    [ 1,  2,  3 ],
    [ 5,  6,  7],
    [ 9, 10, 11],
    [13, 14, 15],
    [17, 18, 190]
 
 ]));
//  console.log(contoursShifting([
//     [ 1,  2,  3 ]
    
 
//  ]));