var findRelativeRanks = function (score) {

    let scores = new Map()
    scores.set(1, 'Gold Medal')
    scores.set(2, 'Silver Medal')
    scores.set(3, 'Bronze Medal')

    let result = []
    let index;
    let sortedArray = score.slice()

    sortedArray.sort(function (a, b) { return b - a });

    for (let i = 0; i < score.length; i++) {

        console.log(score[i])

        index = sortedArray.indexOf(score[i])

        console.log(`This is position ${index}`)

        if ((index + 1) >= 4) {
            result.push((index + 1).toString())

        } else {
            result.push(scores.get(index + 1))
        }
    }

    return result
};