var longestPalindrome = function (s) {

    if (s.length < 2) {
        return s;
    }

    let length = null
    let start = null

    const searchFromMiddle = (str, left, right) => {
        while (str[left] === str[right] && left >= 0 && right < str.length) {
            left -= 1;
            right += 1;
        }

        if (length < right - left - 1) {
            start = left + 1;
            length = right - left - 1;
        }
    };

    for (let i = 0; i < s.length; i++) {

        searchFromMiddle(s, i, i)
        searchFromMiddle(s, i, i + 1)
    }

    return s.substring(start, start + length)
};