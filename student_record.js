var checkRecord = function (s) {

    let ab = 0
    let late = 0

    for (let i = 0; i < s.length; i++) {
        if (s[i] == "A") {
            ab += 1
        }
        if (late == 3) continue

        if (late > 0) {
            if (s[i] == "L") {
                late += 1
            } else {
                late = 0
            }
        } else {
            if (s[i] == "L") {
                late += 1
            }
        }
    }

    if (ab < 2 && late < 3) {
        return true
    } else {
        return false
    }

};