let main = document.querySelector('main');
let subjects = [{ "id": "german", "name": "Deutsch", "sel": false }, { "id": "english", "name": "Englisch", "sel": false }, { "id": "french", "name": "Franz&ouml;sisch", "sel": false }, { "id": "latin", "name": "Latein", "sel": false }, { "id": "greece", "name": "Altgriechisch", "sel": false }, { "id": "spain", "name": "Spanisch", "sel": false }, { "id": "maths", "name": "Mathe", "sel": false }, { "id": "informathic", "name": "Informatik", "sel": false }, { "id": "natur", "name": "Naturwissenschaften", "sel": false }, { "id": "tech", "name": "Technik", "sel": false }, { "id": "music", "name": "Musik", "sel": false }, { "id": "art", "name": "Kunst", "sel": false }, { "id": "religion", "name": "Etik / Religion", "sel": false }, { "id": "pe", "name": "Sport", "sel": false }];

document.getElementById('top').scrollIntoView({ 'behavior': 'smooth'});

function showMain() {
    main.style.opacity = '1';
    main.scrollIntoView({ 'behavior': 'smooth' });
}

function addSubject(subjectAddName = undefined) {
    if (!subjectAddName && subjectAddName == '') {
        alert('Du must ein Fach eingeben!');
        return;
    }
    subjects.forEach(e => {
        if (e.id == subjectAddName) {
            alert(`Das Fach ${subjectAddName} wurde bereites hinzugefügt!`);
            return;
        }
    });
    document.getElementById('addedSubjects').innerHTML += `
    <span>
        <label for="${subjectAddName}">${subjectAddName}: </label>
        <input type="checkbox" id="${subjectAddName}" checked>
    </span>
    `;
    subjects.push({
        "id": subjectAddName,
        "name": subjectAddName,
        "sel": true
    });
}

function createTimeTable() {
    subjects.forEach(e => {
        e.sel = document.getElementById(e.id).checked;
    });
    localStorage.setItem("subjects", JSON.stringify(subjects));
    window.location.href = '/manager/';
}