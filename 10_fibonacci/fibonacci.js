const fibonacci = function(value) {
    let count = 0;
    let current = 0;
    let first = 0;
    let second = 1;

    if(typeof value !== 'number'){
        count = parseInt(value);
    }else{
        count = value;
    }

    if (count < 0) return "OOPS";
    if (count == 0) return 0;

    for(let i = 1; i < count; i++){
        current = first + second;
        first = second;
        second = current;
    }

    return second;
};

// Do not edit below this line
module.exports = fibonacci;
