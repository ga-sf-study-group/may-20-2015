function twos(num) {
    var count = 0;
    for (var i = 0; i <= num; i++) {
        var x = i.toString();
        for (var j = 0; j < x.length; j++) {
            if (x[j] === "2") count++;
        }
    }
    return count;
}

console.log(twos(23));
