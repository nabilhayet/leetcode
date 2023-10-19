function errorLogs(arr) {

    let result = 0
    let m = new Map()
    let n = arr.length

    for (let i = 0; i < n; i++) {
        let ind = arr[i].split(" ")
        console.log(ind)
        if (ind[1] == 'error') {
            if (!m[ind[0]]) {
                m[ind[0]] = 1
            } else {
                m[ind[0]] += 1
            }
        }
    }

    //   console.log(m)

    for (let mo in m) {
        //   console.log(mo)
        //   console.log(m[mo])
        if (m[mo] >= 3) {
            result += m[mo] / 3
        }
    }

    //  console.log(result)
    return result

}


errorLogs(["s1 error", "s1 error", "s2 error", "s1 error", "s2 success", "s2 error"])