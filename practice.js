



function printNumbers(a, b) {
    let sum = a + b

    const interval = setInterval(() => {
        console.log(sum);
        sum--;
        if (sum === 0) {
            clearInterval(interval);
        }
    }, 1000);

}

printNumbers(4, 3)

/////////////////////////


