const sumAll = function(x, y) {
    if(!Number.isInteger(x) || !Number.isInteger(y) || x<0 || y<0){
        return "ERROR"
    }
    let smallerNum = x;
    let largerNum = y;
    if(x>y){
        smallerNum = y;
        largerNum = x;
    }
    let sum = 0;
    for(let i=smallerNum; i<=largerNum; i++){
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
