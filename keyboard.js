var findWords = function (words) {

    let s = ["qwertyuiop", "asdfghjkl", "zxcvbnm"]
    let result = []
    let str
    let index = 0
    let bool;
    let count = 0

    for (let i = 0; i < words.length; i++) {
        str = words[i].toLowerCase();

        for (let j = 0; j < str.length; j++) {

            if (!s[index].includes(str[j])) {
                index += 1
                bool = false
                count = 0
                j = -1
            } else {
                bool = true
                count += 1
            }
            if (bool == true && count == str.length) {
                result.push(words[i])
            }
            if (index > 2) {
                break
            }
        }
        index = 0
        bool = false
        count = 0
    }

    return result
};