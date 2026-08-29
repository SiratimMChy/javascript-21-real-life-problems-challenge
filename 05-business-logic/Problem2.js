function getExpenseSummary(expenses) {
    let summary = {};
    let total = 0;
    for (const expense of expenses) {
        if (!summary[expense.category]) {
            summary[expense.category] = 0;
        }
        summary[expense.category] += expense.amount;
        total += expense.amount;
    }

    summary.total = total;
    return summary;

}

const expenses = [
    { category: "food", amount: 500 },
    { category: "transport", amount: 300 },
    { category: "food", amount: 700 },
    { category: "shopping", amount: 2000 },
    { category: "transport", amount: 200 }
];

console.log(getExpenseSummary(expenses));
