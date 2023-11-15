var canPlaceFlowers = function (flowerbed, n) {

    if (n == 1 && flowerbed.length == 1 && flowerbed[0] == 0) return true

    for (let i = 0; i < flowerbed.length; i++) {

        if (n == 0) return true
        if (flowerbed[i] == 1 && i == 0) continue

        if (flowerbed[i] == 0 && i == 0 && flowerbed[i + 1] == 0) {
            n = n - 1
            flowerbed[i] = 1
        } else if (i == flowerbed.length - 1 && flowerbed[i] == 0 && flowerbed[i - 1] == 0) {
            n = n - 1
            flowerbed[i] = 1
        }
        else if (flowerbed[i] == 0 && flowerbed[i - 1] == 0 && flowerbed[i + 1] == 0) {
            n = n - 1
            flowerbed[i] = 1
        }
    }
    return n == 0 ? true : false
};