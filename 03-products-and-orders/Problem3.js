function getOrderSummary(orders) {
    let summary = {
        pending: 0,
        completed: 0,
        cancelled: 0
    };
    for (const order of orders) {
        if (order.status === 'pending') {
            summary.pending++;
        } else if (order.status === 'completed') {
            summary.completed++;
        }
        else {
            summary.cancelled++;
        }
    }
    return summary;
}
const orders = [
    { id: 1, status: "pending" },
    { id: 2, status: "completed" },
    { id: 3, status: "completed" },
    { id: 4, status: "cancelled" },
    { id: 5, status: "pending" }
];

console.log(getOrderSummary(orders));
