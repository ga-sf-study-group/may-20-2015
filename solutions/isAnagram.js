function isAnagram(string1, string2) {
    string1 = string1.toLowerCase().split("").sort().join();
    string2 = string2.toLowerCase().split("").sort().join();
    return string1 === string2;
}
