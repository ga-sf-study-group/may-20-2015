function isAnagram(left, right) {
    function isAlpha(letter) {
        return /[a-zA-Z]/.test(letter);
    }
    left = left.toLowerCase().split('').filter(isAlpha).sort().join('');
    right = right.toLowerCase().split('').filter(isAlpha).sort().join('');
    return left === right;
}

console.log(isAnagram("parliament", "partial men"));
console.log(isAnagram("parliaments", "partial mentos"));


module.exports.isAna = function (str1, str2) {
  check1 = str1.split('').sort().join();
  check2 = str2.split('').sort().join();
    return check1 === check2;
  
};
