let myfun2 = function(arr){
    for (var i =0;i<array.length;i++){
        console.log(array[i]);
    }
}

function one(arr,f){
    for(var i=0;i < arr.length; i++){
        f(arr[i]);
    }
}


function myfun4(arr){
    return arr.forEach(x=>x.concat())
}

var b =[[5,2,3,4],[9,8,7,6],['a','b']]

sumarray = [1,2,3,4]

function addArray(arr){
    result = 0
    for (i in arr){
        result += i.toString()
    }
    return result;
}



var f = function(arr){
    let acc = [];
    arr.forEach(x=> acc=acc.concat(x));
    return acc;
}