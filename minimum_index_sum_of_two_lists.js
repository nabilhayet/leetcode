var findRestaurant = function (list1, list2) {

    let min = Infinity
    let result = []
    let sum = 0
    let index

    for (let i = 0; i < list1.length; i++) {
        if (list2.includes(list1[i])) {
            index = list2.indexOf(list1[i])
            sum = i + index

            if (min > sum) {
                min = sum
                result.length = 0
                result.push(list1[i])

            } else if (min == sum) result.push(list1[i])
        }
    }

    return result

};