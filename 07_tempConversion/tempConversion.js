const convertToCelsius = function(temp) {
  let tempCel = (temp - 32) * 5/9;
  return Math.round(tempCel*10)/10;
};

const convertToFahrenheit = function(temp) {
  let tempFah = temp * 9/5 + 32;
  return Math.round(tempFah*10)/10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
