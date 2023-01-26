var romanToInt = function (s) {

    let result = 0
    const map = new Map()
    map.set('I', 1)
        .set('V', 5)
        .set('X', 10)
        .set('L', 50)
        .set('C', 100)
        .set('D', 500)
        .set('M', 1000)

    for (let m in map) {
        console.log(map[m])
    }

}

romanToInt('III')