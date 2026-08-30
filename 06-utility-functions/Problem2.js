function calculateShippingCost(weight, location) {
    let shippingCost = 0;
    if (location === 'inside') {
        if (weight <= 2) {
            shippingCost = 100;
        } else {
            shippingCost = 100 + (weight - 2) * 30;
        }
    }
    else {
        if (weight <= 2) {
            shippingCost = 150;
        } else {
            shippingCost = 150 + (weight - 2) * 50
        }
    }
    return {
        weight, shippingCost, location
    }
}
const weight = 5;
const location = "outside";
console.log(calculateShippingCost(weight, location));
