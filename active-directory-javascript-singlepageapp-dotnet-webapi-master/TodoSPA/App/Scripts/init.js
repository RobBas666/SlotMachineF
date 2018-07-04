function checkInit() {
    var currentRoom = localStorage.getItem("SlotMachineRoom");
    console.log(currentRoom);
    if (currentRoom == null) {
        window.location.href="admin.html"
    }
    var currentURL = window.location.href;
    var arrhash = currentURL.split("#");
    var arrAmp;
    var accessToken;

    if (arrhash.length > 1) {
        var arrtemp = arrhash[1];
        arrAmp = arrtemp.split("&");
        console.log("got access");
        accessToken = arrAmp[0];
        accessToken = accessToken.replace("access_token=", "");
        var obj = API(accessToken);
<<<<<<< HEAD
        populateTable(obj);
=======
        //console.log("INIT OBJ: " + obj);
        return obj;
>>>>>>> 588f6e450711e8c6edd04fae1c35d7b2379d8b0e
    } else {
        Authorize();
    }
}