function calculateDiscount(amount) {
    let finalPrice = 0;
    let discount = 0;
    if (amount >= 20000) {
        discount = amount * 0.20;
        finalPrice = amount - discount;
    }
    else if (amount >= 10000) {
        discount = amount * 0.15;
        finalPrice = amount - discount;
    }
    else if (amount >= 5000) {
        discount = amount * 0.10;
        finalPrice = amount - discount;
    }
    else {
        discount = amount * 0;
        finalPrice = amount - discount;
    }
    return {
        Discount: discount,
        FinalPrice: finalPrice
    }
}

console.log(calculateDiscount(10000));