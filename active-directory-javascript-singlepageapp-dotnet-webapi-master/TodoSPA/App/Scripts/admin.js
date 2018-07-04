//CONSTANTS
var ADMIN_USERNAME = "admin";
var ADMIN_PASSWORD = "admin";




function changeRoomAdmin(ID) {
    confirm("Are you sure this is the correct room?");
    localStorage.setItem("SlotMachineRoom", ID);
    window.location.href = "index.html";
}


function promptAdmin() {
    var uname = document.getElementById('uname').value;
    var psw = document.getElementById('psw').value;

    if (uname == ADMIN_USERNAME) {
        if (psw == ADMIN_PASSWORD) {
            window.location.href = "admin.html"
        } else {
            prompt("Password Incorrect");
        }
    } else {
        prompt("Username Incorrect");
    }
}
