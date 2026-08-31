let accounts = [];

// Create Account
function createAccount(account) {
    for (const acc of accounts) {
        if (acc.accountNumber === account.accountNumber) {
            return "Account already exists";
        }
    }

    accounts.push(account);
    return "Account created successfully";
}

// Deposit Money
function deposit(accountNumber, amount) {
    for (const account of accounts) {
        if (account.accountNumber === accountNumber) {

            if (amount <= 0) {
                return "Invalid deposit amount";
            }

            account.balance += amount;

            return `Deposit successful. New balance: ${account.balance}`;
        }
    }

    return "Account not found";
}

// Withdraw Money
function withdraw(accountNumber, amount) {
    for (const account of accounts) {
        if (account.accountNumber === accountNumber) {

            if (amount <= 0) {
                return "Invalid withdrawal amount";
            }

            if (amount > account.balance) {
                return "Insufficient balance";
            }

            account.balance -= amount;

            return `Withdrawal successful. New balance: ${account.balance}`;
        }
    }

    return "Account not found";
}

// Check Balance
function checkBalance(accountNumber) {
    for (const account of accounts) {
        if (account.accountNumber === accountNumber) {
            return account.balance;
        }
    }

    return "Account not found";
}

// Transfer Money
function transferMoney(fromAccount, toAccount, amount) {
    let sender;
    let receiver;

    for (const account of accounts) {
        if (account.accountNumber === fromAccount) {
            sender = account;
        }

        if (account.accountNumber === toAccount) {
            receiver = account;
        }
    }

    if (!sender || !receiver) {
        return "Account not found";
    }

    if (amount <= 0) {
        return "Invalid transfer amount";
    }

    if (amount > sender.balance) {
        return "Insufficient balance";
    }

    sender.balance -= amount;
    receiver.balance += amount;

    return "Transfer successful";
}


// Create Accounts
console.log(
    createAccount({
        accountNumber: "ACC001",
        name: "Rahim",
        balance: 5000
    })
);

console.log(
    createAccount({
        accountNumber: "ACC002",
        name: "Karim",
        balance: 3000
    })
);

// Deposit
console.log(deposit("ACC001", 2000));

// Withdraw
console.log(withdraw("ACC001", 1000));

// Check Balance
console.log(checkBalance("ACC001"));

// Transfer
console.log(transferMoney("ACC001", "ACC002", 2000));

// Final Balance
console.log(checkBalance("ACC001"));
console.log(checkBalance("ACC002"));

console.log(accounts);