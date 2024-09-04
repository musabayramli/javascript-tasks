const students = [
    { name: 'Aqsin', grades: [80, 90, 70] },
    { name: 'Musa', grades: [32, 17, 92] },
    { name: 'David', grades: [78, 82, 88] },
    { name: 'Esmer', grades: [17, 89, 34] },
    { name: 'Zahid', grades: [90, 91, 95] },
    { name: 'Guler', grades: [90, 98, 99] },
    { name: 'Ramile', grades: [78, 65, 88] },
    {name: 'Aysel', grades: [89,91,79]},
    {name: 'Leman',grades: [92,89,73]},
    {name: 'Qara', grades: [51,68,89]},
    {name: 'B.Eli',grades: [92,89,78]}
];








const calculateAverage = grades => (grades.reduce((sum, grade) => sum + grade, 0) / grades.length).toFixed(2);

const gradeMappings = [
    { min: 91, letter: 'A' },
    { min: 81, letter: 'B' },
    { min: 71, letter: 'C' },
    { min: 61, letter: 'D' },
    { min: 0, letter: 'E' }
];

const getLetterGrade = average => {
    for (const { min, letter } of gradeMappings) {
        if (average >= min) {
            return letter;
        }
    }
    return 'E'; 
};

const populateStudentsTable = () => {
    const tableBody = document.getElementById('students-table');
    let classTotal = 0;

   
    students.sort((a, b) => calculateAverage(b.grades) - calculateAverage(a.grades));

    students.forEach(({ name, grades }) => {
        const average = calculateAverage(grades);
        const letterGrade = getLetterGrade(average);
        classTotal += parseFloat(average);

        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${name}</td>
            <td>${grades.join(', ')}</td>
            <td>${average}</td>
            <td>${letterGrade}</td>
        `;

        if (letterGrade === 'A') {
            row.style.backgroundColor = 'green';
        } else if (parseFloat(average) < 51) {
            row.style.backgroundColor = 'red';
        }

        tableBody.appendChild(row);
    });

    const classAverage = (classTotal / students.length).toFixed(2);
    document.getElementById('class-average').textContent = classAverage;
};

document.addEventListener('DOMContentLoaded', populateStudentsTable);
