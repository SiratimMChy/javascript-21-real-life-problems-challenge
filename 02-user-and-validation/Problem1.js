function validateUser(user) {
    const { name, email, password } = user;
    if (name !== "" && email !== "" && password !== "") {
        if (password.length >= 6) {
            return {
                success: true,
                message: "Registration successful"
            };
        }
        return {
            success: false,
            message: "Password must contain at least 6 characters"
        };
    }
    else {
        return {
            success: false,
            message: "Registration failed"
        };
    }
}
const user = {
    name: "Tuha",
    email: "rahim@gmail.com",
    password: "123456"
};

console.log(validateUser(user));
