
function refresh() {
    console.log("HERE");
    var timer = setInterval("checkInit()", 30000);
}
//on HTML load To check if the dom storage has been set, if not go to admin.html
function checkInit() {
    var currentRoom = localStorage.getItem("SlotMachineRoom");
    if (currentRoom == null) {
        window.location.href = "admin.html"
    }
    var currentURL = window.location.href;
    var arrhash = currentURL.split("#");
    var arrAmp;
    var accessToken;

    if (arrhash.length > 1) {
        var arrtemp = arrhash[1];
        arrAmp = arrtemp.split("&");
        accessToken = arrAmp[0];
        accessToken = accessToken.replace("access_token=", "");
        var obj = API(accessToken);
        var err = obj.substring(2, 6);

        if (err == "error") {
            Authorize();
        }
        else {
            populateTable(obj);
        }
    } else {
        Authorize();
    }
}