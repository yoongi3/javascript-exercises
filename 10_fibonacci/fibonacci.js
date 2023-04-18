const fibonacci = function(num) {
    let sum = 1;
    let prevNum = 0;
    let curNum = 1;
    if (num<0) return 'OOPS';
    for(let i=1; i<parseInt(num); i++){
        sum += prevNum;
        prevNum = curNum;
        curNum = sum;
    }
    return sum;
};

// Do not edit below this line
module.exports = fibonacci;
