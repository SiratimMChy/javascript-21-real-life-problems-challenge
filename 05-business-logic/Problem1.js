function getTransactionSummary(transactions) {
    let totalDeposit = 0;
    let totalWithdraw = 0;
    let balance = 0;
    for (const transaction of transactions) {
        if (transaction.type === "deposit") {
            totalDeposit+=transaction.amount;
            balance += transaction.amount;
        }
        else if (transaction.type === "withdraw") {
           totalWithdraw+=transaction.amount;
           balance -= transaction.amount;
        }
    }
    return {
    totalDeposit,
    totalWithdraw,
    balance
};
}
const transactions = [
    { type: "deposit", amount: 5000 },
    { type: "withdraw", amount: 2000 },
    { type: "deposit", amount: 3000 },
    { type: "withdraw", amount: 1000 }
];

console.log(getTransactionSummary(transactions));
