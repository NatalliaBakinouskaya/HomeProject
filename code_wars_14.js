// Write a function that, given a string of text (possibly with punctuation and line-breaks), returns an array of the top-3 most occurring words, in descending order of the number of occurrences.

// Assumptions:

// A word is a string of letters (A to Z) optionally containing one or more apostrophes (') in ASCII. (No need to handle fancy punctuation.)
// Matches should be case-insensitive, and the words in the result should be lowercased.
// Ties may be broken arbitrarily.
// If a text contains fewer than three unique words, then either the top-2 or top-1 words should be returned, or an empty array if a text contains no words.
// Examples:

// top_3_words("In a village of La Mancha, the name of which I have no desire to call to
// mind, there lived not long since one of those gentlemen that keep a lance
// in the lance-rack, an old buckler, a lean hack, and a greyhound for
// coursing. An olla of rather more beef than mutton, a salad on most
// nights, scraps on Saturdays, lentils on Fridays, and a pigeon or so extra
// on Sundays, made away with three-quarters of his income.")
// # => ["a", "of", "on"]

// top_3_words("e e e e DDD ddd DdD: ddd ddd aa aA Aa, bb cc cC e e e")
// # => ["e", "ddd", "aa"]

// top_3_words("  //wont won't won't")
// # => ["won't", "wont"]
// Bonus points (not really, but just for fun):

// Avoid creating an array whose memory footprint is roughly as big as the input text.
// Avoid sorting the entire array of unique words.

function topThreeWords(text) {
    let arr = [];
    let obj = {};
    let result = [];
    let min = 0;
    let max_3 = [];
    let check = false;

    arr = text.toLowerCase().replace(/[\,\.\;\:\-\!\?\r?\n\+\/]/gi, '').split(" ");
    
   
    for(word of arr){
        
        for(w of word){
            if(w.charCodeAt() > 96 && w.charCodeAt() < 123 ){
                check = true;
            }
        }
        
        if(word.length > 0 && check == true){
        
            if(obj[word]){
                obj[word] +=1;
                if(obj[word] > max_3[max_3.length - 1]){
                    min = max_3[max_3.length - 1];

                    if(result.includes(word)){
                       result.splice(result.indexOf(word), 1);
                       max_3.splice(max_3.indexOf(obj[word] -1), 1);
                    }
                    else{
                       max_3.pop(); 
                       result.pop();
                    }

                    if(obj[word] > max_3[0]){
                       result.unshift(word);
                       max_3.unshift(obj[word]);
                    }
                    else if(max_3[1] && obj[word] > max_3[1]){
                       result.splice(1,0,word);
                       max_3.splice(1,0,obj[word]);
                    }
                    else {
                       result.push(word);
                       max_3.push(obj[word]);
                    }

                }
            }
            else {
                obj[word] = 1;
                if(result.length < 3){
                   result.push(word);
                   max_3.push(obj[word]);
                
                }
            }
        }
    }
    return result;
}
// console.log(topThreeWords("In a village of La Mancha, the name of which I have no desire to call tomind, there lived not long since one of those gentlemen that keep a lancein the lance-rack, an old buckler, a lean hack, and a greyhound focoursing. An olla of rather more beef than mutton, a salad on most nights, scraps on Saturdays, lentils on Fridays, and a pigeon or so extra on Sundays, made away with three-quarters of his income."))
console.log(topThreeWords("e1 e1 e1 e1 DDD ddd DdD: ddd ddd aa aA Aa, bb cc cC e1 e1 e"));
// console.log(topThreeWords("  //wont won't won't"));
// console.log(topThreeWords("  , e   .. "));
// // console.log(topThreeWords("  ...  "));
// console.log(topThreeWords("  '  "));


// let topThreeWords = text => {
//     let dict = new Map();
//     text.replace(/[A-z']+(?=[ ]+|$)/g, 
//     match => {
//         let word = match.toLowerCase();
//         dict.set(word, dict.has(word) ? dict.get(word) + 1 : 1);
//     });
//     dict.delete("'");
//     return [...dict].sort((a, b) => b[1] - a[1]).map(a => a[0]).slice(0, 3);
// };
// console.log(topThreeWords("e e e e DDD1 ddd1 DdD1 ddd1 ddd1 aa aA Aa, bb cc cC e e e a"));