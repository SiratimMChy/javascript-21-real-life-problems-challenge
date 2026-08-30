function calculateUtilityBill(units) {
    let bills = 0;
    if (units <= 100) {
        bills = 5 * units;
    }
    else if (units <= 200) {
        bills = 5 * 100 + (units - 100) * 7;
    }
    else {
        bills = 5 * 100 + 7 * 100 + (units - 200) * 10;
    }
    return {
        units, bills
    };
}
const units = 250;
console.log(calculateUtilityBill(units));

