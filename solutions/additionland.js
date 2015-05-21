
function subtract(a, b) {
    return a + ((~b)+1)
}

function multiplication(a, b) {
    var result = 0;
    for(var i=0; i < b; i++) {
        result += a;
    }
    return result;
}

function abs(x) {
    if(x < 0) {
        return ~x+1;
    }
    return x;
}

function division(a, b) {
    //console.log(a,b)
    var result = 0;
    var current = 0; 
    if(b === 0) {
        return a > 0? Infinity : -Infinity;
    }

    while(current < abs(a)) {
        result++;
        current += abs(b);
    }
    if( (a < 0 && b >= 0) || (a >= 0 && b < 0) ) {
        result = subtract(0, result);
    }
    return result;
}

module.exports = {
    subtract: subtract,
    multiplication: multiplication,
    division: division
}


