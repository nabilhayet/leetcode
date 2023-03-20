var canConstruct = function (ransomNote, magazine) {

    if (magazine.length < ransomNote.length) return false
    let index;

    for (let i = 0; i < magazine.length; i++) {
        if (ransomNote.includes(magazine[i])) {
            index = ransomNote.indexOf(magazine[i])
            ransomNote = ransomNote.slice(0, index) + ransomNote.slice(index + 1)
        }
    }
    if (ransomNote.length == 0) {
        return true
    } else {
        return false
    }
};