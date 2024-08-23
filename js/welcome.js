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
    // cancel default: false (undefined)
    let cancel;
    // loop through subjects to check if subjectAddName in list
    subjects.forEach(e => {
        // if in list => cancel = true
        if (e.id == subjectAddName) {
            alert(`Das Fach ${subjectAddName} wurde bereites hinzugefügt!`);
            cancel = true;
        }
        // else => cancel = false (undefined)
    })
    // cancels if cancel = true
    if(cancel) return;
    // adds Subject() to HTML using f-string
    document.getElementById('addedSubjects').innerHTML += `
    <span>
        <label for="${subjectAddName}">${subjectAddName}: </label>
        <input type="checkbox" id="${subjectAddName}" checked>
    </span>
    `;
    // adds new Subject() to array subjects
    subjects.push(new Subject(subjectAddName));
}

// "Erstelle meinen Stundenplan" btn onclick => creates the timetable
function createTimeTable() {
    //  loops through subjects and selected = true => if in the document checkbox checked = true;
    subjects.forEach(e => {
        e.sel = document.getElementById(e.id).checked;
    });
    // converts subjects to string and save it in the localStorage with the key: subjects
    localStorage.setItem("subjects", JSON.stringify(subjects));
    // opens the page "<url>/manager/index.html"
    window.location.href = '/manager/';
}