function monthlyBudgetChecker(expenses) {
    const budget = 10000;
    let remainingBudget = 0;
    let totalExpense = 0;
    for (const expense of expenses) {
        totalExpense += expense.amount;
    }
    remainingBudget = budget - totalExpense;
    const budgetExceeded = totalExpense > budget;
    return {
        totalExpense,
        remainingBudget,
        budgetExceeded
    };
}
const expenses = [
    { title: "Food", amount: 2500 },
    { title: "Transport", amount: 1500 },
    { title: "Shopping", amount: 3000 },
    { title: "Internet", amount: 1000 }
];

console.log(monthlyBudgetChecker(expenses));
