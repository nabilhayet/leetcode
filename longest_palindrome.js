var longestPalindrome = function (s) {

    let palindrome = new Map()
    let count = 0
    let max = -1

    for (let i = 0; i < s.length; i++) {
        if (palindrome[s[i]]) {
            palindrome[s[i]] += 1
        } else {
            palindrome[s[i]] = 1
        }
    }

    console.log(palindrome)

    for (const p in palindrome) {
        if (palindrome[p] % 2 == 0) {
            count = count + palindrome[p]
        } else {
            max = max < palindrome[p] ? palindrome[p] : max
        }
    }

    if (max < 0) {
        return count
    } else {
        count = count + max
        return count
    }

};