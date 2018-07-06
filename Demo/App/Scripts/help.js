//changes dom storage to new Room ID and gets new object
function changeRoom(name) {
    console.log("change");
    localStorage.setItem("SlotMachineRoom", name);
    return getObject();

}
function getObject()
{
    console.log("got access");
    return getaccessToken();
}