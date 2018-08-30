function minStepsToOne(n, coins) {
    let cache = {};
    function subtractCoins(num) {
        if (cache[num] !== undefined) {
            return cache[num];
        }
        if (num === 0) {
            return 0;
        }
        let minCoins = Infinity;
        for (let i = 0; i < coins.length; i++) {
            if ((num - coins[i]) >= 0) {
                minCoins = Math.min(minCoins, subtractCoins(num - coins[i]));
            }
        }
        cache[num] = minCoins + 1;
        return minCoins + 1;
    }
    return subtractCoins(n);
}

minStepsToOne(11, [5, 8, 9, 1])