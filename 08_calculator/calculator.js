const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(nums) {
	return nums.reduce((total, num)=> total+= num, 0)
};

const multiply = function(nums) {
  return nums.reduce((total, num) => total *= num, 1)
};

const power = function(num, power) {
  return Math.pow(num,power);
};

const factorial = function(num) {
	let ans =1;
  if (!num<1){
    for (let i=num; i>0; i--){
      ans *= i;
    }
  }
  return ans;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
