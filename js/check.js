// checks the user data
function checkUserData() {
    // gets the subjects from localStorage => if defined: true, if undefined: false
    let subjects = JSON.parse(localStorage.getItem('subjects'));
    // sets the variable index (represents: if current page = <url>/index.html)
    let index;
    // checks if (page = <url>/index.html): index = true, else: index = false
    if(window.location.pathname == '/' || window.location.pathname == '/index.html') index = true;
    else index = false;
    // if subjects = undefined and not index: open page /index.html, else if both: open page /manager/
    if (!subjects && !index) window.location.href = "/";
    else if(index && subjects) window.location.href = "/manager";
}

// calls the function checkUserData()
checkUserData();