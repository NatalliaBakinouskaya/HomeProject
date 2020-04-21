



let table = [ [ 1, 1000000 ],

  [ 2, 1000000 ],
  [ -1, 0 ],
  [ -1, 0 ],
  [ -1, 0 ],
  [ -1, 0 ] ];
  console.log(table);
  for(let i = 0; i < table.length; i++){
    if (table[i][0] == -1){
      table = table.slice(0, i);
      break;
    };
}
console.log(table);