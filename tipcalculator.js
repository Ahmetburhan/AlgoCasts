let bills = ["124", "48", "268"]
let tips = [];


bills.forEach((bill) => {
let tip;
if (bill < 50) {
    tip = bill * 0.2;
    tips.push(tip)
} else if (bill >= 50 && bill <= 200) {
    tip = bill * 0.15;
    tips.push(tip)
} else if (bill > 200) {
    tip = bill * 0.1;
    tips.push(tip)
}
})

console.log(tips)
