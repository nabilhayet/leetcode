var judgeCircle = function (moves) {

    let up = 0
    let down = 0
    let le = 0
    let ri = 0

    for (let i = 0; i < moves.length; i++) {
        if (moves[i] == "U") {
            up += 1
        } else if (moves[i] == "D") {
            down += 1
        } else if (moves[i] == "L") {
            le += 1
        } else {
            ri += 1
        }
    }

    if (up == down && le == ri) {
        return true
    } else {
        return false
    }
};