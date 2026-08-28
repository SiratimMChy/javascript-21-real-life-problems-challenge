function getDepartmentReport(employees) {
    let report = {};
    for (const employee of employees) {
        const department = employee.department;
        if (!report[department]) {
            report[department] = {
                employeeCount: 0,
                totalSalary: 0
            };
        }
        report[department].employeeCount++;
        report[department].totalSalary += employee.salary;
    }
    for (const department in report) {
        report[department].averageSalary =report[department].totalSalary / report[department].employeeCount;
    }
    return report;
}
const employees = [
    { name: "Rahim", department: "IT", salary: 40000 },
    { name: "Karim", department: "HR", salary: 30000 },
    { name: "Hasan", department: "IT", salary: 50000 },
    { name: "Nabil", department: "HR", salary: 35000 },
    { name: "Sakib", department: "Finance", salary: 45000 }
]; 

console.log(getDepartmentReport(employees));
