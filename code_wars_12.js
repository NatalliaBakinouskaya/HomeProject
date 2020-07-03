// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// isIsogram("Dermatoglyphics") == true
// isIsogram("aba") == false
// isIsogram("moOse") == false // -- ignore letter case
// ___1 Solution___
function isIsogram(str){
              
    str = str.toLowerCase();
   
    let Obj = {};
    
    for(i in str){
        if (Obj[str[i]]){
            return false;
        }
        else
        Obj[str[i]] = true;
    }
   
    return true;

    }
    console.log(isIsogram("d"));

// _______2 Solution_____

function isIsogram(str){
    
   str = str.toLowerCase().split('').sort();
   for(let i = 1; i < str.length; i++){
        if(str[i] == str[i - 1]){
           return false;
        }
    }
    return true;
}
  console.log(isIsogram("mose"));

  function isIsogram(str){ 
    return !/(\w).*\1/i.test(str)
  }
  function isIsogram(str){
    return new Set(str.toUpperCase()).size == str.length;
  }