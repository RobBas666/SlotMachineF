function changeRoomAdmin(ID) {
    confirm("Are you sure you want to change room ?");
    localStorage.setItem("SlotMachineRoom", ID);
    window.location.href = "index.html";
}