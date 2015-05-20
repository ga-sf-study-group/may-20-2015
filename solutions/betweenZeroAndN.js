function twos(n) {
  var count = 0;
  for (var i = 0; i < n; i++){
    var x = i.toString();
    var xs = x.split("");
    xs.forEach(function(el){
      if (el === "2") {
        count += 1;
      }
    });
  }
  return count;  
}

console.log(twos(23));