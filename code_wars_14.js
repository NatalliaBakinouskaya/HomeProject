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
    let mid = 1;

    arr = text.toLowerCase().replace(/[\,\.\;\:\-\!\?]/gi, '').split(' ').sort();
    // console.log(arr);
    for(word of arr){
        // console.log();
        if(obj[word]){
            obj[word] +=1;
            if(obj[word] > max_3[max_3.length - 1]){
                // console.log(word, obj[word],max_3 );
                min = max_3[max_3.length - 1];
                

                
                
                if(result.includes(word)){
                    result.splice(result.indexOf(word), 1);
                    max_3.splice(max_3.indexOf(obj[word] -1), 1);
                    // console.log('obj[word]', obj[word]);
                    // console.log(word, obj[word],max_3,result );
                }
                else{
                    max_3.pop(); result.pop();
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
                // console.log('fin', word, obj[word],result, max_3 );
                // max_3[max_3.length - 1] = obj[word];
                // max_3.sort((a,b)=> b - a);
                
                // result.length > 3? result.length = 3:result.length = result.length;
                // console.log(word, obj[word],max_3,result );
            }

            // console.log('hohoh', word, obj[word]);
           
        }
        else {
            obj[word] = 1;
            if(result.length < 3){
            // console.log(word, obj[word],max_3 );
            result.push(word);
            max_3.push(obj[word]);
            // console.log(word, obj[word],max_3, result );
            }
         
         
        
       
            // if(obj[word] >= max){

            // if(result.indexOf(word) >= 0){
            //         result.splice(result.indexOf(word), 1);
            //     }
            // result.unshift(word);
            // max = obj[word];
            // console.log(result);
           
        
        }
        
        // result.length = 3;

    }
    console.log(max_3, result);
    return result;

}
console.log(topThreeWords("In a village of La Mancha, the name of which I have no desire to call tomind, there lived not long since one of those gentlemen that keep a lancein the lance-rack, an old buckler, a lean hack, and a greyhound focoursing. An olla of rather more beef than mutton, a salad on most nights, scraps on Saturdays, lentils on Fridays, and a pigeon or so extra on Sundays, made away with three-quarters of his income."))
console.log(topThreeWords("e e e e DDD ddd DdD: ddd ddd aa aA Aa, bb cc cC e e e"));
console.log(topThreeWords("  //wont won't won't"));