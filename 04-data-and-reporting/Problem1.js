function getStudentResults(students) {
    let results = [];
    for (const student of students) {
        if (student.marks >= 80) {
            results.push({
                name: student.name,
                marks: student.marks,
                Grade: 'A+'
            });
        } else if (student.marks >= 75) {
            results.push({
                name: student.name,
                marks: student.marks,
                Grade: 'A'
            });
        }
        else if (student.marks >= 70) {
            results.push({
                name: student.name,
                marks: student.marks,
                Grade: 'A-'
            });
        }
        else if (student.marks >= 65) {
            results.push({
                name: student.name,
                marks: student.marks,
                Grade: 'B+'
            });
        }
        else if (student.marks >= 60) {
            results.push({
                name: student.name,
                marks: student.marks,
                Grade: 'B'
            });
        }
        else if (student.marks >= 55) {
            results.push({
                name: student.name,
                marks: student.marks,
                Grade: 'B-'
            });
        }
        else if (student.marks >= 50) {
            results.push({
                name: student.name,
                marks: student.marks,
                Grade: 'C+'
            });
        }
        else if (student.marks >= 45) {
            results.push({
                name: student.name,
                marks: student.marks,
                Grade: 'C'
            });
        }
        else if (student.marks >= 40) {
            results.push({
                name: student.name,
                marks: student.marks,
                Grade: 'D'
            });
        }
        else {
            results.push({
                name: student.name,
                marks: student.marks,
                Grade: 'F'
            });
        }
    }
    return results;
}
const students = [
    { name: "Rahim", marks: 85 },
    { name: "Karim", marks: 72 },
    { name: "Hasan", marks: 66 },
    { name: "Nabil", marks: 45 },
    { name: "Sakib", marks: 30 }
];

console.log(getStudentResults(students));
