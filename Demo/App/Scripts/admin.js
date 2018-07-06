//CONSTANTS
var ADMIN_USERNAME = "admin";
var ADMIN_PASSWORD = "admin";


//changes dom storage for current Room
function changeRoomAdmin(ID) {
    //confirm("Are you sure this is the correct room?");
    localStorage.setItem("SlotMachineRoom", ID);
    window.location.href = "index.html";
}
//asks admin credentials
function promptAdmin() {
    var uname = document.getElementById('uname').value;
    var psw = document.getElementById('psw').value;
 
    if (uname == ADMIN_USERNAME) {
        if (psw == ADMIN_PASSWORD) {
            window.location.href = "admin.html"
        } else {
            alert("Password Incorrect");
        }
    } else {
        alert("Username Incorrect");
    }
}
