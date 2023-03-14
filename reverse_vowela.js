var reverseVowels = function (s) {

    let vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    let vowelIndices = []; // [1,4]
    let arr = s.split('');
    let vowelsInString = []; // ['e', 'o']
    for (let i = 0; i < s.length; i++) {
        if (vowels.indexOf(s[i]) > -1) {
            vowelIndices.push(i);
            vowelsInString.push(s[i]);
        }
    }
    vowelsInString.reverse(); // ['o', 'e'];
    for (let i = 0; i < vowelIndices.length; i++) {
        arr[vowelIndices[i]] = vowelsInString[i];
    }
    return arr.join('')
};