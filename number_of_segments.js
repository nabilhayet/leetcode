var countSegments = function (s) {

    if (s.trim() === '') return 0;

    let arr = s.split(" ")

    return arr.filter(a => a != "").length
};