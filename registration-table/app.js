const students = ['C1234 - John Doe, London, Full-Stack',
'C2345 - Jane Doe, London, Data-Science',
'C2346 - Mary Ann, Paris, AWS-Devops',
'C2347 - Adam Smith, Texas, AWS-Devops',
'C2444 - Michael Great, Arizona, Full-Stack',
'C2555 - William Cash, Manchester, Data-Science',
'C2455 - Patrick Jane, Madrid, Full-Stack'];

window.addEventListener('load', () => {
    students.forEach(student => {
        createStudentRow(student)
    });
});

const table = document.getElementById('table');

const createStudentRow = (student) => {
 const newStudent = student.split(/[,\s]/).filter(student => (student !== '-' && student !== ''));
 const tableRow = document.createElement('tr');
 const tableDataId = document.createElement('td');
 const tableDataFirstName = document.createElement('td');
 const tableDataLastName = document.createElement('td');
 const tableDataLocation = document.createElement('td');
 const tableDataPath = document.createElement('td');
 tableDataId.innerText = newStudent[0];
 tableDataFirstName.innerText = newStudent[1];
 tableDataLastName.innerText = newStudent[2];
 tableDataLocation.innerText = newStudent[3];
 tableDataPath.innerText = newStudent[4];
 table.appendChild(tableRow);
 tableRow.append(tableDataId, tableDataFirstName, tableDataLastName, tableDataLocation, tableDataPath)
};