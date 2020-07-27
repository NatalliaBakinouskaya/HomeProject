function Mix(arr){
    let min = 0;
    let max = arr.length -1;
    tempArr = [];
    tempArr.length = arr.length;
    arr.map(function(elem){
        x = Math.round(Math.random() * max);
        console.log(x);
    })

}
console.log(Mix([1,2,3]))