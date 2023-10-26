function sortArray(arr) {

    for (let i = 0; i < arr.length; i = i + 2) {
        if (arr[i] > arr[i + 1]) {
            let temp = arr[i]
            arr[i] = arr[i + 1]
            arr[i + 1] = temp

        }
    }

    console.log(arr)
    return arr

}

sortArray([1, 3, 5, 2, 7])
sortArray([7, 1, 5, 3, 9, 8])