function sockMerchant(n, ar) {
    let count = 0;
    const socks = {};
    for (let i = 0; i < ar.length; i++) {
        if (!socks[ar[i]]) {
            socks[ar[i]] = 1;
        } else {
            socks[ar[i]] += 1;
        }
    }

    for (const property in socks) {
        if (socks[property] >= 2) {
            let pairs = socks[property] / 2;
            count = count + pairs
        }
    }
    return (Math.trunc(count));

}
const sock = sockMerchant(7, [1, 2, 1, 2, 1, 3, 2])
console.log(sock)