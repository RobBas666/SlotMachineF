function checkInit() {
    //localStorage.removeItem("SlotMachineRoom");
    var currentRoom = localStorage.getItem("SlotMachineRoom");
    console.log(currentRoom);
    if (currentRoom == null) {
        window.location.href="admin.html"
    }
    var currentURL = window.location.href;
    var arrhash = currentURL.split("#");
    var arrAmp;
   // console.log("INIT");
    var accessToken;

    if (arrhash.length > 1) {
        var arrtemp = arrhash[1];
        arrAmp = arrtemp.split("&");
        console.log("got access");
        accessToken = arrAmp[0];
        accessToken = accessToken.replace("access_token=", "");
        var obj = API(accessToken);
        //console.log("INIT OBJ: " + obj);
        return obj;
    } else {
        Authorize();
    }
}