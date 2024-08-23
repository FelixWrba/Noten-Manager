// assigns subjects as JSON from localStorage to the variable subjects 
let subjects = JSON.parse(localStorage.getItem('subjects'));
// does the same for marks
let marks = JSON.parse(localStorage.getItem('marks'));
// declare the undefined variables markTable and HTMLTable
let markTable, HTMLTable;

// bavaria = boolean value bavaria from the localStorage 
let bavaria = JSON.parse(localStorage.getItem('bavaria'));
// if bavaria not defined: set bavaria to true
if (bavaria == undefined || bavaria == null) bavaria = true;
// if bavaria = true: set bavaria checkbox to checked
if (bavaria) document.getElementById('federalState').checked = true;

// if the marks are undefined, create new object:
// { subject: [ Gr. LNW (Array), Kl. LNW (Array), mündl. (Array) ] }
if (!marks) {
    // creates Object
    marks = {};
    // creates for each subjects the following array [[], [], []]
    subjects.forEach(e => {
        marks[e.id] = [[], [], []];
    });
    // saves the mark array to the localStorage
    localStorage.setItem('marks', JSON.stringify(marks));
}

// assigns the return value of generateMarkTable() to markTable
function loadUserData() {
    markTable = generateMarkTable();
}

// creates an array with the following structure and data:
// [
//     [subjectName: str, subjectId: str, [(gr.LNW): int], [(kl.LNW): int], [(mündl.): int], averageGrade: float, roundedAverage: int], 
//     [..]
// ]
function generateMarkTable() {
    // creates the array temp
    let temp = [];
    // creates for each subject an array with the corresponding grades
    subjects.forEach(e => {
        // checks if the subject is selected, if not: skip it
        if (e.sel) {
            // gets the marks for the corresponding subject
            let average = marks[e.id];
            // calculates the average the non bavarian way
            if (!bavaria || marks[e.id][0].length == 0) {
                average.push(marks[e.id][0]);
                average = average[0].concat(average[1], average[2], average[3]);
                average = average.reduce((a, c) => a + c, 0) / average.length;
            }
            // calculates it the bavarian way
            else {
                average = ((average[0].reduce((a, c) => a + c, 0) / average[0].length) * 2 + (average[1].concat(average[2]).reduce((a, c) => a + c, 0) / (average[1].length + average[2].length))) / 3;
            }
            // round the average to the 2nd decimal place
            average = Math.round(average * 100) / 100;
            // if the average is undefined and gets rounded, it is NaN. If so, it is changed to 0
            if (isNaN(average)) average = 0;
            // create the final subject array and add it to temp
            temp.push([e.name, e.id, marks[e.id][0], marks[e.id][1], marks[e.id][2], average, Math.round(average)]);
        }
    });
    // returns the final Array
    return temp;
}

// generates the HTML Table Code layout from variable markTableS
function generateHTMLTable() {
    // get the HTML table and clear it
    let tableId = document.querySelector('.mark-table');
    tableId.innerHTML = '';
    // add the top row to the table
    tableId.innerHTML += '<tr><th>Fach</th><th>Schulaufgeben / Tests</th><th>schriftliche Noten (Exen...)</th><th>m&uuml;ndliche Noten</th><th>Schnitt</th><th>Endnote</th></tr>';
    // loop through the markTable array and add for each subject the row with its content
    markTable.forEach(e => {
        tableId.innerHTML += `<tr>
        <td>${e[0]}<button class="btn add" onclick="resetMarksWindow('${e[1]}', '${e[0]}')">-</button></td>
        <td>${e[2]}<button class="btn add" onclick="addMark('${e[1]}', 1)">+</button></td>
        <td>${e[3]}<button class="btn add" onclick="addMark('${e[1]}', 2)">+</button></td>
        <td>${e[4]}<button class="btn add" onclick="addMark('${e[1]}', 3)">+</button></td>
        <td>${e[5]}</td><td>${e[6]}</td></tr>`;
    });
}

// adds a mark to a subject and column
function addMark(id, col) {
    // cancels the function if the parameters are undefined
    if (!id || !col) return;
    // gets the grade from user input
    let inputMark = parseInt(prompt('Gebe die hinzuzufügende Note ein: '));
    // checks if input left blank or mark in range and not NaN
    if (!inputMark) alert("Du musst etwas eingeben");
    else if (inputMark < 1 || inputMark > 6 || inputMark == NaN) alert("Die Note muss sich zwischen 1 und 6 befinden und eine Zahl sein!");
    else {
        // adds mark to corresponding column in array and updates HTML table
        marks[id][col - 1].push(inputMark);
        localStorage.setItem('marks', JSON.stringify(marks));
        markTable = generateMarkTable();
        generateHTMLTable();
    }
}

// shows a window to reset the marks of a subject
function resetMarksWindow(id, name) {
    let window = document.getElementById('deleteWindow');
    window.innerHTML = `<div><h3>Noten des Fachs ${name} zum L&ouml;schen</h3><span onclick="resetMarks('${id}', 1)">L&ouml;sche SAs / Test</span><span onclick="resetMarks('${id}', 2)">L&ouml;sche scriftl. Noten</span><span onclick="resetMarks('${id}', 3)">L&ouml;sche m&uuml;ndl. Noten</span></div>`;
    window.style.display = 'flex';
}
// removes all marks from a column (col) in subject (id) and generates now HTML table
function resetMarks(id, col) {
    marks[id][col - 1] = [];
    localStorage.setItem('marks', JSON.stringify(marks));
    markTable = generateMarkTable();
    generateHTMLTable();
}

// if the bavaria checkbox changes, this function is called to change the bavaria variable
function changeState() {
    let input = document.getElementById('federalState');
    if (input.checked) bavaria = true;
    else bavaria = false;
    // saves bavaria to localStorage and generates new HTML table
    localStorage.setItem('bavaria', JSON.stringify(bavaria));
    markTable = generateMarkTable();
    generateHTMLTable();
}

// generates the HTML table the first time
loadUserData();
generateHTMLTable();