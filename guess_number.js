var guessNumber = function (n) {

    let findNumber = (start, end) => {
        let mid = Math.floor((start + end) / 2);
        let pick = guess(mid);

        if (pick === 1) {
            return findNumber(mid + 1, end);
        } else if (pick === -1) {
            return findNumber(start, mid - 1);
        } else {
            return mid;
        }
    };

    return findNumber(0, n);

};
