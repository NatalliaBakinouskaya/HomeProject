// Given a string of digits, you should replace any digit below 5 with '0' 
// and any digit 5 and above with '1'. Return the resulting string.



    function fakeBin(x){
        
       x = x.split('').map(char => + char < 5?char = 0: char = 1).join('');
      return x;
    }
    console.log(fakeBin('45385593107843568'))
