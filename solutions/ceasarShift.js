function caesarShift(text, shift) {
    result = "";
    for (var i = 0; i < text.length; i++) {
        c = text.charCodeAt(i);
        if      (c >= 65 && c <=  90) result += String.fromCharCode((c - 65 + shift) % 26 + 65);  // Uppercase
        else if (c >= 97 && c <= 122) result += String.fromCharCode((c - 97 + shift) % 26 + 97);  // Lowercase
        else                          result += text.charAt(i);  // Copy
    }
    return result;
}

caesarShift("Charlie", 5); // => "Hmfwqnj"
