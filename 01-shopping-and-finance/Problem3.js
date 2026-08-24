function calculateSalary(employee) {
      const { name, basicSalary, bonus, tax } = employee;
    let Gross_Salary = basicSalary + bonus;
    let Net_Salary = Gross_Salary - tax;
    return {
        GrossSalary: Gross_Salary,
        Bonus: bonus,
        Tax: tax,
        NetSalary: Net_Salary
    }
}

const employee = {
    name: "Rahim",
    basicSalary: 30000,
    bonus: 5000,
    tax: 3000
};

console.log(calculateSalary(employee));



