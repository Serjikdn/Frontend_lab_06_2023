class Student {
    constructor(firstName, lastName, grades) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.grades = grades;
    }
}

class ListOfStudents {
    constructor(students) {
        this.students = students;
    }

    getTableList() {
        let table = '<table><tr><th>Name</th><th>Last Name</th><th>Math</th><th>History</th><th>JS</th><th>Avg</th></tr>';
        this.students.forEach(student => {
            const avg = student.grades.reduce((a,b) => (a+b))/student.grades.length;
            table += `<tr><td>${student.firstName}</td><td>${student.lastName}</td><td>${student.grades[0]}</td><td>${student.grades[1]}</td><td>${student.grades[2]}</td><td>${avg.toFixed()}</td></tr>`;
        });
        table += '</table>';
        return table;
    }
}

class StylesTable extends ListOfStudents {
    constructor(students) {
        super(students);
    }

    getStyles() {
        return '<style> table { border-collapse: collapse; } th, td { border: 1px solid green; padding: 8px; color: green; } th{ color: white; background-color: limegreen} </style>';
    }

    getTableList() {
        let tableWithStyles = super.getTableList();
        tableWithStyles = `<html><head>${this.getStyles()}</head><body>${tableWithStyles}</body></html>`;
        return tableWithStyles;
    }

    getAvg() {
        this.students.forEach(student => {
            const avg = student.grades.reduce((acc, val) => acc + val, 0) / student.grades.length;
            student.avgGrade = avg.toFixed();
        });
    }

    getTotalAvg() {
        const totalAvg = this.students.reduce((acc, student) => acc + parseFloat(student.avgGrade), 0) / this.students.length;
        return totalAvg.toFixed();
    }
}

// Створення об'єкта класу StylesTable
const students = [
    new Student('John', 'Smith', [80, 75, 90]),
    new Student('Alice', 'Hot', [85, 88, 92]),
    new Student('Bob', 'Johnson', [70, 65, 80]),
    new Student('Lisa', 'Novak', [84, 95, 80]),
];

const styledTable = new StylesTable(students);
styledTable.getAvg();
const tableWithStyles = styledTable.getTableList();
const totalAvg = styledTable.getTotalAvg();
const container = document.querySelector('#result');
const avg = document.querySelector('#avg');
container.innerHTML = tableWithStyles;
avg.style.color = 'green';
avg.innerHTML = '<br>Середній бал по групі: ' + totalAvg;