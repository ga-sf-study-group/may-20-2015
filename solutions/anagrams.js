module.exports.isAna = function (str1, str2) {
  check1 = str1.split('').sort().join();
  check2 = str2.split('').sort().join();
    return check1 === check2;
  
};
