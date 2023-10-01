var repeatedSubstringPattern = function (s) {

    const repeat = s.repeat(2);
    const slice = repeat.slice(1, -1);
    const check = slice.includes(s);

    return check;

};