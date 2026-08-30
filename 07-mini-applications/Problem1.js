function addTodo(todos, todo) {
    todos.push(todo);
    return todos;
}

function removeTodo(todos, id) {
    return todos.filter(todo => todo.id !== id);
}

function completeTodo(todos, id) {
    for (const todo of todos) {
        if (todo.id === id) {
            todo.completed = true;
        }
    }
    return todos;
}

function filterTodos(todos, status) {
    return todos.filter(todo => todo.completed === status);
}
const todos = [
    { id: 1, title: "Learn JavaScript", completed: false },
    { id: 2, title: "Practice Functions", completed: false },
    { id: 3, title: "Learn DSA", completed: false },
    { id: 4, title: "Practice DSA", completed: false }
];
const completedTodos = completeTodo(todos, 1);
const updatedTodos = removeTodo(todos, 3);
const status = filterTodos(todos, true);
/*console.log(completedTodos);
console.log(updatedTodos);
console.log(status);*/
console.log(todos);
