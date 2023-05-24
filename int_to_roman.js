var intToRoman = function (num) {

    let result = "";
    let n;

    let itr = new Map()

    itr.set(1, "I")
    itr.set(5, "V")
    itr.set(10, "X")
    itr.set(50, "L")
    itr.set(100, "C")
    itr.set(500, "D")
    itr.set(1000, "M")

    while (num > 0) {

        if (num >= 1000) {

            // result = result + itr.get("1000")
            // num = num % 1000

        } else if (num >= 900 && num < 1000) {

        } else if (num >= 400 && num < 900) {

        } else if (num >= 90 && num < 100) {

        } else if (num >= 10 && num < 50) {

        } else if (num >= 5 && num < 10) {

        } else if (num >= 1 && num < 5) {

        }
    }

    return result;

};