const add = function(a,b) {
  if(isNumber(a) && isNumber(b))
    {
      return a + b;
    }
    else{
      return;
    }
};

const subtract = function(a,b) {
  if(isNumber(a) && isNumber(b))
    {
      return a - b;
    }
    else{
      return;
    }
};

const sum = function(array) {
  return array.reduce((total, current) => total + current, 0);
};

const multiply = function(array) {
  return array.reduce((product, current) => product * current)
};

const power = function(a,b) {  
  return Math.pow(a, b);
};

const factorial = function(n) {
	if (n === 0) return 1;
  let product = 1;
  for (let i = n; i > 0; i--) {
    product *= i;
  }
  return product;
};

function isNumber(value) {
  return typeof value === 'number';
}

function isArray(arr)
{
  return Array.isArray(arr);
}

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
