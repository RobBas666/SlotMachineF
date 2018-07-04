function changeRoomAdmin(ID) {
    confirm("Are you sure this is the correct room?");
    localStorage.setItem("SlotMachineRoom", ID);
    window.location.href = "index.html";
}