const repeatString = function(string, repeats) {
    if(repeats < 0){return 'ERROR';}
    let stringVal = '';    
    for (let i = 0; i < repeats; i++) {
        stringVal += string;
    }
    return stringVal
};

// Do not edit below this line
module.exports = repeatString;
