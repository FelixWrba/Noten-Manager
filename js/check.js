function checkUserData() {
    let subjects = JSON.parse(localStorage.getItem('subjects'));
    let index;
    if(window.location.pathname == '/' || window.location.pathname == '/index.html') index = true;
    else index = false;
    if (!subjects && !index) {
        window.location.href = "/";
    }
    else if(index && subjects) {
        window.location.href = "/manager";
    }
}

checkUserData();