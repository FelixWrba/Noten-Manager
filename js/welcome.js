// defines the class Subject()
class Subject {
    id;
    name;
    sel = false;
    constructor(name, id = name) {
        this.name = name;
        this.id = id;
    }
}

// makes sure that the top of the page is shown
document.getElementById('top').scrollIntoView({ 'behavior': 'smooth' });

// get #main
let main = document.querySelector('main');
// creates all the subjects that are needed for the manager
let subjects = [
    new Subject("Mathe", "maths"),
    new Subject("Englisch", "english"),
    new Subject("Französisch", "french"),
    new Subject("Latein", "latin"),
    new Subject("Altgriechisch", "greece"),
    new Subject("Spanisch", "spain"),
    new Subject("Mathe", "maths"),
    new Subject("Informatik", "informathic"),
    new Subject("Naturwissenschaften", "natur"),
    new Subject("Technik", "tech"),
    new Subject("Musik", "music"),
    new Subject("Kunst", "art"),
    new Subject("Etik / Religion", "religion"),
    new Subject("Sport", "pe")
];

// shows the subject selection after the "Jetzt loslegen" button is clicked
function showMain() {
    main.style.opacity = '1';
    main.scrollIntoView({ 'behavior': 'smooth' });
}

// adds a custom subject to the HTML list and to the subjects array
function addSubject(subjectAddName = undefined) {
    // check if subjectAddName is undefined/empty => if undefined empty cancel adding
    if (!subjectAddName || subjectAddName == '') {
        alert('Du must ein Fach eingeben!');
        return;
    }
    // cancel adding if condition true
    if (
        // loop through subjects to check if subjectAddName in list
        subjects.forEach(e => {
            // if in list return true => cancels adding
            if (e.id == subjectAddName) {
                alert(`Das Fach ${subjectAddName} wurde bereites hinzugefügt!`);
                return true;
            }
            // else continue with adding process
            else return false;
        })
    ) return;
    document.getElementById('addedSubjects').innerHTML += `
    <span>
        <label for="${subjectAddName}">${subjectAddName}: </label>
        <input type="checkbox" id="${subjectAddName}" checked>
    </span>
    `;
    subjects.push(new Subject(subjectAddName));
}

function createTimeTable() {
    subjects.forEach(e => {
        e.sel = document.getElementById(e.id).checked;
    });
    localStorage.setItem("subjects", JSON.stringify(subjects));
    window.location.href = '/manager/';
}