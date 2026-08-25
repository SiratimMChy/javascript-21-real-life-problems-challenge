function login(users, email, password) {
    for (const value of users) {
        if (value.email === email && value.password === password) {
            return "Login successful";
        }
    }
    return "Invalid email or password";

}

const users = [
    {
        email: "rahim@gmail.com",
        password: "123456"
    },
    {
        email: "karim@gmail.com",
        password: "abcdef"
    }
];

console.log(login(users, "rahim@gmail.com", "123456"));