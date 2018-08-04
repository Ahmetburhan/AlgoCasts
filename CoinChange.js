

function coinChange(amount, denominations) {
    let combos = [];

    function compute_combo(amount, index, combo) {
        if (amount < 0) { return; }

        if (index >= denominations.length) { return; }

        if (amount == 0) {
            combos.push(combo);
            return;
        }

        compute_combo(amount - denominations[index], index, combo.concat([denominations[index]]));
        compute_combo(amount, index + 1, combo);

    }

    compute_combo(amount, 0, []);
    return combos;
}

console.log(coinChange(4, [1, 2, 3]))
