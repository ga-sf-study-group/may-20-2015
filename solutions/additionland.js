function maths(a, b, operand) {
    if (operand === "-") {
        return subtract(a, b);
    } else if (operand === "*") {
        return multiply(a, b);
    } else if (operand === "/") {
        return divide(a, b);
    }

    function add(a, b) {
        return a + b;
    }

    function subtract(a, b) {
        return a + ((~b) + 1);
    }

    function multiply(a, b) {
        var result = 0;
        for (var i = 0; i < b; i++) {
            result += a;
        }
        return result;
    }

    function divide(a, b) {
        var result = 0;
        while (a >= b) {
            result++;
            a = subtract(a, b)
        }
        if (a !== 0) {
            result += ".";
            a = multiply(a, 10)
            var result2 = 0;
            while (a >= b) {
                result2++;
                a = subtract(a, b)
            }
            result = parseFloat(result + result2);
        }
        return result;
    }
}
