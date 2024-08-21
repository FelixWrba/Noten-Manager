let subjects = JSON.parse(localStorage.getItem('subjects'));
let marks = JSON.parse(localStorage.getItem('marks'));
let markTable;
let HTMLTable;
let bavaria = JSON.parse(localStorage.getItem('bavaria'));
if (bavaria == undefined || bavaria == null) bavaria = true;
if (bavaria) document.getElementById('federalState').checked = true;

if (!marks) {
    marks = {};
    subjects.forEach(e => {
        marks[e.id] = [[], [], []];
    });
    localStorage.setItem('marks', JSON.stringify(marks));
}

function loadUserData() {
    markTable = generateMarkTable();
}

function generateMarkTable() {
    let temp = [];
    subjects.forEach(e => {
        if (e.sel) {
            let average = marks[e.id];
            if (!bavaria || marks[e.id][0].length == 0) {
                average.push(marks[e.id][0]);
                average = average[0].concat(average[1], average[2], average[3]);
                average = average.reduce((a, c) => a + c, 0) / average.length;
            }
            else {
                average = ((average[0].reduce((a, c) => a + c, 0) / average[0].length) * 2 + (average[1].concat(average[2]).reduce((a, c) => a + c, 0) / (average[1].length + average[2].length))) / 3;
            }
            average = Math.round(average * 100) / 100;
            if (isNaN(average)) average = 0;
            temp.push([e.name, e.id, marks[e.id][0], marks[e.id][1], marks[e.id][2], average, Math.round(average)]);
        }
    });
    return temp;
}


function generateHTMLTable() {
    let tableId = document.querySelector('.mark-table');
    tableId.innerHTML = '';
    tableId.innerHTML += '<tr><th>Fach</th><th>Schulaufgeben / Tests</th><th>schriftliche Noten (Exen...)</th><th>m&uuml;ndliche Noten</th><th>Schnitt</th><th>Endnote</th></tr>';
    markTable.forEach(e => {
        tableId.innerHTML += `<tr><td>${e[0]}<button class="btn add" onclick="resetMarksWindow('${e[1]}', '${e[0]}')">-</button></td><td>${e[2]}<button class="btn add" onclick="addMark('${e[1]}', 1)">+</button></td><td>${e[3]}<button class="btn add" onclick="addMark('${e[1]}', 2)">+</button></td><td>${e[4]}<button class="btn add" onclick="addMark('${e[1]}', 3)">+</button></td><td>${e[5]}</td><td>${e[6]}</td></tr>`;
    });
}

function addMark(id, col) {
    if (!id || !col) alert("Du musst etwas eingeben");
    else {
        let inputMark = parseInt(prompt('Gebe die hinzuzufügende Note ein: '));
        if (!inputMark) alert("Du musst etwas eingeben");
        else if (inputMark < 1 || inputMark > 6 || inputMark == NaN) {
            alert("Die Note muss sich zwischen 1 und 6 befinden und eine Zahl sein!");
        }
        else {
            marks[id][col - 1].push(inputMark);
            localStorage.setItem('marks', JSON.stringify(marks));
            markTable = generateMarkTable();
            generateHTMLTable();
        }
    }
}

function resetMarksWindow(id, name) {
    let window = document.getElementById('deleteWindow');
    window.innerHTML = `<div><h3>Noten des Fachs ${name} zum L&ouml;schen</h3><span onclick="resetMarks('${id}', 1)">L&ouml;sche SAs / Test</span><span onclick="resetMarks('${id}', 2)">L&ouml;sche scriftl. Noten</span><span onclick="resetMarks('${id}', 3)">L&ouml;sche m&uuml;ndl. Noten</span></div>`;
    window.style.display = 'flex';
}

function resetMarks(id, col) {
    marks[id][col - 1] = [];
    localStorage.setItem('marks', JSON.stringify(marks));
    markTable = generateMarkTable();
    generateHTMLTable();
}

function changeState() {
    let input = document.getElementById('federalState');
    if (input.checked) {
        bavaria = true;
        localStorage.setItem('bavaria', JSON.stringify(true));
    }
    else {
        bavaria = false;
        localStorage.setItem('bavaria', JSON.stringify(false));
    }
    markTable = generateMarkTable();
    generateHTMLTable();
}

loadUserData();
generateHTMLTable();