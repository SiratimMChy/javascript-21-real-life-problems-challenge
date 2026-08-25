function calculateTicketPrice(age){
    if (age >= 60) {
        return 150;
    } else if(age >= 13) {
        return 300;
    }
    else if(age >= 5) {
        return 100
    }
    else {
        return 'free';
    }
}

console.log(calculateTicketPrice(25));
