var distributeCandies = function (candyType) {

    let result = 0
    let candies = new Map()

    for (let i = 0; i < candyType.length; i++) {
        if (candies[candyType[i]]) {
            candies[candyType[i]] += 1
        }
        else {
            candies[candyType[i]] = 1
        }
    }

    let num_of_types = (Object.keys(candies).length)
    let allowed_candies = candyType.length / 2

    if (allowed_candies < num_of_types) {
        return allowed_candies
    } else {
        return num_of_types
    }
};