var currentDate;

function getDate() {
    var today = new Date();
    var day = today.getDate();
    var m = today.getMonth();
    var year = today.getFullYear();
    var month;

    if (day.toString().length == 1) {
        m++;
        if (m.toString().length == 1)
            currentDate = year + "-0" + m + "-0" + day;
        else
            currentDate = year + "-" + m + "-0" + day;
    }
    else {
        m++;
        if (m.toString().length == 1)
            currentDate = year + "-0" + m + "-" + day;
        else
            currentDate = year + "-" + m + "-" + day;
    }

    m--;

    switch (m) {
        case 0: month = "January";
            break;
        case 1: month = "February";
            break;
        case 2: month = "March";
            break;
        case 3: month = "April";
            break;
        case 4: month = "May";
            break;
        case 5: month = "June";
            break;
        case 6: month = "July";
            break;
        case 7: month = "August";
            break;
        case 8: month = "September";
            break;
        case 9: month = "October";
            break;
        case 10: month = "November";
            break;
        case 11: month = "December";
            break;
        default: month = "Error";
            break;
    }

    document.getElementById("date").innerHTML = day + " " + month + " " + year;
}

var information = new Array();

function populateTable(code) {
    getDate();
    var values = JSON.parse(code);
    var value = values.value;
    var count = 0;

    modal = document.getElementById('moreInfo');
    span = document.getElementsByClassName("close")[0];
	var room = value[0].location.displayName;
    for (var i = 0; i < value.length; i++) {
        
        document.getElementById("room").innerHTML = room;

        var subject = value[i].subject;
        var start = value[i].start;
        var end = value[i].end;
        var location = room;
        var organizer = value[i].organizer;

        var startDateTime = start.dateTime;
        var endDateTime = end.dateTime;

        var startDate = startDateTime.substring(0, 10);
        var startTime = startDateTime.substring(11, 16);

        if (startDate == currentDate) {
            var endDate = endDateTime.substring(0, 10);
            var endTime = endDateTime.substring(11, 16);

            var startHour = startTime.substring(0, 2);
            var endHour = endTime.substring(0, 2);

            var startMinute = startTime.substring(3, 5);
            var endMinute = endTime.substring(3, 5);

            var array = new Array();
            array[0] = subject;
            array[1] = currentDate;
            array[2] = organizer;
            array[3] = location;
           // array[4] = startTime;
			array[4] = startHour+":"+startMinute;
            //array[5] = endTime;
			array[5] = endHour+":"+endMinute;

            information[count] = array;

            if (startHour == endHour) {  //IF IT IS WITHIN THE SAME HOUR
                if (startMinute == "00") {
                    if (endMinute == "05") {
                        document.getElementById(startHour + "1").style.backgroundColor = "red";

                        document.getElementById(startHour + "1").innerHTML = count;
                        document.getElementById(startHour + "1").style.color = "red";
                    }
                    else if (endMinute == "10") {
                        document.getElementById(startHour + "1").style.backgroundColor = "red";
                        document.getElementById(startHour + "2").style.backgroundColor = "red";

                        document.getElementById(startHour + "1").innerHTML = count;
                        document.getElementById(startHour + "1").style.color = "red";
                        document.getElementById(startHour + "2").innerHTML = count;
                        document.getElementById(startHour + "2").style.color = "red";
                    }
                    else if (endMinute == "15") {
                        document.getElementById(startHour + "1").style.backgroundColor = "red";
                        document.getElementById(startHour + "2").style.backgroundColor = "red";
                        document.getElementById(startHour + "3").style.backgroundColor = "red";

                        document.getElementById(startHour + "1").innerHTML = count;
                        document.getElementById(startHour + "1").style.color = "red";
                        document.getElementById(startHour + "2").innerHTML = count;
                        document.getElementById(startHour + "2").style.color = "red";
                        document.getElementById(startHour + "3").innerHTML = count;
                        document.getElementById(startHour + "3").style.color = "red";
                    }
                    else if (endMinute == "20") {
                        document.getElementById(startHour + "1").style.backgroundColor = "red";
                        document.getElementById(startHour + "2").style.backgroundColor = "red";
                        document.getElementById(startHour + "3").style.backgroundColor = "red";
                        document.getElementById(startHour + "4").style.backgroundColor = "red";

                        document.getElementById(startHour + "1").innerHTML = count;
                        document.getElementById(startHour + "1").style.color = "red";
                        document.getElementById(startHour + "2").innerHTML = count;
                        document.getElementById(startHour + "2").style.color = "red";
                        document.getElementById(startHour + "3").innerHTML = count;
                        document.getElementById(startHour + "3").style.color = "red";
                        document.getElementById(startHour + "4").innerHTML = count;
                        document.getElementById(startHour + "4").style.color = "red";
                    }
                    else if (endMinute == "25") {
                        document.getElementById(startHour + "1").style.backgroundColor = "red";
                        document.getElementById(startHour + "2").style.backgroundColor = "red";
                        document.getElementById(startHour + "3").style.backgroundColor = "red";
                        document.getElementById(startHour + "4").style.backgroundColor = "red";
                        document.getElementById(startHour + "5").style.backgroundColor = "red";

                        document.getElementById(startHour + "1").innerHTML = count;
                        document.getElementById(startHour + "1").style.color = "red";
                        document.getElementById(startHour + "2").innerHTML = count;
                        document.getElementById(startHour + "2").style.color = "red";
                        document.getElementById(startHour + "3").innerHTML = count;
                        document.getElementById(startHour + "3").style.color = "red";
                        document.getElementById(startHour + "4").innerHTML = count;
                        document.getElementById(startHour + "4").style.color = "red";
                        document.getElementById(startHour + "5").innerHTML = count;
                        document.getElementById(startHour + "5").style.color = "red";
                    }
                    else if (endMinute == "30") {
                        document.getElementById(startHour + "1").style.backgroundColor = "red";
                        document.getElementById(startHour + "2").style.backgroundColor = "red";
                        document.getElementById(startHour + "3").style.backgroundColor = "red";
                        document.getElementById(startHour + "4").style.backgroundColor = "red";
                        document.getElementById(startHour + "5").style.backgroundColor = "red";
                        document.getElementById(startHour + "6").style.backgroundColor = "red";

                        document.getElementById(startHour + "1").innerHTML = count;
                        document.getElementById(startHour + "1").style.color = "red";
                        document.getElementById(startHour + "2").innerHTML = count;
                        document.getElementById(startHour + "2").style.color = "red";
                        document.getElementById(startHour + "3").innerHTML = count;
                        document.getElementById(startHour + "3").style.color = "red";
                        document.getElementById(startHour + "4").innerHTML = count;
                        document.getElementById(startHour + "4").style.color = "red";
                        document.getElementById(startHour + "5").innerHTML = count;
                        document.getElementById(startHour + "5").style.color = "red";
                        document.getElementById(startHour + "6").innerHTML = count;
                        document.getElementById(startHour + "6").style.color = "red";
                    }
                    else if (endMinute == "35") {
                        document.getElementById(startHour + "1").style.backgroundColor = "red";
                        document.getElementById(startHour + "2").style.backgroundColor = "red";
                        document.getElementById(startHour + "3").style.backgroundColor = "red";
                        document.getElementById(startHour + "4").style.backgroundColor = "red";
                        document.getElementById(startHour + "5").style.backgroundColor = "red";
                        document.getElementById(startHour + "6").style.backgroundColor = "red";
                        document.getElementById(startHour + "7").style.backgroundColor = "red";

                        document.getElementById(startHour + "1").innerHTML = count;
                        document.getElementById(startHour + "1").style.color = "red";
                        document.getElementById(startHour + "2").innerHTML = count;
                        document.getElementById(startHour + "2").style.color = "red";
                        document.getElementById(startHour + "3").innerHTML = count;
                        document.getElementById(startHour + "3").style.color = "red";
                        document.getElementById(startHour + "4").innerHTML = count;
                        document.getElementById(startHour + "4").style.color = "red";
                        document.getElementById(startHour + "5").innerHTML = count;
                        document.getElementById(startHour + "5").style.color = "red";
                        document.getElementById(startHour + "6").innerHTML = count;
                        document.getElementById(startHour + "6").style.color = "red";
                        document.getElementById(startHour + "7").innerHTML = count;
                        document.getElementById(startHour + "7").style.color = "red";
                    }
                    else if (endMinute == "40") {
                        document.getElementById(startHour + "1").style.backgroundColor = "red";
                        document.getElementById(startHour + "2").style.backgroundColor = "red";
                        document.getElementById(startHour + "3").style.backgroundColor = "red";
                        document.getElementById(startHour + "4").style.backgroundColor = "red";
                        document.getElementById(startHour + "5").style.backgroundColor = "red";
                        document.getElementById(startHour + "6").style.backgroundColor = "red";
                        document.getElementById(startHour + "7").style.backgroundColor = "red";
                        document.getElementById(startHour + "8").style.backgroundColor = "red";

                        document.getElementById(startHour + "1").innerHTML = count;
                        document.getElementById(startHour + "1").style.color = "red";
                        document.getElementById(startHour + "2").innerHTML = count;
                        document.getElementById(startHour + "2").style.color = "red";
                        document.getElementById(startHour + "3").innerHTML = count;
                        document.getElementById(startHour + "3").style.color = "red";
                        document.getElementById(startHour + "4").innerHTML = count;
                        document.getElementById(startHour + "4").style.color = "red";
                        document.getElementById(startHour + "5").innerHTML = count;
                        document.getElementById(startHour + "5").style.color = "red";
                        document.getElementById(startHour + "6").innerHTML = count;
                        document.getElementById(startHour + "6").style.color = "red";
                        document.getElementById(startHour + "7").innerHTML = count;
                        document.getElementById(startHour + "7").style.color = "red";
                        document.getElementById(startHour + "8").innerHTML = count;
                        document.getElementById(startHour + "8").style.color = "red";
                    }
                    else if (endMinute == "45") {
                        document.getElementById(startHour + "1").style.backgroundColor = "red";
                        document.getElementById(startHour + "2").style.backgroundColor = "red";
                        document.getElementById(startHour + "3").style.backgroundColor = "red";
                        document.getElementById(startHour + "4").style.backgroundColor = "red";
                        document.getElementById(startHour + "5").style.backgroundColor = "red";
                        document.getElementById(startHour + "6").style.backgroundColor = "red";
                        document.getElementById(startHour + "7").style.backgroundColor = "red";
                        document.getElementById(startHour + "8").style.backgroundColor = "red";
                        document.getElementById(startHour + "9").style.backgroundColor = "red";

                        document.getElementById(startHour + "1").innerHTML = count;
                        document.getElementById(startHour + "1").style.color = "red";
                        document.getElementById(startHour + "2").innerHTML = count;
                        document.getElementById(startHour + "2").style.color = "red";
                        document.getElementById(startHour + "3").innerHTML = count;
                        document.getElementById(startHour + "3").style.color = "red";
                        document.getElementById(startHour + "4").innerHTML = count;
                        document.getElementById(startHour + "4").style.color = "red";
                        document.getElementById(startHour + "5").innerHTML = count;
                        document.getElementById(startHour + "5").style.color = "red";
                        document.getElementById(startHour + "6").innerHTML = count;
                        document.getElementById(startHour + "6").style.color = "red";
                        document.getElementById(startHour + "7").innerHTML = count;
                        document.getElementById(startHour + "7").style.color = "red";
                        document.getElementById(startHour + "8").innerHTML = count;
                        document.getElementById(startHour + "8").style.color = "red";
                        document.getElementById(startHour + "9").innerHTML = count;
                        document.getElementById(startHour + "9").style.color = "red";
                    }
                    else if (endMinute == "50") {
                        document.getElementById(startHour + "1").style.backgroundColor = "red";
                        document.getElementById(startHour + "2").style.backgroundColor = "red";
                        document.getElementById(startHour + "3").style.backgroundColor = "red";
                        document.getElementById(startHour + "4").style.backgroundColor = "red";
                        document.getElementById(startHour + "5").style.backgroundColor = "red";
                        document.getElementById(startHour + "6").style.backgroundColor = "red";
                        document.getElementById(startHour + "7").style.backgroundColor = "red";
                        document.getElementById(startHour + "8").style.backgroundColor = "red";
                        document.getElementById(startHour + "9").style.backgroundColor = "red";
                        document.getElementById(startHour + "10").style.backgroundColor = "red";

                        document.getElementById(startHour + "1").innerHTML = count;
                        document.getElementById(startHour + "1").style.color = "red";
                        document.getElementById(startHour + "2").innerHTML = count;
                        document.getElementById(startHour + "2").style.color = "red";
                        document.getElementById(startHour + "3").innerHTML = count;
                        document.getElementById(startHour + "3").style.color = "red";
                        document.getElementById(startHour + "4").innerHTML = count;
                        document.getElementById(startHour + "4").style.color = "red";
                        document.getElementById(startHour + "5").innerHTML = count;
                        document.getElementById(startHour + "5").style.color = "red";
                        document.getElementById(startHour + "6").innerHTML = count;
                        document.getElementById(startHour + "6").style.color = "red";
                        document.getElementById(startHour + "7").innerHTML = count;
                        document.getElementById(startHour + "7").style.color = "red";
                        document.getElementById(startHour + "8").innerHTML = count;
                        document.getElementById(startHour + "8").style.color = "red";
                        document.getElementById(startHour + "9").innerHTML = count;
                        document.getElementById(startHour + "9").style.color = "red";
                        document.getElementById(startHour + "10").innerHTML = count;
                        document.getElementById(startHour + "10").style.color = "red";
                    }
                    else if (endMinute == "55") {
                        document.getElementById(startHour + "1").style.backgroundColor = "red";
                        document.getElementById(startHour + "2").style.backgroundColor = "red";
                        document.getElementById(startHour + "3").style.backgroundColor = "red";
                        document.getElementById(startHour + "4").style.backgroundColor = "red";
                        document.getElementById(startHour + "5").style.backgroundColor = "red";
                        document.getElementById(startHour + "6").style.backgroundColor = "red";
                        document.getElementById(startHour + "7").style.backgroundColor = "red";
                        document.getElementById(startHour + "8").style.backgroundColor = "red";
                        document.getElementById(startHour + "9").style.backgroundColor = "red";
                        document.getElementById(startHour + "10").style.backgroundColor = "red";
                        document.getElementById(startHour + "11").style.backgroundColor = "red";

                        document.getElementById(startHour + "1").innerHTML = count;
                        document.getElementById(startHour + "1").style.color = "red";
                        document.getElementById(startHour + "2").innerHTML = count;
                        document.getElementById(startHour + "2").style.color = "red";
                        document.getElementById(startHour + "3").innerHTML = count;
                        document.getElementById(startHour + "3").style.color = "red";
                        document.getElementById(startHour + "4").innerHTML = count;
                        document.getElementById(startHour + "4").style.color = "red";
                        document.getElementById(startHour + "5").innerHTML = count;
                        document.getElementById(startHour + "5").style.color = "red";
                        document.getElementById(startHour + "6").innerHTML = count;
                        document.getElementById(startHour + "6").style.color = "red";
                        document.getElementById(startHour + "7").innerHTML = count;
                        document.getElementById(startHour + "7").style.color = "red";
                        document.getElementById(startHour + "8").innerHTML = count;
                        document.getElementById(startHour + "8").style.color = "red";
                        document.getElementById(startHour + "9").innerHTML = count;
                        document.getElementById(startHour + "9").style.color = "red";
                        document.getElementById(startHour + "10").innerHTML = count;
                        document.getElementById(startHour + "10").style.color = "red";
                        document.getElementById(startHour + "11").innerHTML = count;
                        document.getElementById(startHour + "11").style.color = "red";
                    }
                }
                else if (startMinute == "05") {
                    if (endMinute == "10") {
                        document.getElementById(startHour + "2").style.backgroundColor = "red";

                        document.getElementById(startHour + "2").innerHTML = count;
                        document.getElementById(startHour + "2").style.color = "red";
                    }
                    else if (endMinute == "15") {
                        document.getElementById(startHour + "2").style.backgroundColor = "red";
                        document.getElementById(startHour + "3").style.backgroundColor = "red";

                        document.getElementById(startHour + "2").innerHTML = count;
                        document.getElementById(startHour + "2").style.color = "red";
                        document.getElementById(startHour + "3").innerHTML = count;
                        document.getElementById(startHour + "3").style.color = "red";
                    }
                    else if (endMinute == "20") {
                        document.getElementById(startHour + "2").style.backgroundColor = "red";
                        document.getElementById(startHour + "3").style.backgroundColor = "red";
                        document.getElementById(startHour + "4").style.backgroundColor = "red";

                        document.getElementById(startHour + "2").innerHTML = count;
                        document.getElementById(startHour + "2").style.color = "red";
                        document.getElementById(startHour + "3").innerHTML = count;
                        document.getElementById(startHour + "3").style.color = "red";
                        document.getElementById(startHour + "4").innerHTML = count;
                        document.getElementById(startHour + "4").style.color = "red";
                    }
                    else if (endMinute == "25") {
                        document.getElementById(startHour + "2").style.backgroundColor = "red";
                        document.getElementById(startHour + "3").style.backgroundColor = "red";
                        document.getElementById(startHour + "4").style.backgroundColor = "red";
                        document.getElementById(startHour + "5").style.backgroundColor = "red";

                        document.getElementById(startHour + "2").innerHTML = count;
                        document.getElementById(startHour + "2").style.color = "red";
                        document.getElementById(startHour + "3").innerHTML = count;
                        document.getElementById(startHour + "3").style.color = "red";
                        document.getElementById(startHour + "4").innerHTML = count;
                        document.getElementById(startHour + "4").style.color = "red";
                        document.getElementById(startHour + "5").innerHTML = count;
                        document.getElementById(startHour + "5").style.color = "red";
                    }
                    else if (endMinute == "30") {
                        document.getElementById(startHour + "2").style.backgroundColor = "red";
                        document.getElementById(startHour + "3").style.backgroundColor = "red";
                        document.getElementById(startHour + "4").style.backgroundColor = "red";
                        document.getElementById(startHour + "5").style.backgroundColor = "red";
                        document.getElementById(startHour + "6").style.backgroundColor = "red";

                        document.getElementById(startHour + "2").innerHTML = count;
                        document.getElementById(startHour + "2").style.color = "red";
                        document.getElementById(startHour + "3").innerHTML = count;
                        document.getElementById(startHour + "3").style.color = "red";
                        document.getElementById(startHour + "4").innerHTML = count;
                        document.getElementById(startHour + "4").style.color = "red";
                        document.getElementById(startHour + "5").innerHTML = count;
                        document.getElementById(startHour + "5").style.color = "red";
                        document.getElementById(startHour + "6").innerHTML = count;
                        document.getElementById(startHour + "6").style.color = "red";
                    }
                    else if (endMinute == "35") {
                        document.getElementById(startHour + "2").style.backgroundColor = "red";
                        document.getElementById(startHour + "3").style.backgroundColor = "red";
                        document.getElementById(startHour + "4").style.backgroundColor = "red";
                        document.getElementById(startHour + "5").style.backgroundColor = "red";
                        document.getElementById(startHour + "6").style.backgroundColor = "red";
                        document.getElementById(startHour + "7").style.backgroundColor = "red";

                        document.getElementById(startHour + "2").innerHTML = count;
                        document.getElementById(startHour + "2").style.color = "red";
                        document.getElementById(startHour + "3").innerHTML = count;
                        document.getElementById(startHour + "3").style.color = "red";
                        document.getElementById(startHour + "4").innerHTML = count;
                        document.getElementById(startHour + "4").style.color = "red";
                        document.getElementById(startHour + "5").innerHTML = count;
                        document.getElementById(startHour + "5").style.color = "red";
                        document.getElementById(startHour + "6").innerHTML = count;
                        document.getElementById(startHour + "6").style.color = "red";
                        document.getElementById(startHour + "7").innerHTML = count;
                        document.getElementById(startHour + "7").style.color = "red";
                    }
                    else if (endMinute == "40") {
                        document.getElementById(startHour + "2").style.backgroundColor = "red";
                        document.getElementById(startHour + "3").style.backgroundColor = "red";
                        document.getElementById(startHour + "4").style.backgroundColor = "red";
                        document.getElementById(startHour + "5").style.backgroundColor = "red";
                        document.getElementById(startHour + "6").style.backgroundColor = "red";
                        document.getElementById(startHour + "7").style.backgroundColor = "red";
                        document.getElementById(startHour + "8").style.backgroundColor = "red";

                        document.getElementById(startHour + "2").innerHTML = count;
                        document.getElementById(startHour + "2").style.color = "red";
                        document.getElementById(startHour + "3").innerHTML = count;
                        document.getElementById(startHour + "3").style.color = "red";
                        document.getElementById(startHour + "4").innerHTML = count;
                        document.getElementById(startHour + "4").style.color = "red";
                        document.getElementById(startHour + "5").innerHTML = count;
                        document.getElementById(startHour + "5").style.color = "red";
                        document.getElementById(startHour + "6").innerHTML = count;
                        document.getElementById(startHour + "6").style.color = "red";
                        document.getElementById(startHour + "7").innerHTML = count;
                        document.getElementById(startHour + "7").style.color = "red";
                        document.getElementById(startHour + "8").innerHTML = count;
                        document.getElementById(startHour + "8").style.color = "red";
                    }
                    else if (endMinute == "45") {
                        document.getElementById(startHour + "2").style.backgroundColor = "red";
                        document.getElementById(startHour + "3").style.backgroundColor = "red";
                        document.getElementById(startHour + "4").style.backgroundColor = "red";
                        document.getElementById(startHour + "5").style.backgroundColor = "red";
                        document.getElementById(startHour + "6").style.backgroundColor = "red";
                        document.getElementById(startHour + "7").style.backgroundColor = "red";
                        document.getElementById(startHour + "8").style.backgroundColor = "red";
                        document.getElementById(startHour + "9").style.backgroundColor = "red";

                        document.getElementById(startHour + "2").innerHTML = count;
                        document.getElementById(startHour + "2").style.color = "red";
                        document.getElementById(startHour + "3").innerHTML = count;
                        document.getElementById(startHour + "3").style.color = "red";
                        document.getElementById(startHour + "4").innerHTML = count;
                        document.getElementById(startHour + "4").style.color = "red";
                        document.getElementById(startHour + "5").innerHTML = count;
                        document.getElementById(startHour + "5").style.color = "red";
                        document.getElementById(startHour + "6").innerHTML = count;
                        document.getElementById(startHour + "6").style.color = "red";
                        document.getElementById(startHour + "7").innerHTML = count;
                        document.getElementById(startHour + "7").style.color = "red";
                        document.getElementById(startHour + "8").innerHTML = count;
                        document.getElementById(startHour + "8").style.color = "red";
                        document.getElementById(startHour + "9").innerHTML = count;
                        document.getElementById(startHour + "9").style.color = "red";
                    }
                    else if (endMinute == "50") {
                        document.getElementById(startHour + "2").style.backgroundColor = "red";
                        document.getElementById(startHour + "3").style.backgroundColor = "red";
                        document.getElementById(startHour + "4").style.backgroundColor = "red";
                        document.getElementById(startHour + "5").style.backgroundColor = "red";
                        document.getElementById(startHour + "6").style.backgroundColor = "red";
                        document.getElementById(startHour + "7").style.backgroundColor = "red";
                        document.getElementById(startHour + "8").style.backgroundColor = "red";
                        document.getElementById(startHour + "9").style.backgroundColor = "red";
                        document.getElementById(startHour + "10").style.backgroundColor = "red";

                        document.getElementById(startHour + "2").innerHTML = count;
                        document.getElementById(startHour + "2").style.color = "red";
                        document.getElementById(startHour + "3").innerHTML = count;
                        document.getElementById(startHour + "3").style.color = "red";
                        document.getElementById(startHour + "4").innerHTML = count;
                        document.getElementById(startHour + "4").style.color = "red";
                        document.getElementById(startHour + "5").innerHTML = count;
                        document.getElementById(startHour + "5").style.color = "red";
                        document.getElementById(startHour + "6").innerHTML = count;
                        document.getElementById(startHour + "6").style.color = "red";
                        document.getElementById(startHour + "7").innerHTML = count;
                        document.getElementById(startHour + "7").style.color = "red";
                        document.getElementById(startHour + "8").innerHTML = count;
                        document.getElementById(startHour + "8").style.color = "red";
                        document.getElementById(startHour + "9").innerHTML = count;
                        document.getElementById(startHour + "9").style.color = "red";
                        document.getElementById(startHour + "10").innerHTML = count;
                        document.getElementById(startHour + "10").style.color = "red";
                    }
                    else if (endMinute == "55") {
                        document.getElementById(startHour + "2").style.backgroundColor = "red";
                        document.getElementById(startHour + "3").style.backgroundColor = "red";
                        document.getElementById(startHour + "4").style.backgroundColor = "red";
                        document.getElementById(startHour + "5").style.backgroundColor = "red";
                        document.getElementById(startHour + "6").style.backgroundColor = "red";
                        document.getElementById(startHour + "7").style.backgroundColor = "red";
                        document.getElementById(startHour + "8").style.backgroundColor = "red";
                        document.getElementById(startHour + "9").style.backgroundColor = "red";
                        document.getElementById(startHour + "10").style.backgroundColor = "red";
                        document.getElementById(startHour + "11").style.backgroundColor = "red";

                        document.getElementById(startHour + "2").innerHTML = count;
                        document.getElementById(startHour + "2").style.color = "red";
                        document.getElementById(startHour + "3").innerHTML = count;
                        document.getElementById(startHour + "3").style.color = "red";
                        document.getElementById(startHour + "4").innerHTML = count;
                        document.getElementById(startHour + "4").style.color = "red";
                        document.getElementById(startHour + "5").innerHTML = count;
                        document.getElementById(startHour + "5").style.color = "red";
                        document.getElementById(startHour + "6").innerHTML = count;
                        document.getElementById(startHour + "6").style.color = "red";
                        document.getElementById(startHour + "7").innerHTML = count;
                        document.getElementById(startHour + "7").style.color = "red";
                        document.getElementById(startHour + "8").innerHTML = count;
                        document.getElementById(startHour + "8").style.color = "red";
                        document.getElementById(startHour + "9").innerHTML = count;
                        document.getElementById(startHour + "9").style.color = "red";
                        document.getElementById(startHour + "10").innerHTML = count;
                        document.getElementById(startHour + "10").style.color = "red";
                        document.getElementById(startHour + "11").innerHTML = count;
                        document.getElementById(startHour + "11").style.color = "red";
                    }
                }
                else if (startMinute == "10") {
                    if (endMinute == "15") {
                        document.getElementById(startHour + "3").style.backgroundColor = "red";

                        document.getElementById(startHour + "3").innerHTML = count;
                        document.getElementById(startHour + "3").style.color = "red";
                    }
                    else if (endMinute == "20") {
                        document.getElementById(startHour + "3").style.backgroundColor = "red";
                        document.getElementById(startHour + "4").style.backgroundColor = "red";

                        document.getElementById(startHour + "3").innerHTML = count;
                        document.getElementById(startHour + "3").style.color = "red";
                        document.getElementById(startHour + "4").innerHTML = count;
                        document.getElementById(startHour + "4").style.color = "red";
                    }
                    else if (endMinute == "25") {
                        document.getElementById(startHour + "3").style.backgroundColor = "red";
                        document.getElementById(startHour + "4").style.backgroundColor = "red";
                        document.getElementById(startHour + "5").style.backgroundColor = "red";

                        document.getElementById(startHour + "3").innerHTML = count;
                        document.getElementById(startHour + "3").style.color = "red";
                        document.getElementById(startHour + "4").innerHTML = count;
                        document.getElementById(startHour + "4").style.color = "red";
                        document.getElementById(startHour + "5").innerHTML = count;
                        document.getElementById(startHour + "5").style.color = "red";
                    }
                    else if (endMinute == "30") {
                        document.getElementById(startHour + "3").style.backgroundColor = "red";
                        document.getElementById(startHour + "4").style.backgroundColor = "red";
                        document.getElementById(startHour + "5").style.backgroundColor = "red";
                        document.getElementById(startHour + "6").style.backgroundColor = "red";

                        document.getElementById(startHour + "3").innerHTML = count;
                        document.getElementById(startHour + "3").style.color = "red";
                        document.getElementById(startHour + "4").innerHTML = count;
                        document.getElementById(startHour + "4").style.color = "red";
                        document.getElementById(startHour + "5").innerHTML = count;
                        document.getElementById(startHour + "5").style.color = "red";
                        document.getElementById(startHour + "6").innerHTML = count;
                        document.getElementById(startHour + "6").style.color = "red";
                    }
                    else if (endMinute == "35") {
                        document.getElementById(startHour + "3").style.backgroundColor = "red";
                        document.getElementById(startHour + "4").style.backgroundColor = "red";
                        document.getElementById(startHour + "5").style.backgroundColor = "red";
                        document.getElementById(startHour + "6").style.backgroundColor = "red";
                        document.getElementById(startHour + "7").style.backgroundColor = "red";

                        document.getElementById(startHour + "3").innerHTML = count;
                        document.getElementById(startHour + "3").style.color = "red";
                        document.getElementById(startHour + "4").innerHTML = count;
                        document.getElementById(startHour + "4").style.color = "red";
                        document.getElementById(startHour + "5").innerHTML = count;
                        document.getElementById(startHour + "5").style.color = "red";
                        document.getElementById(startHour + "6").innerHTML = count;
                        document.getElementById(startHour + "6").style.color = "red";
                        document.getElementById(startHour + "7").innerHTML = count;
                        document.getElementById(startHour + "7").style.color = "red";
                    }
                    else if (endMinute == "40") {
                        document.getElementById(startHour + "3").style.backgroundColor = "red";
                        document.getElementById(startHour + "4").style.backgroundColor = "red";
                        document.getElementById(startHour + "5").style.backgroundColor = "red";
                        document.getElementById(startHour + "6").style.backgroundColor = "red";
                        document.getElementById(startHour + "7").style.backgroundColor = "red";
                        document.getElementById(startHour + "8").style.backgroundColor = "red";

                        document.getElementById(startHour + "3").innerHTML = count;
                        document.getElementById(startHour + "3").style.color = "red";
                        document.getElementById(startHour + "4").innerHTML = count;
                        document.getElementById(startHour + "4").style.color = "red";
                        document.getElementById(startHour + "5").innerHTML = count;
                        document.getElementById(startHour + "5").style.color = "red";
                        document.getElementById(startHour + "6").innerHTML = count;
                        document.getElementById(startHour + "6").style.color = "red";
                        document.getElementById(startHour + "7").innerHTML = count;
                        document.getElementById(startHour + "7").style.color = "red";
                        document.getElementById(startHour + "8").innerHTML = count;
                        document.getElementById(startHour + "8").style.color = "red";
                    }
                    else if (endMinute == "45") {
                        document.getElementById(startHour + "3").style.backgroundColor = "red";
                        document.getElementById(startHour + "4").style.backgroundColor = "red";
                        document.getElementById(startHour + "5").style.backgroundColor = "red";
                        document.getElementById(startHour + "6").style.backgroundColor = "red";
                        document.getElementById(startHour + "7").style.backgroundColor = "red";
                        document.getElementById(startHour + "8").style.backgroundColor = "red";
                        document.getElementById(startHour + "9").style.backgroundColor = "red";

                        document.getElementById(startHour + "3").innerHTML = count;
                        document.getElementById(startHour + "3").style.color = "red";
                        document.getElementById(startHour + "4").innerHTML = count;
                        document.getElementById(startHour + "4").style.color = "red";
                        document.getElementById(startHour + "5").innerHTML = count;
                        document.getElementById(startHour + "5").style.color = "red";
                        document.getElementById(startHour + "6").innerHTML = count;
                        document.getElementById(startHour + "6").style.color = "red";
                        document.getElementById(startHour + "7").innerHTML = count;
                        document.getElementById(startHour + "7").style.color = "red";
                        document.getElementById(startHour + "8").innerHTML = count;
                        document.getElementById(startHour + "8").style.color = "red";
                        document.getElementById(startHour + "9").innerHTML = count;
                        document.getElementById(startHour + "9").style.color = "red";
                    }
                    else if (endMinute == "50") {
                        document.getElementById(startHour + "3").style.backgroundColor = "red";
                        document.getElementById(startHour + "4").style.backgroundColor = "red";
                        document.getElementById(startHour + "5").style.backgroundColor = "red";
                        document.getElementById(startHour + "6").style.backgroundColor = "red";
                        document.getElementById(startHour + "7").style.backgroundColor = "red";
                        document.getElementById(startHour + "8").style.backgroundColor = "red";
                        document.getElementById(startHour + "9").style.backgroundColor = "red";
                        document.getElementById(startHour + "10").style.backgroundColor = "red";

                        document.getElementById(startHour + "3").innerHTML = count;
                        document.getElementById(startHour + "3").style.color = "red";
                        document.getElementById(startHour + "4").innerHTML = count;
                        document.getElementById(startHour + "4").style.color = "red";
                        document.getElementById(startHour + "5").innerHTML = count;
                        document.getElementById(startHour + "5").style.color = "red";
                        document.getElementById(startHour + "6").innerHTML = count;
                        document.getElementById(startHour + "6").style.color = "red";
                        document.getElementById(startHour + "7").innerHTML = count;
                        document.getElementById(startHour + "7").style.color = "red";
                        document.getElementById(startHour + "8").innerHTML = count;
                        document.getElementById(startHour + "8").style.color = "red";
                        document.getElementById(startHour + "9").innerHTML = count;
                        document.getElementById(startHour + "9").style.color = "red";
                        document.getElementById(startHour + "10").innerHTML = count;
                        document.getElementById(startHour + "10").style.color = "red";
                    }
                    else if (endMinute == "55") {
                        document.getElementById(startHour + "3").style.backgroundColor = "red";
                        document.getElementById(startHour + "4").style.backgroundColor = "red";
                        document.getElementById(startHour + "5").style.backgroundColor = "red";
                        document.getElementById(startHour + "6").style.backgroundColor = "red";
                        document.getElementById(startHour + "7").style.backgroundColor = "red";
                        document.getElementById(startHour + "8").style.backgroundColor = "red";
                        document.getElementById(startHour + "9").style.backgroundColor = "red";
                        document.getElementById(startHour + "10").style.backgroundColor = "red";
                        document.getElementById(startHour + "11").style.backgroundColor = "red";

                        document.getElementById(startHour + "3").innerHTML = count;
                        document.getElementById(startHour + "3").style.color = "red";
                        document.getElementById(startHour + "4").innerHTML = count;
                        document.getElementById(startHour + "4").style.color = "red";
                        document.getElementById(startHour + "5").innerHTML = count;
                        document.getElementById(startHour + "5").style.color = "red";
                        document.getElementById(startHour + "6").innerHTML = count;
                        document.getElementById(startHour + "6").style.color = "red";
                        document.getElementById(startHour + "7").innerHTML = count;
                        document.getElementById(startHour + "7").style.color = "red";
                        document.getElementById(startHour + "8").innerHTML = count;
                        document.getElementById(startHour + "8").style.color = "red";
                        document.getElementById(startHour + "9").innerHTML = count;
                        document.getElementById(startHour + "9").style.color = "red";
                        document.getElementById(startHour + "10").innerHTML = count;
                        document.getElementById(startHour + "10").style.color = "red";
                        document.getElementById(startHour + "11").innerHTML = count;
                        document.getElementById(startHour + "11").style.color = "red";
                    }
                }
                else if (startMinute == "15") {
                    if (endMinute == "20") {
                        document.getElementById(startHour + "4").style.backgroundColor = "red";

                        document.getElementById(startHour + "4").innerHTML = count;
                        document.getElementById(startHour + "4").style.color = "red";
                    }
                    else if (endMinute == "25") {
                        document.getElementById(startHour + "4").style.backgroundColor = "red";
                        document.getElementById(startHour + "5").style.backgroundColor = "red";

                        document.getElementById(startHour + "4").innerHTML = count;
                        document.getElementById(startHour + "4").style.color = "red";
                        document.getElementById(startHour + "5").innerHTML = count;
                        document.getElementById(startHour + "5").style.color = "red";
                    }
                    else if (endMinute == "30") {
                        document.getElementById(startHour + "4").style.backgroundColor = "red";
                        document.getElementById(startHour + "5").style.backgroundColor = "red";
                        document.getElementById(startHour + "6").style.backgroundColor = "red";

                        document.getElementById(startHour + "4").innerHTML = count;
                        document.getElementById(startHour + "4").style.color = "red";
                        document.getElementById(startHour + "5").innerHTML = count;
                        document.getElementById(startHour + "5").style.color = "red";
                        document.getElementById(startHour + "6").innerHTML = count;
                        document.getElementById(startHour + "6").style.color = "red";
                    }
                    else if (endMinute == "35") {
                        document.getElementById(startHour + "4").style.backgroundColor = "red";
                        document.getElementById(startHour + "5").style.backgroundColor = "red";
                        document.getElementById(startHour + "6").style.backgroundColor = "red";
                        document.getElementById(startHour + "7").style.backgroundColor = "red";

                        document.getElementById(startHour + "4").innerHTML = count;
                        document.getElementById(startHour + "4").style.color = "red";
                        document.getElementById(startHour + "5").innerHTML = count;
                        document.getElementById(startHour + "5").style.color = "red";
                        document.getElementById(startHour + "6").innerHTML = count;
                        document.getElementById(startHour + "6").style.color = "red";
                        document.getElementById(startHour + "7").innerHTML = count;
                        document.getElementById(startHour + "7").style.color = "red";
                    }
                    else if (endMinute == "40") {
                        document.getElementById(startHour + "4").style.backgroundColor = "red";
                        document.getElementById(startHour + "5").style.backgroundColor = "red";
                        document.getElementById(startHour + "6").style.backgroundColor = "red";
                        document.getElementById(startHour + "7").style.backgroundColor = "red";
                        document.getElementById(startHour + "8").style.backgroundColor = "red";

                        document.getElementById(startHour + "4").innerHTML = count;
                        document.getElementById(startHour + "4").style.color = "red";
                        document.getElementById(startHour + "5").innerHTML = count;
                        document.getElementById(startHour + "5").style.color = "red";
                        document.getElementById(startHour + "6").innerHTML = count;
                        document.getElementById(startHour + "6").style.color = "red";
                        document.getElementById(startHour + "7").innerHTML = count;
                        document.getElementById(startHour + "7").style.color = "red";
                        document.getElementById(startHour + "8").innerHTML = count;
                        document.getElementById(startHour + "8").style.color = "red";
                    }
                    else if (endMinute == "45") {
                        document.getElementById(startHour + "4").style.backgroundColor = "red";
                        document.getElementById(startHour + "5").style.backgroundColor = "red";
                        document.getElementById(startHour + "6").style.backgroundColor = "red";
                        document.getElementById(startHour + "7").style.backgroundColor = "red";
                        document.getElementById(startHour + "8").style.backgroundColor = "red";
                        document.getElementById(startHour + "9").style.backgroundColor = "red";

                        document.getElementById(startHour + "4").innerHTML = count;
                        document.getElementById(startHour + "4").style.color = "red";
                        document.getElementById(startHour + "5").innerHTML = count;
                        document.getElementById(startHour + "5").style.color = "red";
                        document.getElementById(startHour + "6").innerHTML = count;
                        document.getElementById(startHour + "6").style.color = "red";
                        document.getElementById(startHour + "7").innerHTML = count;
                        document.getElementById(startHour + "7").style.color = "red";
                        document.getElementById(startHour + "8").innerHTML = count;
                        document.getElementById(startHour + "8").style.color = "red";
                        document.getElementById(startHour + "9").innerHTML = count;
                        document.getElementById(startHour + "9").style.color = "red";
                    }
                    else if (endMinute == "50") {
                        document.getElementById(startHour + "4").style.backgroundColor = "red";
                        document.getElementById(startHour + "5").style.backgroundColor = "red";
                        document.getElementById(startHour + "6").style.backgroundColor = "red";
                        document.getElementById(startHour + "7").style.backgroundColor = "red";
                        document.getElementById(startHour + "8").style.backgroundColor = "red";
                        document.getElementById(startHour + "9").style.backgroundColor = "red";
                        document.getElementById(startHour + "10").style.backgroundColor = "red";

                        document.getElementById(startHour + "4").innerHTML = count;
                        document.getElementById(startHour + "4").style.color = "red";
                        document.getElementById(startHour + "5").innerHTML = count;
                        document.getElementById(startHour + "5").style.color = "red";
                        document.getElementById(startHour + "6").innerHTML = count;
                        document.getElementById(startHour + "6").style.color = "red";
                        document.getElementById(startHour + "7").innerHTML = count;
                        document.getElementById(startHour + "7").style.color = "red";
                        document.getElementById(startHour + "8").innerHTML = count;
                        document.getElementById(startHour + "8").style.color = "red";
                        document.getElementById(startHour + "9").innerHTML = count;
                        document.getElementById(startHour + "9").style.color = "red";
                        document.getElementById(startHour + "10").innerHTML = count;
                        document.getElementById(startHour + "10").style.color = "red";
                    }
                    else if (endMinute == "55") {
                        document.getElementById(startHour + "4").style.backgroundColor = "red";
                        document.getElementById(startHour + "5").style.backgroundColor = "red";
                        document.getElementById(startHour + "6").style.backgroundColor = "red";
                        document.getElementById(startHour + "7").style.backgroundColor = "red";
                        document.getElementById(startHour + "8").style.backgroundColor = "red";
                        document.getElementById(startHour + "9").style.backgroundColor = "red";
                        document.getElementById(startHour + "10").style.backgroundColor = "red";
                        document.getElementById(startHour + "11").style.backgroundColor = "red";

                        document.getElementById(startHour + "4").innerHTML = count;
                        document.getElementById(startHour + "4").style.color = "red";
                        document.getElementById(startHour + "5").innerHTML = count;
                        document.getElementById(startHour + "5").style.color = "red";
                        document.getElementById(startHour + "6").innerHTML = count;
                        document.getElementById(startHour + "6").style.color = "red";
                        document.getElementById(startHour + "7").innerHTML = count;
                        document.getElementById(startHour + "7").style.color = "red";
                        document.getElementById(startHour + "8").innerHTML = count;
                        document.getElementById(startHour + "8").style.color = "red";
                        document.getElementById(startHour + "9").innerHTML = count;
                        document.getElementById(startHour + "9").style.color = "red";
                        document.getElementById(startHour + "10").innerHTML = count;
                        document.getElementById(startHour + "10").style.color = "red";
                        document.getElementById(startHour + "11").innerHTML = count;
                        document.getElementById(startHour + "11").style.color = "red";
                    }
                }
                else if (startMinute == "20") {
                    if (endMinute == "25") {
                        document.getElementById(startHour + "5").style.backgroundColor = "red";

                        document.getElementById(startHour + "5").innerHTML = count;
                        document.getElementById(startHour + "5").style.color = "red";
                    }
                    else if (endMinute == "30") {
                        document.getElementById(startHour + "5").style.backgroundColor = "red";
                        document.getElementById(startHour + "6").style.backgroundColor = "red";

                        document.getElementById(startHour + "5").innerHTML = count;
                        document.getElementById(startHour + "5").style.color = "red";
                        document.getElementById(startHour + "6").innerHTML = count;
                        document.getElementById(startHour + "6").style.color = "red";
                    }
                    else if (endMinute == "35") {
                        document.getElementById(startHour + "5").style.backgroundColor = "red";
                        document.getElementById(startHour + "6").style.backgroundColor = "red";
                        document.getElementById(startHour + "7").style.backgroundColor = "red";

                        document.getElementById(startHour + "5").innerHTML = count;
                        document.getElementById(startHour + "5").style.color = "red";
                        document.getElementById(startHour + "6").innerHTML = count;
                        document.getElementById(startHour + "6").style.color = "red";
                        document.getElementById(startHour + "7").innerHTML = count;
                        document.getElementById(startHour + "7").style.color = "red";
                    }
                    else if (endMinute == "40") {
                        document.getElementById(startHour + "5").style.backgroundColor = "red";
                        document.getElementById(startHour + "6").style.backgroundColor = "red";
                        document.getElementById(startHour + "7").style.backgroundColor = "red";
                        document.getElementById(startHour + "8").style.backgroundColor = "red";

                        document.getElementById(startHour + "5").innerHTML = count;
                        document.getElementById(startHour + "5").style.color = "red";
                        document.getElementById(startHour + "6").innerHTML = count;
                        document.getElementById(startHour + "6").style.color = "red";
                        document.getElementById(startHour + "7").innerHTML = count;
                        document.getElementById(startHour + "7").style.color = "red";
                        document.getElementById(startHour + "8").innerHTML = count;
                        document.getElementById(startHour + "8").style.color = "red";
                    }
                    else if (endMinute == "45") {
                        document.getElementById(startHour + "5").style.backgroundColor = "red";
                        document.getElementById(startHour + "6").style.backgroundColor = "red";
                        document.getElementById(startHour + "7").style.backgroundColor = "red";
                        document.getElementById(startHour + "8").style.backgroundColor = "red";
                        document.getElementById(startHour + "9").style.backgroundColor = "red";

                        document.getElementById(startHour + "5").innerHTML = count;
                        document.getElementById(startHour + "5").style.color = "red";
                        document.getElementById(startHour + "6").innerHTML = count;
                        document.getElementById(startHour + "6").style.color = "red";
                        document.getElementById(startHour + "7").innerHTML = count;
                        document.getElementById(startHour + "7").style.color = "red";
                        document.getElementById(startHour + "8").innerHTML = count;
                        document.getElementById(startHour + "8").style.color = "red";
                        document.getElementById(startHour + "9").innerHTML = count;
                        document.getElementById(startHour + "9").style.color = "red";
                    }
                    else if (endMinute == "50") {
                        document.getElementById(startHour + "5").style.backgroundColor = "red";
                        document.getElementById(startHour + "6").style.backgroundColor = "red";
                        document.getElementById(startHour + "7").style.backgroundColor = "red";
                        document.getElementById(startHour + "8").style.backgroundColor = "red";
                        document.getElementById(startHour + "9").style.backgroundColor = "red";
                        document.getElementById(startHour + "10").style.backgroundColor = "red";

                        document.getElementById(startHour + "5").innerHTML = count;
                        document.getElementById(startHour + "5").style.color = "red";
                        document.getElementById(startHour + "6").innerHTML = count;
                        document.getElementById(startHour + "6").style.color = "red";
                        document.getElementById(startHour + "7").innerHTML = count;
                        document.getElementById(startHour + "7").style.color = "red";
                        document.getElementById(startHour + "8").innerHTML = count;
                        document.getElementById(startHour + "8").style.color = "red";
                        document.getElementById(startHour + "9").innerHTML = count;
                        document.getElementById(startHour + "9").style.color = "red";
                        document.getElementById(startHour + "10").innerHTML = count;
                        document.getElementById(startHour + "10").style.color = "red";
                    }
                    else if (endMinute == "55") {
                        document.getElementById(startHour + "5").style.backgroundColor = "red";
                        document.getElementById(startHour + "6").style.backgroundColor = "red";
                        document.getElementById(startHour + "7").style.backgroundColor = "red";
                        document.getElementById(startHour + "8").style.backgroundColor = "red";
                        document.getElementById(startHour + "9").style.backgroundColor = "red";
                        document.getElementById(startHour + "10").style.backgroundColor = "red";
                        document.getElementById(startHour + "11").style.backgroundColor = "red";

                        document.getElementById(startHour + "5").innerHTML = count;
                        document.getElementById(startHour + "5").style.color = "red";
                        document.getElementById(startHour + "6").innerHTML = count;
                        document.getElementById(startHour + "6").style.color = "red";
                        document.getElementById(startHour + "7").innerHTML = count;
                        document.getElementById(startHour + "7").style.color = "red";
                        document.getElementById(startHour + "8").innerHTML = count;
                        document.getElementById(startHour + "8").style.color = "red";
                        document.getElementById(startHour + "9").innerHTML = count;
                        document.getElementById(startHour + "9").style.color = "red";
                        document.getElementById(startHour + "10").innerHTML = count;
                        document.getElementById(startHour + "10").style.color = "red";
                        document.getElementById(startHour + "11").innerHTML = count;
                        document.getElementById(startHour + "11").style.color = "red";
                    }
                }
                else if (startMinute == "25") {
                    if (endMinute == "30") {
                        document.getElementById(startHour + "6").style.backgroundColor = "red";

                        document.getElementById(startHour + "5").innerHTML = count;
                        document.getElementById(startHour + "5").style.color = "red";
                        document.getElementById(startHour + "6").innerHTML = count;
                        document.getElementById(startHour + "6").style.color = "red";
                    }
                    else if (endMinute == "35") {
                        document.getElementById(startHour + "6").style.backgroundColor = "red";
                        document.getElementById(startHour + "7").style.backgroundColor = "red";

                        document.getElementById(startHour + "6").innerHTML = count;
                        document.getElementById(startHour + "6").style.color = "red";
                        document.getElementById(startHour + "7").innerHTML = count;
                        document.getElementById(startHour + "7").style.color = "red";
                    }
                    else if (endMinute == "40") {
                        document.getElementById(startHour + "6").style.backgroundColor = "red";
                        document.getElementById(startHour + "7").style.backgroundColor = "red";
                        document.getElementById(startHour + "8").style.backgroundColor = "red";

                        document.getElementById(startHour + "6").innerHTML = count;
                        document.getElementById(startHour + "6").style.color = "red";
                        document.getElementById(startHour + "7").innerHTML = count;
                        document.getElementById(startHour + "7").style.color = "red";
                        document.getElementById(startHour + "8").innerHTML = count;
                        document.getElementById(startHour + "8").style.color = "red";
                    }
                    else if (endMinute == "45") {
                        document.getElementById(startHour + "6").style.backgroundColor = "red";
                        document.getElementById(startHour + "7").style.backgroundColor = "red";
                        document.getElementById(startHour + "8").style.backgroundColor = "red";
                        document.getElementById(startHour + "9").style.backgroundColor = "red";

                        document.getElementById(startHour + "6").innerHTML = count;
                        document.getElementById(startHour + "6").style.color = "red";
                        document.getElementById(startHour + "7").innerHTML = count;
                        document.getElementById(startHour + "7").style.color = "red";
                        document.getElementById(startHour + "8").innerHTML = count;
                        document.getElementById(startHour + "8").style.color = "red";
                        document.getElementById(startHour + "9").innerHTML = count;
                        document.getElementById(startHour + "9").style.color = "red";
                    }
                    else if (endMinute == "50") {
                        document.getElementById(startHour + "6").style.backgroundColor = "red";
                        document.getElementById(startHour + "7").style.backgroundColor = "red";
                        document.getElementById(startHour + "8").style.backgroundColor = "red";
                        document.getElementById(startHour + "9").style.backgroundColor = "red";
                        document.getElementById(startHour + "10").style.backgroundColor = "red";

                        document.getElementById(startHour + "6").innerHTML = count;
                        document.getElementById(startHour + "6").style.color = "red";
                        document.getElementById(startHour + "7").innerHTML = count;
                        document.getElementById(startHour + "7").style.color = "red";
                        document.getElementById(startHour + "8").innerHTML = count;
                        document.getElementById(startHour + "8").style.color = "red";
                        document.getElementById(startHour + "9").innerHTML = count;
                        document.getElementById(startHour + "9").style.color = "red";
                        document.getElementById(startHour + "10").innerHTML = count;
                        document.getElementById(startHour + "10").style.color = "red";
                    }
                    else if (endMinute == "55") {
                        document.getElementById(startHour + "6").style.backgroundColor = "red";
                        document.getElementById(startHour + "7").style.backgroundColor = "red";
                        document.getElementById(startHour + "8").style.backgroundColor = "red";
                        document.getElementById(startHour + "9").style.backgroundColor = "red";
                        document.getElementById(startHour + "10").style.backgroundColor = "red";
                        document.getElementById(startHour + "11").style.backgroundColor = "red";

                        document.getElementById(startHour + "6").innerHTML = count;
                        document.getElementById(startHour + "6").style.color = "red";
                        document.getElementById(startHour + "7").innerHTML = count;
                        document.getElementById(startHour + "7").style.color = "red";
                        document.getElementById(startHour + "8").innerHTML = count;
                        document.getElementById(startHour + "8").style.color = "red";
                        document.getElementById(startHour + "9").innerHTML = count;
                        document.getElementById(startHour + "9").style.color = "red";
                        document.getElementById(startHour + "10").innerHTML = count;
                        document.getElementById(startHour + "10").style.color = "red";
                        document.getElementById(startHour + "11").innerHTML = count;
                        document.getElementById(startHour + "11").style.color = "red";
                    }
                }
                else if (startMinute == "30") {
                    if (endMinute == "35") {
                        document.getElementById(startHour + "7").style.backgroundColor = "red";

                        document.getElementById(startHour + "7").innerHTML = count;
                        document.getElementById(startHour + "7").style.color = "red";
                    }
                    else if (endMinute == "40") {
                        document.getElementById(startHour + "7").style.backgroundColor = "red";
                        document.getElementById(startHour + "8").style.backgroundColor = "red";

                        document.getElementById(startHour + "7").innerHTML = count;
                        document.getElementById(startHour + "7").style.color = "red";
                        document.getElementById(startHour + "8").innerHTML = count;
                        document.getElementById(startHour + "8").style.color = "red";
                    }
                    else if (endMinute == "45") {
                        document.getElementById(startHour + "7").style.backgroundColor = "red";
                        document.getElementById(startHour + "8").style.backgroundColor = "red";
                        document.getElementById(startHour + "9").style.backgroundColor = "red";

                        document.getElementById(startHour + "7").innerHTML = count;
                        document.getElementById(startHour + "7").style.color = "red";
                        document.getElementById(startHour + "8").innerHTML = count;
                        document.getElementById(startHour + "8").style.color = "red";
                        document.getElementById(startHour + "9").innerHTML = count;
                        document.getElementById(startHour + "9").style.color = "red";
                    }
                    else if (endMinute == "50") {
                        document.getElementById(startHour + "7").style.backgroundColor = "red";
                        document.getElementById(startHour + "8").style.backgroundColor = "red";
                        document.getElementById(startHour + "9").style.backgroundColor = "red";
                        document.getElementById(startHour + "10").style.backgroundColor = "red";

                        document.getElementById(startHour + "7").innerHTML = count;
                        document.getElementById(startHour + "7").style.color = "red";
                        document.getElementById(startHour + "8").innerHTML = count;
                        document.getElementById(startHour + "8").style.color = "red";
                        document.getElementById(startHour + "9").innerHTML = count;
                        document.getElementById(startHour + "9").style.color = "red";
                        document.getElementById(startHour + "10").innerHTML = count;
                        document.getElementById(startHour + "10").style.color = "red";
                    }
                    else if (endMinute == "55") {
                        document.getElementById(startHour + "7").style.backgroundColor = "red";
                        document.getElementById(startHour + "8").style.backgroundColor = "red";
                        document.getElementById(startHour + "9").style.backgroundColor = "red";
                        document.getElementById(startHour + "10").style.backgroundColor = "red";
                        document.getElementById(startHour + "11").style.backgroundColor = "red";

                        document.getElementById(startHour + "7").innerHTML = count;
                        document.getElementById(startHour + "7").style.color = "red";
                        document.getElementById(startHour + "8").innerHTML = count;
                        document.getElementById(startHour + "8").style.color = "red";
                        document.getElementById(startHour + "9").innerHTML = count;
                        document.getElementById(startHour + "9").style.color = "red";
                        document.getElementById(startHour + "10").innerHTML = count;
                        document.getElementById(startHour + "10").style.color = "red";
                        document.getElementById(startHour + "11").innerHTML = count;
                        document.getElementById(startHour + "11").style.color = "red";
                    }
                }
                else if (startMinute == "35") {
                    if (endMinute == "40") {
                        document.getElementById(startHour + "8").style.backgroundColor = "red";

                        document.getElementById(startHour + "8").innerHTML = count;
                        document.getElementById(startHour + "8").style.color = "red";
                    }
                    else if (endMinute == "45") {
                        document.getElementById(startHour + "8").style.backgroundColor = "red";
                        document.getElementById(startHour + "9").style.backgroundColor = "red";

                        document.getElementById(startHour + "8").innerHTML = count;
                        document.getElementById(startHour + "8").style.color = "red";
                        document.getElementById(startHour + "9").innerHTML = count;
                        document.getElementById(startHour + "9").style.color = "red";
                    }
                    else if (endMinute == "50") {
                        document.getElementById(startHour + "8").style.backgroundColor = "red";
                        document.getElementById(startHour + "9").style.backgroundColor = "red";
                        document.getElementById(startHour + "10").style.backgroundColor = "red";

                        document.getElementById(startHour + "8").innerHTML = count;
                        document.getElementById(startHour + "8").style.color = "red";
                        document.getElementById(startHour + "9").innerHTML = count;
                        document.getElementById(startHour + "9").style.color = "red";
                        document.getElementById(startHour + "10").innerHTML = count;
                        document.getElementById(startHour + "10").style.color = "red";
                    }
                    else if (endMinute == "55") {
                        document.getElementById(startHour + "8").style.backgroundColor = "red";
                        document.getElementById(startHour + "9").style.backgroundColor = "red";
                        document.getElementById(startHour + "10").style.backgroundColor = "red";
                        document.getElementById(startHour + "11").style.backgroundColor = "red";

                        document.getElementById(startHour + "8").innerHTML = count;
                        document.getElementById(startHour + "8").style.color = "red";
                        document.getElementById(startHour + "9").innerHTML = count;
                        document.getElementById(startHour + "9").style.color = "red";
                        document.getElementById(startHour + "10").innerHTML = count;
                        document.getElementById(startHour + "10").style.color = "red";
                        document.getElementById(startHour + "11").innerHTML = count;
                        document.getElementById(startHour + "11").style.color = "red";
                    }
                }
                else if (startMinute == "40") {
                    if (endMinute == "45") {
                        document.getElementById(startHour + "9").style.backgroundColor = "red";

                        document.getElementById(startHour + "9").innerHTML = count;
                        document.getElementById(startHour + "9").style.color = "red";
                    }
                    else if (endMinute == "50") {
                        document.getElementById(startHour + "9").style.backgroundColor = "red";
                        document.getElementById(startHour + "10").style.backgroundColor = "red";

                        document.getElementById(startHour + "9").innerHTML = count;
                        document.getElementById(startHour + "9").style.color = "red";
                        document.getElementById(startHour + "10").innerHTML = count;
                        document.getElementById(startHour + "10").style.color = "red";
                    }
                    else if (endMinute == "55") {
                        document.getElementById(startHour + "9").style.backgroundColor = "red";
                        document.getElementById(startHour + "10").style.backgroundColor = "red";
                        document.getElementById(startHour + "11").style.backgroundColor = "red";

                        document.getElementById(startHour + "9").innerHTML = count;
                        document.getElementById(startHour + "9").style.color = "red";
                        document.getElementById(startHour + "10").innerHTML = count;
                        document.getElementById(startHour + "10").style.color = "red";
                        document.getElementById(startHour + "11").innerHTML = count;
                        document.getElementById(startHour + "11").style.color = "red";
                    }
                }
                else if (startMinute == "45") {
                    if (endMinute == "50") {
                        document.getElementById(startHour + "10").style.backgroundColor = "red";

                        document.getElementById(startHour + "10").innerHTML = count;
                        document.getElementById(startHour + "10").style.color = "red";
                    }
                    else if (endMinute == "55") {
                        document.getElementById(startHour + "10").style.backgroundColor = "red";
                        document.getElementById(startHour + "11").style.backgroundColor = "red";

                        document.getElementById(startHour + "10").innerHTML = count;
                        document.getElementById(startHour + "10").style.color = "red";
                        document.getElementById(startHour + "11").innerHTML = count;
                        document.getElementById(startHour + "11").style.color = "red";
                    }
                }
                else if (startMinute == "50") {
                    if (endMinute == "55") {
                        document.getElementById(startHour + "11").style.backgroundColor = "red";

                        document.getElementById(startHour + "11").innerHTML = count;
                        document.getElementById(startHour + "11").style.color = "red";
                    }
                }
                else if (startMinute == "55") {
                    document.getElementById(startHour + "12").style.backgroundColor = "red";

                    document.getElementById(startHour + "12").innerHTML = count;
                    document.getElementById(startHour + "12").style.color = "red";
                }
            }
            else if (startMinute == "00") {
                if (parseInt(endHour) - parseInt(startHour) == 1 && endMinute == "00") {
                    document.getElementById(startHour + "1").style.backgroundColor = "red";
                    document.getElementById(startHour + "2").style.backgroundColor = "red";
                    document.getElementById(startHour + "3").style.backgroundColor = "red";
                    document.getElementById(startHour + "4").style.backgroundColor = "red";
                    document.getElementById(startHour + "5").style.backgroundColor = "red";
                    document.getElementById(startHour + "6").style.backgroundColor = "red";
                    document.getElementById(startHour + "7").style.backgroundColor = "red";
                    document.getElementById(startHour + "8").style.backgroundColor = "red";
                    document.getElementById(startHour + "9").style.backgroundColor = "red";
                    document.getElementById(startHour + "10").style.backgroundColor = "red";
                    document.getElementById(startHour + "11").style.backgroundColor = "red";
                    document.getElementById(startHour + "12").style.backgroundColor = "red";

                    document.getElementById(startHour + "1").innerHTML = count;
                    document.getElementById(startHour + "1").style.color = "red";
                    document.getElementById(startHour + "2").innerHTML = count;
                    document.getElementById(startHour + "2").style.color = "red";
                    document.getElementById(startHour + "3").innerHTML = count;
                    document.getElementById(startHour + "3").style.color = "red";
                    document.getElementById(startHour + "4").innerHTML = count;
                    document.getElementById(startHour + "4").style.color = "red";
                    document.getElementById(startHour + "5").innerHTML = count;
                    document.getElementById(startHour + "5").style.color = "red";
                    document.getElementById(startHour + "6").innerHTML = count;
                    document.getElementById(startHour + "6").style.color = "red";
                    document.getElementById(startHour + "7").innerHTML = count;
                    document.getElementById(startHour + "7").style.color = "red";
                    document.getElementById(startHour + "8").innerHTML = count;
                    document.getElementById(startHour + "8").style.color = "red";
                    document.getElementById(startHour + "9").innerHTML = count;
                    document.getElementById(startHour + "9").style.color = "red";
                    document.getElementById(startHour + "10").innerHTML = count;
                    document.getElementById(startHour + "10").style.color = "red";
                    document.getElementById(startHour + "11").innerHTML = count;
                    document.getElementById(startHour + "11").style.color = "red";
                    document.getElementById(startHour + "12").innerHTML = count;
                    document.getElementById(startHour + "12").style.color = "red";
                }
                else {
                    document.getElementById(startHour + "1").style.backgroundColor = "red";
                    document.getElementById(startHour + "2").style.backgroundColor = "red";
                    document.getElementById(startHour + "3").style.backgroundColor = "red";
                    document.getElementById(startHour + "4").style.backgroundColor = "red";
                    document.getElementById(startHour + "5").style.backgroundColor = "red";
                    document.getElementById(startHour + "6").style.backgroundColor = "red";
                    document.getElementById(startHour + "7").style.backgroundColor = "red";
                    document.getElementById(startHour + "8").style.backgroundColor = "red";
                    document.getElementById(startHour + "9").style.backgroundColor = "red";
                    document.getElementById(startHour + "10").style.backgroundColor = "red";
                    document.getElementById(startHour + "11").style.backgroundColor = "red";
                    document.getElementById(startHour + "12").style.backgroundColor = "red";

                    document.getElementById(startHour + "1").innerHTML = count;
                    document.getElementById(startHour + "1").style.color = "red";
                    document.getElementById(startHour + "2").innerHTML = count;
                    document.getElementById(startHour + "2").style.color = "red";
                    document.getElementById(startHour + "3").innerHTML = count;
                    document.getElementById(startHour + "3").style.color = "red";
                    document.getElementById(startHour + "4").innerHTML = count;
                    document.getElementById(startHour + "4").style.color = "red";
                    document.getElementById(startHour + "5").innerHTML = count;
                    document.getElementById(startHour + "5").style.color = "red";
                    document.getElementById(startHour + "6").innerHTML = count;
                    document.getElementById(startHour + "6").style.color = "red";
                    document.getElementById(startHour + "7").innerHTML = count;
                    document.getElementById(startHour + "7").style.color = "red";
                    document.getElementById(startHour + "8").innerHTML = count;
                    document.getElementById(startHour + "8").style.color = "red";
                    document.getElementById(startHour + "9").innerHTML = count;
                    document.getElementById(startHour + "9").style.color = "red";
                    document.getElementById(startHour + "10").innerHTML = count;
                    document.getElementById(startHour + "10").style.color = "red";
                    document.getElementById(startHour + "11").innerHTML = count;
                    document.getElementById(startHour + "11").style.color = "red";
                    document.getElementById(startHour + "12").innerHTML = count;
                    document.getElementById(startHour + "12").style.color = "red";

                    var temp = startHour;

                    for (var j = parseInt(startHour) + 1; j < parseInt(endHour); j++) {
                        switch (temp) {
                            case "07": temp = "08";
                                break;
                            case "08": temp = "09";
                                break;
                            case "09": temp = "10";
                                break;
                            case "10": temp = "11";
                                break;
                            case "11": temp = "12";
                                break;
                            case "12": temp = "13";
                                break;
                            case "13": temp = "14";
                                break;
                            case "14": temp = "15";
                                break;
                            case "15": temp = "16";
                                break;
                            case "16": temp = "17";
                                break;
                            case "17": temp = "18";
                                break;
                            case "18": temp = "19";
                                break;
                            default: temp = "00"
                                break;
                        }

                        document.getElementById(temp + "1").style.backgroundColor = "red";
                        document.getElementById(temp + "2").style.backgroundColor = "red";
                        document.getElementById(temp + "3").style.backgroundColor = "red";
                        document.getElementById(temp + "4").style.backgroundColor = "red";
                        document.getElementById(temp + "5").style.backgroundColor = "red";
                        document.getElementById(temp + "6").style.backgroundColor = "red";
                        document.getElementById(temp + "7").style.backgroundColor = "red";
                        document.getElementById(temp + "8").style.backgroundColor = "red";
                        document.getElementById(temp + "9").style.backgroundColor = "red";
                        document.getElementById(temp + "10").style.backgroundColor = "red";
                        document.getElementById(temp + "11").style.backgroundColor = "red";
                        document.getElementById(temp + "12").style.backgroundColor = "red";

                        document.getElementById(temp + "1").innerHTML = count;
                        document.getElementById(temp + "1").style.color = "red";
                        document.getElementById(temp + "2").innerHTML = count;
                        document.getElementById(temp + "2").style.color = "red";
                        document.getElementById(temp + "3").innerHTML = count;
                        document.getElementById(temp + "3").style.color = "red";
                        document.getElementById(temp + "4").innerHTML = count;
                        document.getElementById(temp + "4").style.color = "red";
                        document.getElementById(temp + "5").innerHTML = count;
                        document.getElementById(temp + "5").style.color = "red";
                        document.getElementById(temp + "6").innerHTML = count;
                        document.getElementById(temp + "6").style.color = "red";
                        document.getElementById(temp + "7").innerHTML = count;
                        document.getElementById(temp + "7").style.color = "red";
                        document.getElementById(temp + "8").innerHTML = count;
                        document.getElementById(temp + "8").style.color = "red";
                        document.getElementById(temp + "9").innerHTML = count;
                        document.getElementById(temp + "9").style.color = "red";
                        document.getElementById(temp + "10").innerHTML = count;
                        document.getElementById(temp + "10").style.color = "red";
                        document.getElementById(temp + "11").innerHTML = count;
                        document.getElementById(temp + "11").style.color = "red";
                        document.getElementById(temp + "12").innerHTML = count;
                        document.getElementById(temp + "12").style.color = "red";
                    }

                    repeatingFunction();
                }
            }
            else if (startMinute == "05") {
                if (parseInt(endHour) - parseInt(startHour) == 1 && endMinute == "00") {
                    document.getElementById(startHour + "2").style.backgroundColor = "red";
                    document.getElementById(startHour + "3").style.backgroundColor = "red";
                    document.getElementById(startHour + "4").style.backgroundColor = "red";
                    document.getElementById(startHour + "5").style.backgroundColor = "red";
                    document.getElementById(startHour + "6").style.backgroundColor = "red";
                    document.getElementById(startHour + "7").style.backgroundColor = "red";
                    document.getElementById(startHour + "8").style.backgroundColor = "red";
                    document.getElementById(startHour + "9").style.backgroundColor = "red";
                    document.getElementById(startHour + "10").style.backgroundColor = "red";
                    document.getElementById(startHour + "11").style.backgroundColor = "red";
                    document.getElementById(startHour + "12").style.backgroundColor = "red";

                    document.getElementById(startHour + "2").innerHTML = count;
                    document.getElementById(startHour + "2").style.color = "red";
                    document.getElementById(startHour + "3").innerHTML = count;
                    document.getElementById(startHour + "3").style.color = "red";
                    document.getElementById(startHour + "4").innerHTML = count;
                    document.getElementById(startHour + "4").style.color = "red";
                    document.getElementById(startHour + "5").innerHTML = count;
                    document.getElementById(startHour + "5").style.color = "red";
                    document.getElementById(startHour + "6").innerHTML = count;
                    document.getElementById(startHour + "6").style.color = "red";
                    document.getElementById(startHour + "7").innerHTML = count;
                    document.getElementById(startHour + "7").style.color = "red";
                    document.getElementById(startHour + "8").innerHTML = count;
                    document.getElementById(startHour + "8").style.color = "red";
                    document.getElementById(startHour + "9").innerHTML = count;
                    document.getElementById(startHour + "9").style.color = "red";
                    document.getElementById(startHour + "10").innerHTML = count;
                    document.getElementById(startHour + "10").style.color = "red";
                    document.getElementById(startHour + "11").innerHTML = count;
                    document.getElementById(startHour + "11").style.color = "red";
                    document.getElementById(startHour + "12").innerHTML = count;
                    document.getElementById(startHour + "12").style.color = "red";
                }
                else {
                    document.getElementById(startHour + "2").style.backgroundColor = "red";
                    document.getElementById(startHour + "3").style.backgroundColor = "red";
                    document.getElementById(startHour + "4").style.backgroundColor = "red";
                    document.getElementById(startHour + "5").style.backgroundColor = "red";
                    document.getElementById(startHour + "6").style.backgroundColor = "red";
                    document.getElementById(startHour + "7").style.backgroundColor = "red";
                    document.getElementById(startHour + "8").style.backgroundColor = "red";
                    document.getElementById(startHour + "9").style.backgroundColor = "red";
                    document.getElementById(startHour + "10").style.backgroundColor = "red";
                    document.getElementById(startHour + "11").style.backgroundColor = "red";
                    document.getElementById(startHour + "12").style.backgroundColor = "red";

                    document.getElementById(startHour + "2").innerHTML = count;
                    document.getElementById(startHour + "2").style.color = "red";
                    document.getElementById(startHour + "3").innerHTML = count;
                    document.getElementById(startHour + "3").style.color = "red";
                    document.getElementById(startHour + "4").innerHTML = count;
                    document.getElementById(startHour + "4").style.color = "red";
                    document.getElementById(startHour + "5").innerHTML = count;
                    document.getElementById(startHour + "5").style.color = "red";
                    document.getElementById(startHour + "6").innerHTML = count;
                    document.getElementById(startHour + "6").style.color = "red";
                    document.getElementById(startHour + "7").innerHTML = count;
                    document.getElementById(startHour + "7").style.color = "red";
                    document.getElementById(startHour + "8").innerHTML = count;
                    document.getElementById(startHour + "8").style.color = "red";
                    document.getElementById(startHour + "9").innerHTML = count;
                    document.getElementById(startHour + "9").style.color = "red";
                    document.getElementById(startHour + "10").innerHTML = count;
                    document.getElementById(startHour + "10").style.color = "red";
                    document.getElementById(startHour + "11").innerHTML = count;
                    document.getElementById(startHour + "11").style.color = "red";
                    document.getElementById(startHour + "12").innerHTML = count;
                    document.getElementById(startHour + "12").style.color = "red";

                    var temp = startHour;

                    for (var j = parseInt(startHour) + 1; j < parseInt(endHour); j++) {
                        switch (temp) {
                            case "07": temp = "08";
                                break;
                            case "08": temp = "09";
                                break;
                            case "09": temp = "10";
                                break;
                            case "10": temp = "11";
                                break;
                            case "11": temp = "12";
                                break;
                            case "12": temp = "13";
                                break;
                            case "13": temp = "14";
                                break;
                            case "14": temp = "15";
                                break;
                            case "15": temp = "16";
                                break;
                            case "16": temp = "17";
                                break;
                            case "17": temp = "18";
                                break;
                            case "18": temp = "19";
                                break;
                            default: temp = "00"
                                break;
                        }

                        document.getElementById(temp + "1").style.backgroundColor = "red";
                        document.getElementById(temp + "2").style.backgroundColor = "red";
                        document.getElementById(temp + "3").style.backgroundColor = "red";
                        document.getElementById(temp + "4").style.backgroundColor = "red";
                        document.getElementById(temp + "5").style.backgroundColor = "red";
                        document.getElementById(temp + "6").style.backgroundColor = "red";
                        document.getElementById(temp + "7").style.backgroundColor = "red";
                        document.getElementById(temp + "8").style.backgroundColor = "red";
                        document.getElementById(temp + "9").style.backgroundColor = "red";
                        document.getElementById(temp + "10").style.backgroundColor = "red";
                        document.getElementById(temp + "11").style.backgroundColor = "red";
                        document.getElementById(temp + "12").style.backgroundColor = "red";

                        document.getElementById(temp + "1").innerHTML = count;
                        document.getElementById(temp + "1").style.color = "red";
                        document.getElementById(temp + "2").innerHTML = count;
                        document.getElementById(temp + "2").style.color = "red";
                        document.getElementById(temp + "3").innerHTML = count;
                        document.getElementById(temp + "3").style.color = "red";
                        document.getElementById(temp + "4").innerHTML = count;
                        document.getElementById(temp + "4").style.color = "red";
                        document.getElementById(temp + "5").innerHTML = count;
                        document.getElementById(temp + "5").style.color = "red";
                        document.getElementById(temp + "6").innerHTML = count;
                        document.getElementById(temp + "6").style.color = "red";
                        document.getElementById(temp + "7").innerHTML = count;
                        document.getElementById(temp + "7").style.color = "red";
                        document.getElementById(temp + "8").innerHTML = count;
                        document.getElementById(temp + "8").style.color = "red";
                        document.getElementById(temp + "9").innerHTML = count;
                        document.getElementById(temp + "9").style.color = "red";
                        document.getElementById(temp + "10").innerHTML = count;
                        document.getElementById(temp + "10").style.color = "red";
                        document.getElementById(temp + "11").innerHTML = count;
                        document.getElementById(temp + "11").style.color = "red";
                        document.getElementById(temp + "12").innerHTML = count;
                        document.getElementById(temp + "12").style.color = "red";
                    }

                    repeatingFunction();
                }
            }
            else if (startMinute == "10"){
                if (parseInt(endHour) - parseInt(startHour) == 1 && endMinute == "00") {
                    document.getElementById(startHour + "3").style.backgroundColor = "red";
                    document.getElementById(startHour + "4").style.backgroundColor = "red";
                    document.getElementById(startHour + "5").style.backgroundColor = "red";
                    document.getElementById(startHour + "6").style.backgroundColor = "red";
                    document.getElementById(startHour + "7").style.backgroundColor = "red";
                    document.getElementById(startHour + "8").style.backgroundColor = "red";
                    document.getElementById(startHour + "9").style.backgroundColor = "red";
                    document.getElementById(startHour + "10").style.backgroundColor = "red";
                    document.getElementById(startHour + "11").style.backgroundColor = "red";
                    document.getElementById(startHour + "12").style.backgroundColor = "red";
                    
                    document.getElementById(startHour + "3").innerHTML = count;
                    document.getElementById(startHour + "3").style.color = "red";
                    document.getElementById(startHour + "4").innerHTML = count;
                    document.getElementById(startHour + "4").style.color = "red";
                    document.getElementById(startHour + "5").innerHTML = count;
                    document.getElementById(startHour + "5").style.color = "red";
                    document.getElementById(startHour + "6").innerHTML = count;
                    document.getElementById(startHour + "6").style.color = "red";
                    document.getElementById(startHour + "7").innerHTML = count;
                    document.getElementById(startHour + "7").style.color = "red";
                    document.getElementById(startHour + "8").innerHTML = count;
                    document.getElementById(startHour + "8").style.color = "red";
                    document.getElementById(startHour + "9").innerHTML = count;
                    document.getElementById(startHour + "9").style.color = "red";
                    document.getElementById(startHour + "10").innerHTML = count;
                    document.getElementById(startHour + "10").style.color = "red";
                    document.getElementById(startHour + "11").innerHTML = count;
                    document.getElementById(startHour + "11").style.color = "red";
                    document.getElementById(startHour + "12").innerHTML = count;
                    document.getElementById(startHour + "12").style.color = "red";
                }
                else {
                    document.getElementById(startHour + "3").style.backgroundColor = "red";
                    document.getElementById(startHour + "4").style.backgroundColor = "red";
                    document.getElementById(startHour + "5").style.backgroundColor = "red";
                    document.getElementById(startHour + "6").style.backgroundColor = "red";
                    document.getElementById(startHour + "7").style.backgroundColor = "red";
                    document.getElementById(startHour + "8").style.backgroundColor = "red";
                    document.getElementById(startHour + "9").style.backgroundColor = "red";
                    document.getElementById(startHour + "10").style.backgroundColor = "red";
                    document.getElementById(startHour + "11").style.backgroundColor = "red";
                    document.getElementById(startHour + "12").style.backgroundColor = "red";
                    
                    document.getElementById(startHour + "3").innerHTML = count;
                    document.getElementById(startHour + "3").style.color = "red";
                    document.getElementById(startHour + "4").innerHTML = count;
                    document.getElementById(startHour + "4").style.color = "red";
                    document.getElementById(startHour + "5").innerHTML = count;
                    document.getElementById(startHour + "5").style.color = "red";
                    document.getElementById(startHour + "6").innerHTML = count;
                    document.getElementById(startHour + "6").style.color = "red";
                    document.getElementById(startHour + "7").innerHTML = count;
                    document.getElementById(startHour + "7").style.color = "red";
                    document.getElementById(startHour + "8").innerHTML = count;
                    document.getElementById(startHour + "8").style.color = "red";
                    document.getElementById(startHour + "9").innerHTML = count;
                    document.getElementById(startHour + "9").style.color = "red";
                    document.getElementById(startHour + "10").innerHTML = count;
                    document.getElementById(startHour + "10").style.color = "red";
                    document.getElementById(startHour + "11").innerHTML = count;
                    document.getElementById(startHour + "11").style.color = "red";
                    document.getElementById(startHour + "12").innerHTML = count;
                    document.getElementById(startHour + "12").style.color = "red";

                    var temp = startHour;

                    for (var j = parseInt(startHour) + 1; j < parseInt(endHour); j++) {
                        switch (temp) {
                            case "07": temp = "08";
                                break;
                            case "08": temp = "09";
                                break;
                            case "09": temp = "10";
                                break;
                            case "10": temp = "11";
                                break;
                            case "11": temp = "12";
                                break;
                            case "12": temp = "13";
                                break;
                            case "13": temp = "14";
                                break;
                            case "14": temp = "15";
                                break;
                            case "15": temp = "16";
                                break;
                            case "16": temp = "17";
                                break;
                            case "17": temp = "18";
                                break;
                            case "18": temp = "19";
                                break;
                            default: temp = "00"
                                break;
                        }

                        document.getElementById(temp + "1").style.backgroundColor = "red";
                        document.getElementById(temp + "2").style.backgroundColor = "red";
                        document.getElementById(temp + "3").style.backgroundColor = "red";
                        document.getElementById(temp + "4").style.backgroundColor = "red";
                        document.getElementById(temp + "5").style.backgroundColor = "red";
                        document.getElementById(temp + "6").style.backgroundColor = "red";
                        document.getElementById(temp + "7").style.backgroundColor = "red";
                        document.getElementById(temp + "8").style.backgroundColor = "red";
                        document.getElementById(temp + "9").style.backgroundColor = "red";
                        document.getElementById(temp + "10").style.backgroundColor = "red";
                        document.getElementById(temp + "11").style.backgroundColor = "red";
                        document.getElementById(temp + "12").style.backgroundColor = "red";

                        document.getElementById(temp + "1").innerHTML = count;
                        document.getElementById(temp + "1").style.color = "red";
                        document.getElementById(temp + "2").innerHTML = count;
                        document.getElementById(temp + "2").style.color = "red";
                        document.getElementById(temp + "3").innerHTML = count;
                        document.getElementById(temp + "3").style.color = "red";
                        document.getElementById(temp + "4").innerHTML = count;
                        document.getElementById(temp + "4").style.color = "red";
                        document.getElementById(temp + "5").innerHTML = count;
                        document.getElementById(temp + "5").style.color = "red";
                        document.getElementById(temp + "6").innerHTML = count;
                        document.getElementById(temp + "6").style.color = "red";
                        document.getElementById(temp + "7").innerHTML = count;
                        document.getElementById(temp + "7").style.color = "red";
                        document.getElementById(temp + "8").innerHTML = count;
                        document.getElementById(temp + "8").style.color = "red";
                        document.getElementById(temp + "9").innerHTML = count;
                        document.getElementById(temp + "9").style.color = "red";
                        document.getElementById(temp + "10").innerHTML = count;
                        document.getElementById(temp + "10").style.color = "red";
                        document.getElementById(temp + "11").innerHTML = count;
                        document.getElementById(temp + "11").style.color = "red";
                        document.getElementById(temp + "12").innerHTML = count;
                        document.getElementById(temp + "12").style.color = "red";
                    }

                    repeatingFunction();
                }
            }
            else if (startMinute == "15") {
                if (parseInt(endHour) - parseInt(startHour) == 1 && endMinute == "00") {
                    document.getElementById(startHour + "4").style.backgroundColor = "red";
                    document.getElementById(startHour + "5").style.backgroundColor = "red";
                    document.getElementById(startHour + "6").style.backgroundColor = "red";
                    document.getElementById(startHour + "7").style.backgroundColor = "red";
                    document.getElementById(startHour + "8").style.backgroundColor = "red";
                    document.getElementById(startHour + "9").style.backgroundColor = "red";
                    document.getElementById(startHour + "10").style.backgroundColor = "red";
                    document.getElementById(startHour + "11").style.backgroundColor = "red";
                    document.getElementById(startHour + "12").style.backgroundColor = "red";
                    
                    document.getElementById(startHour + "4").innerHTML = count;
                    document.getElementById(startHour + "4").style.color = "red";
                    document.getElementById(startHour + "5").innerHTML = count;
                    document.getElementById(startHour + "5").style.color = "red";
                    document.getElementById(startHour + "6").innerHTML = count;
                    document.getElementById(startHour + "6").style.color = "red";
                    document.getElementById(startHour + "7").innerHTML = count;
                    document.getElementById(startHour + "7").style.color = "red";
                    document.getElementById(startHour + "8").innerHTML = count;
                    document.getElementById(startHour + "8").style.color = "red";
                    document.getElementById(startHour + "9").innerHTML = count;
                    document.getElementById(startHour + "9").style.color = "red";
                    document.getElementById(startHour + "10").innerHTML = count;
                    document.getElementById(startHour + "10").style.color = "red";
                    document.getElementById(startHour + "11").innerHTML = count;
                    document.getElementById(startHour + "11").style.color = "red";
                    document.getElementById(startHour + "12").innerHTML = count;
                    document.getElementById(startHour + "12").style.color = "red";
                }
                else {
                    document.getElementById(startHour + "4").style.backgroundColor = "red";
                    document.getElementById(startHour + "5").style.backgroundColor = "red";
                    document.getElementById(startHour + "6").style.backgroundColor = "red";
                    document.getElementById(startHour + "7").style.backgroundColor = "red";
                    document.getElementById(startHour + "8").style.backgroundColor = "red";
                    document.getElementById(startHour + "9").style.backgroundColor = "red";
                    document.getElementById(startHour + "10").style.backgroundColor = "red";
                    document.getElementById(startHour + "11").style.backgroundColor = "red";
                    document.getElementById(startHour + "12").style.backgroundColor = "red";
                    
                    document.getElementById(startHour + "4").innerHTML = count;
                    document.getElementById(startHour + "4").style.color = "red";
                    document.getElementById(startHour + "5").innerHTML = count;
                    document.getElementById(startHour + "5").style.color = "red";
                    document.getElementById(startHour + "6").innerHTML = count;
                    document.getElementById(startHour + "6").style.color = "red";
                    document.getElementById(startHour + "7").innerHTML = count;
                    document.getElementById(startHour + "7").style.color = "red";
                    document.getElementById(startHour + "8").innerHTML = count;
                    document.getElementById(startHour + "8").style.color = "red";
                    document.getElementById(startHour + "9").innerHTML = count;
                    document.getElementById(startHour + "9").style.color = "red";
                    document.getElementById(startHour + "10").innerHTML = count;
                    document.getElementById(startHour + "10").style.color = "red";
                    document.getElementById(startHour + "11").innerHTML = count;
                    document.getElementById(startHour + "11").style.color = "red";
                    document.getElementById(startHour + "12").innerHTML = count;
                    document.getElementById(startHour + "12").style.color = "red";

                    var temp = startHour;

                    for (var j = parseInt(startHour) + 1; j < parseInt(endHour); j++) {
                        switch (temp) {
                            case "07": temp = "08";
                                break;
                            case "08": temp = "09";
                                break;
                            case "09": temp = "10";
                                break;
                            case "10": temp = "11";
                                break;
                            case "11": temp = "12";
                                break;
                            case "12": temp = "13";
                                break;
                            case "13": temp = "14";
                                break;
                            case "14": temp = "15";
                                break;
                            case "15": temp = "16";
                                break;
                            case "16": temp = "17";
                                break;
                            case "17": temp = "18";
                                break;
                            case "18": temp = "19";
                                break;
                            default: temp = "00"
                                break;
                        }

                        document.getElementById(temp + "1").style.backgroundColor = "red";
                        document.getElementById(temp + "2").style.backgroundColor = "red";
                        document.getElementById(temp + "3").style.backgroundColor = "red";
                        document.getElementById(temp + "4").style.backgroundColor = "red";
                        document.getElementById(temp + "5").style.backgroundColor = "red";
                        document.getElementById(temp + "6").style.backgroundColor = "red";
                        document.getElementById(temp + "7").style.backgroundColor = "red";
                        document.getElementById(temp + "8").style.backgroundColor = "red";
                        document.getElementById(temp + "9").style.backgroundColor = "red";
                        document.getElementById(temp + "10").style.backgroundColor = "red";
                        document.getElementById(temp + "11").style.backgroundColor = "red";
                        document.getElementById(temp + "12").style.backgroundColor = "red";

                        document.getElementById(temp + "1").innerHTML = count;
                        document.getElementById(temp + "1").style.color = "red";
                        document.getElementById(temp + "2").innerHTML = count;
                        document.getElementById(temp + "2").style.color = "red";
                        document.getElementById(temp + "3").innerHTML = count;
                        document.getElementById(temp + "3").style.color = "red";
                        document.getElementById(temp + "4").innerHTML = count;
                        document.getElementById(temp + "4").style.color = "red";
                        document.getElementById(temp + "5").innerHTML = count;
                        document.getElementById(temp + "5").style.color = "red";
                        document.getElementById(temp + "6").innerHTML = count;
                        document.getElementById(temp + "6").style.color = "red";
                        document.getElementById(temp + "7").innerHTML = count;
                        document.getElementById(temp + "7").style.color = "red";
                        document.getElementById(temp + "8").innerHTML = count;
                        document.getElementById(temp + "8").style.color = "red";
                        document.getElementById(temp + "9").innerHTML = count;
                        document.getElementById(temp + "9").style.color = "red";
                        document.getElementById(temp + "10").innerHTML = count;
                        document.getElementById(temp + "10").style.color = "red";
                        document.getElementById(temp + "11").innerHTML = count;
                        document.getElementById(temp + "11").style.color = "red";
                        document.getElementById(temp + "12").innerHTML = count;
                        document.getElementById(temp + "12").style.color = "red";
                    }

                    repeatingFunction();
                }
            }
            else if (startMinute == "20") {
                if (parseInt(endHour) - parseInt(startHour) == 1 && endMinute == "00") {
                    document.getElementById(startHour + "5").style.backgroundColor = "red";
                    document.getElementById(startHour + "6").style.backgroundColor = "red";
                    document.getElementById(startHour + "7").style.backgroundColor = "red";
                    document.getElementById(startHour + "8").style.backgroundColor = "red";
                    document.getElementById(startHour + "9").style.backgroundColor = "red";
                    document.getElementById(startHour + "10").style.backgroundColor = "red";
                    document.getElementById(startHour + "11").style.backgroundColor = "red";
                    document.getElementById(startHour + "12").style.backgroundColor = "red";
                    
                    document.getElementById(startHour + "5").innerHTML = count;
                    document.getElementById(startHour + "5").style.color = "red";
                    document.getElementById(startHour + "6").innerHTML = count;
                    document.getElementById(startHour + "6").style.color = "red";
                    document.getElementById(startHour + "7").innerHTML = count;
                    document.getElementById(startHour + "7").style.color = "red";
                    document.getElementById(startHour + "8").innerHTML = count;
                    document.getElementById(startHour + "8").style.color = "red";
                    document.getElementById(startHour + "9").innerHTML = count;
                    document.getElementById(startHour + "9").style.color = "red";
                    document.getElementById(startHour + "10").innerHTML = count;
                    document.getElementById(startHour + "10").style.color = "red";
                    document.getElementById(startHour + "11").innerHTML = count;
                    document.getElementById(startHour + "11").style.color = "red";
                    document.getElementById(startHour + "12").innerHTML = count;
                    document.getElementById(startHour + "12").style.color = "red";
                }
                else {
                    document.getElementById(startHour + "5").style.backgroundColor = "red";
                    document.getElementById(startHour + "6").style.backgroundColor = "red";
                    document.getElementById(startHour + "7").style.backgroundColor = "red";
                    document.getElementById(startHour + "8").style.backgroundColor = "red";
                    document.getElementById(startHour + "9").style.backgroundColor = "red";
                    document.getElementById(startHour + "10").style.backgroundColor = "red";
                    document.getElementById(startHour + "11").style.backgroundColor = "red";
                    document.getElementById(startHour + "12").style.backgroundColor = "red";
                    
                    document.getElementById(startHour + "5").innerHTML = count;
                    document.getElementById(startHour + "5").style.color = "red";
                    document.getElementById(startHour + "6").innerHTML = count;
                    document.getElementById(startHour + "6").style.color = "red";
                    document.getElementById(startHour + "7").innerHTML = count;
                    document.getElementById(startHour + "7").style.color = "red";
                    document.getElementById(startHour + "8").innerHTML = count;
                    document.getElementById(startHour + "8").style.color = "red";
                    document.getElementById(startHour + "9").innerHTML = count;
                    document.getElementById(startHour + "9").style.color = "red";
                    document.getElementById(startHour + "10").innerHTML = count;
                    document.getElementById(startHour + "10").style.color = "red";
                    document.getElementById(startHour + "11").innerHTML = count;
                    document.getElementById(startHour + "11").style.color = "red";
                    document.getElementById(startHour + "12").innerHTML = count;
                    document.getElementById(startHour + "12").style.color = "red";

                    var temp = startHour;

                    for (var j = parseInt(startHour) + 1; j < parseInt(endHour); j++) {
                        switch (temp) {
                            case "07": temp = "08";
                                break;
                            case "08": temp = "09";
                                break;
                            case "09": temp = "10";
                                break;
                            case "10": temp = "11";
                                break;
                            case "11": temp = "12";
                                break;
                            case "12": temp = "13";
                                break;
                            case "13": temp = "14";
                                break;
                            case "14": temp = "15";
                                break;
                            case "15": temp = "16";
                                break;
                            case "16": temp = "17";
                                break;
                            case "17": temp = "18";
                                break;
                            case "18": temp = "19";
                                break;
                            default: temp = "00"
                                break;
                        }

                        document.getElementById(temp + "1").style.backgroundColor = "red";
                        document.getElementById(temp + "2").style.backgroundColor = "red";
                        document.getElementById(temp + "3").style.backgroundColor = "red";
                        document.getElementById(temp + "4").style.backgroundColor = "red";
                        document.getElementById(temp + "5").style.backgroundColor = "red";
                        document.getElementById(temp + "6").style.backgroundColor = "red";
                        document.getElementById(temp + "7").style.backgroundColor = "red";
                        document.getElementById(temp + "8").style.backgroundColor = "red";
                        document.getElementById(temp + "9").style.backgroundColor = "red";
                        document.getElementById(temp + "10").style.backgroundColor = "red";
                        document.getElementById(temp + "11").style.backgroundColor = "red";
                        document.getElementById(temp + "12").style.backgroundColor = "red";

                        document.getElementById(temp + "1").innerHTML = count;
                        document.getElementById(temp + "1").style.color = "red";
                        document.getElementById(temp + "2").innerHTML = count;
                        document.getElementById(temp + "2").style.color = "red";
                        document.getElementById(temp + "3").innerHTML = count;
                        document.getElementById(temp + "3").style.color = "red";
                        document.getElementById(temp + "4").innerHTML = count;
                        document.getElementById(temp + "4").style.color = "red";
                        document.getElementById(temp + "5").innerHTML = count;
                        document.getElementById(temp + "5").style.color = "red";
                        document.getElementById(temp + "6").innerHTML = count;
                        document.getElementById(temp + "6").style.color = "red";
                        document.getElementById(temp + "7").innerHTML = count;
                        document.getElementById(temp + "7").style.color = "red";
                        document.getElementById(temp + "8").innerHTML = count;
                        document.getElementById(temp + "8").style.color = "red";
                        document.getElementById(temp + "9").innerHTML = count;
                        document.getElementById(temp + "9").style.color = "red";
                        document.getElementById(temp + "10").innerHTML = count;
                        document.getElementById(temp + "10").style.color = "red";
                        document.getElementById(temp + "11").innerHTML = count;
                        document.getElementById(temp + "11").style.color = "red";
                        document.getElementById(temp + "12").innerHTML = count;
                        document.getElementById(temp + "12").style.color = "red";
                    }

                    repeatingFunction();
                }
            }
            else if (startMinute == "25") {
                if (parseInt(endHour) - parseInt(startHour) == 1 && endMinute == "00") {
                    document.getElementById(startHour + "6").style.backgroundColor = "red";
                    document.getElementById(startHour + "7").style.backgroundColor = "red";
                    document.getElementById(startHour + "8").style.backgroundColor = "red";
                    document.getElementById(startHour + "9").style.backgroundColor = "red";
                    document.getElementById(startHour + "10").style.backgroundColor = "red";
                    document.getElementById(startHour + "11").style.backgroundColor = "red";
                    document.getElementById(startHour + "12").style.backgroundColor = "red";
                    
                    document.getElementById(startHour + "6").innerHTML = count;
                    document.getElementById(startHour + "6").style.color = "red";
                    document.getElementById(startHour + "7").innerHTML = count;
                    document.getElementById(startHour + "7").style.color = "red";
                    document.getElementById(startHour + "8").innerHTML = count;
                    document.getElementById(startHour + "8").style.color = "red";
                    document.getElementById(startHour + "9").innerHTML = count;
                    document.getElementById(startHour + "9").style.color = "red";
                    document.getElementById(startHour + "10").innerHTML = count;
                    document.getElementById(startHour + "10").style.color = "red";
                    document.getElementById(startHour + "11").innerHTML = count;
                    document.getElementById(startHour + "11").style.color = "red";
                    document.getElementById(startHour + "12").innerHTML = count;
                    document.getElementById(startHour + "12").style.color = "red";
                }
                else {
                    document.getElementById(startHour + "6").style.backgroundColor = "red";
                    document.getElementById(startHour + "7").style.backgroundColor = "red";
                    document.getElementById(startHour + "8").style.backgroundColor = "red";
                    document.getElementById(startHour + "9").style.backgroundColor = "red";
                    document.getElementById(startHour + "10").style.backgroundColor = "red";
                    document.getElementById(startHour + "11").style.backgroundColor = "red";
                    document.getElementById(startHour + "12").style.backgroundColor = "red";
                    
                    document.getElementById(startHour + "6").innerHTML = count;
                    document.getElementById(startHour + "6").style.color = "red";
                    document.getElementById(startHour + "7").innerHTML = count;
                    document.getElementById(startHour + "7").style.color = "red";
                    document.getElementById(startHour + "8").innerHTML = count;
                    document.getElementById(startHour + "8").style.color = "red";
                    document.getElementById(startHour + "9").innerHTML = count;
                    document.getElementById(startHour + "9").style.color = "red";
                    document.getElementById(startHour + "10").innerHTML = count;
                    document.getElementById(startHour + "10").style.color = "red";
                    document.getElementById(startHour + "11").innerHTML = count;
                    document.getElementById(startHour + "11").style.color = "red";
                    document.getElementById(startHour + "12").innerHTML = count;
                    document.getElementById(startHour + "12").style.color = "red";

                    var temp = startHour;

                    for (var j = parseInt(startHour) + 1; j < parseInt(endHour); j++) {
                        switch (temp) {
                            case "07": temp = "08";
                                break;
                            case "08": temp = "09";
                                break;
                            case "09": temp = "10";
                                break;
                            case "10": temp = "11";
                                break;
                            case "11": temp = "12";
                                break;
                            case "12": temp = "13";
                                break;
                            case "13": temp = "14";
                                break;
                            case "14": temp = "15";
                                break;
                            case "15": temp = "16";
                                break;
                            case "16": temp = "17";
                                break;
                            case "17": temp = "18";
                                break;
                            case "18": temp = "19";
                                break;
                            default: temp = "00"
                                break;
                        }

                        document.getElementById(temp + "1").style.backgroundColor = "red";
                        document.getElementById(temp + "2").style.backgroundColor = "red";
                        document.getElementById(temp + "3").style.backgroundColor = "red";
                        document.getElementById(temp + "4").style.backgroundColor = "red";
                        document.getElementById(temp + "5").style.backgroundColor = "red";
                        document.getElementById(temp + "6").style.backgroundColor = "red";
                        document.getElementById(temp + "7").style.backgroundColor = "red";
                        document.getElementById(temp + "8").style.backgroundColor = "red";
                        document.getElementById(temp + "9").style.backgroundColor = "red";
                        document.getElementById(temp + "10").style.backgroundColor = "red";
                        document.getElementById(temp + "11").style.backgroundColor = "red";
                        document.getElementById(temp + "12").style.backgroundColor = "red";

                        document.getElementById(temp + "1").innerHTML = count;
                        document.getElementById(temp + "1").style.color = "red";
                        document.getElementById(temp + "2").innerHTML = count;
                        document.getElementById(temp + "2").style.color = "red";
                        document.getElementById(temp + "3").innerHTML = count;
                        document.getElementById(temp + "3").style.color = "red";
                        document.getElementById(temp + "4").innerHTML = count;
                        document.getElementById(temp + "4").style.color = "red";
                        document.getElementById(temp + "5").innerHTML = count;
                        document.getElementById(temp + "5").style.color = "red";
                        document.getElementById(temp + "6").innerHTML = count;
                        document.getElementById(temp + "6").style.color = "red";
                        document.getElementById(temp + "7").innerHTML = count;
                        document.getElementById(temp + "7").style.color = "red";
                        document.getElementById(temp + "8").innerHTML = count;
                        document.getElementById(temp + "8").style.color = "red";
                        document.getElementById(temp + "9").innerHTML = count;
                        document.getElementById(temp + "9").style.color = "red";
                        document.getElementById(temp + "10").innerHTML = count;
                        document.getElementById(temp + "10").style.color = "red";
                        document.getElementById(temp + "11").innerHTML = count;
                        document.getElementById(temp + "11").style.color = "red";
                        document.getElementById(temp + "12").innerHTML = count;
                        document.getElementById(temp + "12").style.color = "red";
                    }

                    repeatingFunction();
                }
            }
            else if (startMinute == "30") {
                if (parseInt(endHour) - parseInt(startHour) == 1 && endMinute == "00") {
                    document.getElementById(startHour + "7").style.backgroundColor = "red";
                    document.getElementById(startHour + "8").style.backgroundColor = "red";
                    document.getElementById(startHour + "9").style.backgroundColor = "red";
                    document.getElementById(startHour + "10").style.backgroundColor = "red";
                    document.getElementById(startHour + "11").style.backgroundColor = "red";
                    document.getElementById(startHour + "12").style.backgroundColor = "red";
                    
                    document.getElementById(startHour + "7").innerHTML = count;
                    document.getElementById(startHour + "7").style.color = "red";
                    document.getElementById(startHour + "8").innerHTML = count;
                    document.getElementById(startHour + "8").style.color = "red";
                    document.getElementById(startHour + "9").innerHTML = count;
                    document.getElementById(startHour + "9").style.color = "red";
                    document.getElementById(startHour + "10").innerHTML = count;
                    document.getElementById(startHour + "10").style.color = "red";
                    document.getElementById(startHour + "11").innerHTML = count;
                    document.getElementById(startHour + "11").style.color = "red";
                    document.getElementById(startHour + "12").innerHTML = count;
                    document.getElementById(startHour + "12").style.color = "red";
                }
                else {
                    document.getElementById(startHour + "7").style.backgroundColor = "red";
                    document.getElementById(startHour + "8").style.backgroundColor = "red";
                    document.getElementById(startHour + "9").style.backgroundColor = "red";
                    document.getElementById(startHour + "10").style.backgroundColor = "red";
                    document.getElementById(startHour + "11").style.backgroundColor = "red";
                    document.getElementById(startHour + "12").style.backgroundColor = "red";
                    
                    document.getElementById(startHour + "7").innerHTML = count;
                    document.getElementById(startHour + "7").style.color = "red";
                    document.getElementById(startHour + "8").innerHTML = count;
                    document.getElementById(startHour + "8").style.color = "red";
                    document.getElementById(startHour + "9").innerHTML = count;
                    document.getElementById(startHour + "9").style.color = "red";
                    document.getElementById(startHour + "10").innerHTML = count;
                    document.getElementById(startHour + "10").style.color = "red";
                    document.getElementById(startHour + "11").innerHTML = count;
                    document.getElementById(startHour + "11").style.color = "red";
                    document.getElementById(startHour + "12").innerHTML = count;
                    document.getElementById(startHour + "12").style.color = "red";

                    var temp = startHour;

                    for (var j = parseInt(startHour) + 1; j < parseInt(endHour); j++) {
                        switch (temp) {
                            case "07": temp = "08";
                                break;
                            case "08": temp = "09";
                                break;
                            case "09": temp = "10";
                                break;
                            case "10": temp = "11";
                                break;
                            case "11": temp = "12";
                                break;
                            case "12": temp = "13";
                                break;
                            case "13": temp = "14";
                                break;
                            case "14": temp = "15";
                                break;
                            case "15": temp = "16";
                                break;
                            case "16": temp = "17";
                                break;
                            case "17": temp = "18";
                                break;
                            case "18": temp = "19";
                                break;
                            default: temp = "00"
                                break;
                        }

                        document.getElementById(temp + "1").style.backgroundColor = "red";
                        document.getElementById(temp + "2").style.backgroundColor = "red";
                        document.getElementById(temp + "3").style.backgroundColor = "red";
                        document.getElementById(temp + "4").style.backgroundColor = "red";
                        document.getElementById(temp + "5").style.backgroundColor = "red";
                        document.getElementById(temp + "6").style.backgroundColor = "red";
                        document.getElementById(temp + "7").style.backgroundColor = "red";
                        document.getElementById(temp + "8").style.backgroundColor = "red";
                        document.getElementById(temp + "9").style.backgroundColor = "red";
                        document.getElementById(temp + "10").style.backgroundColor = "red";
                        document.getElementById(temp + "11").style.backgroundColor = "red";
                        document.getElementById(temp + "12").style.backgroundColor = "red";

                        document.getElementById(temp + "1").innerHTML = count;
                        document.getElementById(temp + "1").style.color = "red";
                        document.getElementById(temp + "2").innerHTML = count;
                        document.getElementById(temp + "2").style.color = "red";
                        document.getElementById(temp + "3").innerHTML = count;
                        document.getElementById(temp + "3").style.color = "red";
                        document.getElementById(temp + "4").innerHTML = count;
                        document.getElementById(temp + "4").style.color = "red";
                        document.getElementById(temp + "5").innerHTML = count;
                        document.getElementById(temp + "5").style.color = "red";
                        document.getElementById(temp + "6").innerHTML = count;
                        document.getElementById(temp + "6").style.color = "red";
                        document.getElementById(temp + "7").innerHTML = count;
                        document.getElementById(temp + "7").style.color = "red";
                        document.getElementById(temp + "8").innerHTML = count;
                        document.getElementById(temp + "8").style.color = "red";
                        document.getElementById(temp + "9").innerHTML = count;
                        document.getElementById(temp + "9").style.color = "red";
                        document.getElementById(temp + "10").innerHTML = count;
                        document.getElementById(temp + "10").style.color = "red";
                        document.getElementById(temp + "11").innerHTML = count;
                        document.getElementById(temp + "11").style.color = "red";
                        document.getElementById(temp + "12").innerHTML = count;
                        document.getElementById(temp + "12").style.color = "red";
                    }

                    repeatingFunction();
                }
            }
            else if (startMinute == "35") {
                if (parseInt(endHour) - parseInt(startHour) == 1 && endMinute == "00") {
                    document.getElementById(startHour + "8").style.backgroundColor = "red";
                    document.getElementById(startHour + "9").style.backgroundColor = "red";
                    document.getElementById(startHour + "10").style.backgroundColor = "red";
                    document.getElementById(startHour + "11").style.backgroundColor = "red";
                    document.getElementById(startHour + "12").style.backgroundColor = "red";
                    
                    document.getElementById(startHour + "8").innerHTML = count;
                    document.getElementById(startHour + "8").style.color = "red";
                    document.getElementById(startHour + "9").innerHTML = count;
                    document.getElementById(startHour + "9").style.color = "red";
                    document.getElementById(startHour + "10").innerHTML = count;
                    document.getElementById(startHour + "10").style.color = "red";
                    document.getElementById(startHour + "11").innerHTML = count;
                    document.getElementById(startHour + "11").style.color = "red";
                    document.getElementById(startHour + "12").innerHTML = count;
                    document.getElementById(startHour + "12").style.color = "red";
                }
                else {
                    document.getElementById(startHour + "8").style.backgroundColor = "red";
                    document.getElementById(startHour + "9").style.backgroundColor = "red";
                    document.getElementById(startHour + "10").style.backgroundColor = "red";
                    document.getElementById(startHour + "11").style.backgroundColor = "red";
                    document.getElementById(startHour + "12").style.backgroundColor = "red";
                    
                    document.getElementById(startHour + "8").innerHTML = count;
                    document.getElementById(startHour + "8").style.color = "red";
                    document.getElementById(startHour + "9").innerHTML = count;
                    document.getElementById(startHour + "9").style.color = "red";
                    document.getElementById(startHour + "10").innerHTML = count;
                    document.getElementById(startHour + "10").style.color = "red";
                    document.getElementById(startHour + "11").innerHTML = count;
                    document.getElementById(startHour + "11").style.color = "red";
                    document.getElementById(startHour + "12").innerHTML = count;
                    document.getElementById(startHour + "12").style.color = "red";

                    var temp = startHour;

                    for (var j = parseInt(startHour) + 1; j < parseInt(endHour); j++) {
                        switch (temp) {
                            case "07": temp = "08";
                                break;
                            case "08": temp = "09";
                                break;
                            case "09": temp = "10";
                                break;
                            case "10": temp = "11";
                                break;
                            case "11": temp = "12";
                                break;
                            case "12": temp = "13";
                                break;
                            case "13": temp = "14";
                                break;
                            case "14": temp = "15";
                                break;
                            case "15": temp = "16";
                                break;
                            case "16": temp = "17";
                                break;
                            case "17": temp = "18";
                                break;
                            case "18": temp = "19";
                                break;
                            default: temp = "00"
                                break;
                        }

                        document.getElementById(temp + "1").style.backgroundColor = "red";
                        document.getElementById(temp + "2").style.backgroundColor = "red";
                        document.getElementById(temp + "3").style.backgroundColor = "red";
                        document.getElementById(temp + "4").style.backgroundColor = "red";
                        document.getElementById(temp + "5").style.backgroundColor = "red";
                        document.getElementById(temp + "6").style.backgroundColor = "red";
                        document.getElementById(temp + "7").style.backgroundColor = "red";
                        document.getElementById(temp + "8").style.backgroundColor = "red";
                        document.getElementById(temp + "9").style.backgroundColor = "red";
                        document.getElementById(temp + "10").style.backgroundColor = "red";
                        document.getElementById(temp + "11").style.backgroundColor = "red";
                        document.getElementById(temp + "12").style.backgroundColor = "red";

                        document.getElementById(temp + "1").innerHTML = count;
                        document.getElementById(temp + "1").style.color = "red";
                        document.getElementById(temp + "2").innerHTML = count;
                        document.getElementById(temp + "2").style.color = "red";
                        document.getElementById(temp + "3").innerHTML = count;
                        document.getElementById(temp + "3").style.color = "red";
                        document.getElementById(temp + "4").innerHTML = count;
                        document.getElementById(temp + "4").style.color = "red";
                        document.getElementById(temp + "5").innerHTML = count;
                        document.getElementById(temp + "5").style.color = "red";
                        document.getElementById(temp + "6").innerHTML = count;
                        document.getElementById(temp + "6").style.color = "red";
                        document.getElementById(temp + "7").innerHTML = count;
                        document.getElementById(temp + "7").style.color = "red";
                        document.getElementById(temp + "8").innerHTML = count;
                        document.getElementById(temp + "8").style.color = "red";
                        document.getElementById(temp + "9").innerHTML = count;
                        document.getElementById(temp + "9").style.color = "red";
                        document.getElementById(temp + "10").innerHTML = count;
                        document.getElementById(temp + "10").style.color = "red";
                        document.getElementById(temp + "11").innerHTML = count;
                        document.getElementById(temp + "11").style.color = "red";
                        document.getElementById(temp + "12").innerHTML = count;
                        document.getElementById(temp + "12").style.color = "red";
                    }

                    repeatingFunction();
                }
            }
            else if (startMinute == "40") {
                if (parseInt(endHour) - parseInt(startHour) == 1 && endMinute == "00") {
                    document.getElementById(startHour + "9").style.backgroundColor = "red";
                    document.getElementById(startHour + "10").style.backgroundColor = "red";
                    document.getElementById(startHour + "11").style.backgroundColor = "red";
                    document.getElementById(startHour + "12").style.backgroundColor = "red";
                    
                    document.getElementById(startHour + "9").innerHTML = count;
                    document.getElementById(startHour + "9").style.color = "red";
                    document.getElementById(startHour + "10").innerHTML = count;
                    document.getElementById(startHour + "10").style.color = "red";
                    document.getElementById(startHour + "11").innerHTML = count;
                    document.getElementById(startHour + "11").style.color = "red";
                    document.getElementById(startHour + "12").innerHTML = count;
                    document.getElementById(startHour + "12").style.color = "red";
                }
                else {
                    document.getElementById(startHour + "9").style.backgroundColor = "red";
                    document.getElementById(startHour + "10").style.backgroundColor = "red";
                    document.getElementById(startHour + "11").style.backgroundColor = "red";
                    document.getElementById(startHour + "12").style.backgroundColor = "red";
                    
                    document.getElementById(startHour + "9").innerHTML = count;
                    document.getElementById(startHour + "9").style.color = "red";
                    document.getElementById(startHour + "10").innerHTML = count;
                    document.getElementById(startHour + "10").style.color = "red";
                    document.getElementById(startHour + "11").innerHTML = count;
                    document.getElementById(startHour + "11").style.color = "red";
                    document.getElementById(startHour + "12").innerHTML = count;
                    document.getElementById(startHour + "12").style.color = "red";

                    var temp = startHour;

                    for (var j = parseInt(startHour) + 1; j < parseInt(endHour); j++) {
                        switch (temp) {
                            case "07": temp = "08";
                                break;
                            case "08": temp = "09";
                                break;
                            case "09": temp = "10";
                                break;
                            case "10": temp = "11";
                                break;
                            case "11": temp = "12";
                                break;
                            case "12": temp = "13";
                                break;
                            case "13": temp = "14";
                                break;
                            case "14": temp = "15";
                                break;
                            case "15": temp = "16";
                                break;
                            case "16": temp = "17";
                                break;
                            case "17": temp = "18";
                                break;
                            case "18": temp = "19";
                                break;
                            default: temp = "00"
                                break;
                        }

                        document.getElementById(temp + "1").style.backgroundColor = "red";
                        document.getElementById(temp + "2").style.backgroundColor = "red";
                        document.getElementById(temp + "3").style.backgroundColor = "red";
                        document.getElementById(temp + "4").style.backgroundColor = "red";
                        document.getElementById(temp + "5").style.backgroundColor = "red";
                        document.getElementById(temp + "6").style.backgroundColor = "red";
                        document.getElementById(temp + "7").style.backgroundColor = "red";
                        document.getElementById(temp + "8").style.backgroundColor = "red";
                        document.getElementById(temp + "9").style.backgroundColor = "red";
                        document.getElementById(temp + "10").style.backgroundColor = "red";
                        document.getElementById(temp + "11").style.backgroundColor = "red";
                        document.getElementById(temp + "12").style.backgroundColor = "red";

                        document.getElementById(temp + "1").innerHTML = count;
                        document.getElementById(temp + "1").style.color = "red";
                        document.getElementById(temp + "2").innerHTML = count;
                        document.getElementById(temp + "2").style.color = "red";
                        document.getElementById(temp + "3").innerHTML = count;
                        document.getElementById(temp + "3").style.color = "red";
                        document.getElementById(temp + "4").innerHTML = count;
                        document.getElementById(temp + "4").style.color = "red";
                        document.getElementById(temp + "5").innerHTML = count;
                        document.getElementById(temp + "5").style.color = "red";
                        document.getElementById(temp + "6").innerHTML = count;
                        document.getElementById(temp + "6").style.color = "red";
                        document.getElementById(temp + "7").innerHTML = count;
                        document.getElementById(temp + "7").style.color = "red";
                        document.getElementById(temp + "8").innerHTML = count;
                        document.getElementById(temp + "8").style.color = "red";
                        document.getElementById(temp + "9").innerHTML = count;
                        document.getElementById(temp + "9").style.color = "red";
                        document.getElementById(temp + "10").innerHTML = count;
                        document.getElementById(temp + "10").style.color = "red";
                        document.getElementById(temp + "11").innerHTML = count;
                        document.getElementById(temp + "11").style.color = "red";
                        document.getElementById(temp + "12").innerHTML = count;
                        document.getElementById(temp + "12").style.color = "red";
                    }

                    repeatingFunction();
                }
            }
            else if (startMinute == "45") {
                if (parseInt(endHour) - parseInt(startHour) == 1 && endMinute == "00") {
                    document.getElementById(startHour + "10").style.backgroundColor = "red";
                    document.getElementById(startHour + "11").style.backgroundColor = "red";
                    document.getElementById(startHour + "12").style.backgroundColor = "red";
                    
                    document.getElementById(startHour + "10").innerHTML = count;
                    document.getElementById(startHour + "10").style.color = "red";
                    document.getElementById(startHour + "11").innerHTML = count;
                    document.getElementById(startHour + "11").style.color = "red";
                    document.getElementById(startHour + "12").innerHTML = count;
                    document.getElementById(startHour + "12").style.color = "red";
                }
                else {
                    document.getElementById(startHour + "10").style.backgroundColor = "red";
                    document.getElementById(startHour + "11").style.backgroundColor = "red";
                    document.getElementById(startHour + "12").style.backgroundColor = "red";
                    
                    document.getElementById(startHour + "10").innerHTML = count;
                    document.getElementById(startHour + "10").style.color = "red";
                    document.getElementById(startHour + "11").innerHTML = count;
                    document.getElementById(startHour + "11").style.color = "red";
                    document.getElementById(startHour + "12").innerHTML = count;
                    document.getElementById(startHour + "12").style.color = "red";

                    var temp = startHour;

                    for (var j = parseInt(startHour) + 1; j < parseInt(endHour); j++) {
                        switch (temp) {
                            case "07": temp = "08";
                                break;
                            case "08": temp = "09";
                                break;
                            case "09": temp = "10";
                                break;
                            case "10": temp = "11";
                                break;
                            case "11": temp = "12";
                                break;
                            case "12": temp = "13";
                                break;
                            case "13": temp = "14";
                                break;
                            case "14": temp = "15";
                                break;
                            case "15": temp = "16";
                                break;
                            case "16": temp = "17";
                                break;
                            case "17": temp = "18";
                                break;
                            case "18": temp = "19";
                                break;
                            default: temp = "00"
                                break;
                        }

                        document.getElementById(temp + "1").style.backgroundColor = "red";
                        document.getElementById(temp + "2").style.backgroundColor = "red";
                        document.getElementById(temp + "3").style.backgroundColor = "red";
                        document.getElementById(temp + "4").style.backgroundColor = "red";
                        document.getElementById(temp + "5").style.backgroundColor = "red";
                        document.getElementById(temp + "6").style.backgroundColor = "red";
                        document.getElementById(temp + "7").style.backgroundColor = "red";
                        document.getElementById(temp + "8").style.backgroundColor = "red";
                        document.getElementById(temp + "9").style.backgroundColor = "red";
                        document.getElementById(temp + "10").style.backgroundColor = "red";
                        document.getElementById(temp + "11").style.backgroundColor = "red";
                        document.getElementById(temp + "12").style.backgroundColor = "red";

                        document.getElementById(temp + "1").innerHTML = count;
                        document.getElementById(temp + "1").style.color = "red";
                        document.getElementById(temp + "2").innerHTML = count;
                        document.getElementById(temp + "2").style.color = "red";
                        document.getElementById(temp + "3").innerHTML = count;
                        document.getElementById(temp + "3").style.color = "red";
                        document.getElementById(temp + "4").innerHTML = count;
                        document.getElementById(temp + "4").style.color = "red";
                        document.getElementById(temp + "5").innerHTML = count;
                        document.getElementById(temp + "5").style.color = "red";
                        document.getElementById(temp + "6").innerHTML = count;
                        document.getElementById(temp + "6").style.color = "red";
                        document.getElementById(temp + "7").innerHTML = count;
                        document.getElementById(temp + "7").style.color = "red";
                        document.getElementById(temp + "8").innerHTML = count;
                        document.getElementById(temp + "8").style.color = "red";
                        document.getElementById(temp + "9").innerHTML = count;
                        document.getElementById(temp + "9").style.color = "red";
                        document.getElementById(temp + "10").innerHTML = count;
                        document.getElementById(temp + "10").style.color = "red";
                        document.getElementById(temp + "11").innerHTML = count;
                        document.getElementById(temp + "11").style.color = "red";
                        document.getElementById(temp + "12").innerHTML = count;
                        document.getElementById(temp + "12").style.color = "red";
                    }

                    repeatingFunction();
                }
            }
            else if (startMinute == "50") {
                if (parseInt(endHour) - parseInt(startHour) == 1 && endMinute == "00") {
                    document.getElementById(startHour + "11").style.backgroundColor = "red";
                    document.getElementById(startHour + "12").style.backgroundColor = "red";
                    
                    document.getElementById(startHour + "11").innerHTML = count;
                    document.getElementById(startHour + "11").style.color = "red";
                    document.getElementById(startHour + "12").innerHTML = count;
                    document.getElementById(startHour + "12").style.color = "red";
                }
                else {
                    document.getElementById(startHour + "11").style.backgroundColor = "red";
                    document.getElementById(startHour + "12").style.backgroundColor = "red";
                    
                    document.getElementById(startHour + "11").innerHTML = count;
                    document.getElementById(startHour + "11").style.color = "red";
                    document.getElementById(startHour + "12").innerHTML = count;
                    document.getElementById(startHour + "12").style.color = "red";

                    var temp = startHour;

                    for (var j = parseInt(startHour) + 1; j < parseInt(endHour); j++) {
                        switch (temp) {
                            case "07": temp = "08";
                                break;
                            case "08": temp = "09";
                                break;
                            case "09": temp = "10";
                                break;
                            case "10": temp = "11";
                                break;
                            case "11": temp = "12";
                                break;
                            case "12": temp = "13";
                                break;
                            case "13": temp = "14";
                                break;
                            case "14": temp = "15";
                                break;
                            case "15": temp = "16";
                                break;
                            case "16": temp = "17";
                                break;
                            case "17": temp = "18";
                                break;
                            case "18": temp = "19";
                                break;
                            default: temp = "00"
                                break;
                        }

                        document.getElementById(temp + "1").style.backgroundColor = "red";
                        document.getElementById(temp + "2").style.backgroundColor = "red";
                        document.getElementById(temp + "3").style.backgroundColor = "red";
                        document.getElementById(temp + "4").style.backgroundColor = "red";
                        document.getElementById(temp + "5").style.backgroundColor = "red";
                        document.getElementById(temp + "6").style.backgroundColor = "red";
                        document.getElementById(temp + "7").style.backgroundColor = "red";
                        document.getElementById(temp + "8").style.backgroundColor = "red";
                        document.getElementById(temp + "9").style.backgroundColor = "red";
                        document.getElementById(temp + "10").style.backgroundColor = "red";
                        document.getElementById(temp + "11").style.backgroundColor = "red";
                        document.getElementById(temp + "12").style.backgroundColor = "red";

                        document.getElementById(temp + "1").innerHTML = count;
                        document.getElementById(temp + "1").style.color = "red";
                        document.getElementById(temp + "2").innerHTML = count;
                        document.getElementById(temp + "2").style.color = "red";
                        document.getElementById(temp + "3").innerHTML = count;
                        document.getElementById(temp + "3").style.color = "red";
                        document.getElementById(temp + "4").innerHTML = count;
                        document.getElementById(temp + "4").style.color = "red";
                        document.getElementById(temp + "5").innerHTML = count;
                        document.getElementById(temp + "5").style.color = "red";
                        document.getElementById(temp + "6").innerHTML = count;
                        document.getElementById(temp + "6").style.color = "red";
                        document.getElementById(temp + "7").innerHTML = count;
                        document.getElementById(temp + "7").style.color = "red";
                        document.getElementById(temp + "8").innerHTML = count;
                        document.getElementById(temp + "8").style.color = "red";
                        document.getElementById(temp + "9").innerHTML = count;
                        document.getElementById(temp + "9").style.color = "red";
                        document.getElementById(temp + "10").innerHTML = count;
                        document.getElementById(temp + "10").style.color = "red";
                        document.getElementById(temp + "11").innerHTML = count;
                        document.getElementById(temp + "11").style.color = "red";
                        document.getElementById(temp + "12").innerHTML = count;
                        document.getElementById(temp + "12").style.color = "red";
                    }

                    repeatingFunction();
                }
            }
            else if (startMinute == "55") {
                document.getElementById(startHour + "12").style.backgroundColor = "red";
                
                document.getElementById(startHour + "12").innerHTML = count;
                document.getElementById(startHour + "12").style.color = "red";
            }
            else {
                document.getElementById(startHour + "12").style.backgroundColor = "red";
                
                document.getElementById(startHour + "12").innerHTML = count;
                document.getElementById(startHour + "12").style.color = "red";

                var temp = startHour;

                for (var j = parseInt(startHour) + 1; j < parseInt(endHour); j++) {
                    switch (temp) {
                        case "07": temp = "08";
                            break;
                        case "08": temp = "09";
                            break;
                        case "09": temp = "10";
                            break;
                        case "10": temp = "11";
                            break;
                        case "11": temp = "12";
                            break;
                        case "12": temp = "13";
                            break;
                        case "13": temp = "14";
                            break;
                        case "14": temp = "15";
                            break;
                        case "15": temp = "16";
                            break;
                        case "16": temp = "17";
                            break;
                        case "17": temp = "18";
                            break;
                        case "18": temp = "19";
                            break;
                        default: temp = "00"
                            break;
                    }

                    document.getElementById(temp + "1").style.backgroundColor = "red";
                    document.getElementById(temp + "2").style.backgroundColor = "red";
                    document.getElementById(temp + "3").style.backgroundColor = "red";
                    document.getElementById(temp + "4").style.backgroundColor = "red";
                    document.getElementById(temp + "5").style.backgroundColor = "red";
                    document.getElementById(temp + "6").style.backgroundColor = "red";
                    document.getElementById(temp + "7").style.backgroundColor = "red";
                    document.getElementById(temp + "8").style.backgroundColor = "red";
                    document.getElementById(temp + "9").style.backgroundColor = "red";
                    document.getElementById(temp + "10").style.backgroundColor = "red";
                    document.getElementById(temp + "11").style.backgroundColor = "red";
                    document.getElementById(temp + "12").style.backgroundColor = "red";

                    document.getElementById(temp + "1").innerHTML = count;
                    document.getElementById(temp + "1").style.color = "red";
                    document.getElementById(temp + "2").innerHTML = count;
                    document.getElementById(temp + "2").style.color = "red";
                    document.getElementById(temp + "3").innerHTML = count;
                    document.getElementById(temp + "3").style.color = "red";
                    document.getElementById(temp + "4").innerHTML = count;
                    document.getElementById(temp + "4").style.color = "red";
                    document.getElementById(temp + "5").innerHTML = count;
                    document.getElementById(temp + "5").style.color = "red";
                    document.getElementById(temp + "6").innerHTML = count;
                    document.getElementById(temp + "6").style.color = "red";
                    document.getElementById(temp + "7").innerHTML = count;
                    document.getElementById(temp + "7").style.color = "red";
                    document.getElementById(temp + "8").innerHTML = count;
                    document.getElementById(temp + "8").style.color = "red";
                    document.getElementById(temp + "9").innerHTML = count;
                    document.getElementById(temp + "9").style.color = "red";
                    document.getElementById(temp + "10").innerHTML = count;
                    document.getElementById(temp + "10").style.color = "red";
                    document.getElementById(temp + "11").innerHTML = count;
                    document.getElementById(temp + "11").style.color = "red";
                    document.getElementById(temp + "12").innerHTML = count;
                    document.getElementById(temp + "12").style.color = "red";
                }

                repeatingFunction();
            }
            count++;
        }
    }
}

function repeatingFunction() {
    var tempEnd = newEnd(endHour);

    if (endMinute == "00") {
        document.getElementById(tempEnd + "1").style.backgroundColor = "red";
        document.getElementById(tempEnd + "2").style.backgroundColor = "red";
        document.getElementById(tempEnd + "3").style.backgroundColor = "red";
        document.getElementById(tempEnd + "4").style.backgroundColor = "red";
        document.getElementById(tempEnd + "5").style.backgroundColor = "red";
        document.getElementById(tempEnd + "6").style.backgroundColor = "red";
        document.getElementById(tempEnd + "7").style.backgroundColor = "red";
        document.getElementById(tempEnd + "8").style.backgroundColor = "red";
        document.getElementById(tempEnd + "9").style.backgroundColor = "red";
        document.getElementById(tempEnd + "10").style.backgroundColor = "red";
        document.getElementById(tempEnd + "11").style.backgroundColor = "red";
        document.getElementById(tempEnd + "12").style.backgroundColor = "red";

        document.getElementById(tempEnd + "1").innerHTML = count;
        document.getElementById(tempEnd + "1").style.color = "red";
        document.getElementById(tempEnd + "2").innerHTML = count;
        document.getElementById(tempEnd + "2").style.color = "red";
        document.getElementById(tempEnd + "3").innerHTML = count;
        document.getElementById(tempEnd + "3").style.color = "red";
        document.getElementById(tempEnd + "4").innerHTML = count;
        document.getElementById(tempEnd + "4").style.color = "red";
        document.getElementById(tempEnd + "5").innerHTML = count;
        document.getElementById(tempEnd + "5").style.color = "red";
        document.getElementById(tempEnd + "6").innerHTML = count;
        document.getElementById(tempEnd + "6").style.color = "red";
        document.getElementById(tempEnd + "7").innerHTML = count;
        document.getElementById(tempEnd + "7").style.color = "red";
        document.getElementById(tempEnd + "8").innerHTML = count;
        document.getElementById(tempEnd + "8").style.color = "red";
        document.getElementById(tempEnd + "9").innerHTML = count;
        document.getElementById(tempEnd + "9").style.color = "red";
        document.getElementById(tempEnd + "10").innerHTML = count;
        document.getElementById(tempEnd + "10").style.color = "red";
        document.getElementById(tempEnd + "11").innerHTML = count;
        document.getElementById(tempEnd + "11").style.color = "red";
        document.getElementById(tempEnd + "12").innerHTML = count;
        document.getElementById(tempEnd + "12").style.color = "red";
    }
    else if (endMinute == "05") {
        document.getElementById(endHour + "1").style.backgroundColor = "red";

        document.getElementById(endHour + "1").innerHTML = count;
        document.getElementById(endHour + "1").style.color = "red";
    }
    else if (endMinute == "10") {
        document.getElementById(endHour + "1").style.backgroundColor = "red";
        document.getElementById(endHour + "2").style.backgroundColor = "red";

        document.getElementById(endHour + "1").innerHTML = count;
        document.getElementById(endHour + "1").style.color = "red";
        document.getElementById(endHour + "2").innerHTML = count;
        document.getElementById(endHour + "2").style.color = "red";
    }
    else if (endMinute == "15") {
        document.getElementById(endHour + "1").style.backgroundColor = "red";
        document.getElementById(endHour + "2").style.backgroundColor = "red";
        document.getElementById(endHour + "3").style.backgroundColor = "red";

        document.getElementById(endHour + "1").innerHTML = count;
        document.getElementById(endHour + "1").style.color = "red";
        document.getElementById(endHour + "2").innerHTML = count;
        document.getElementById(endHour + "2").style.color = "red";
        document.getElementById(endHour + "3").innerHTML = count;
        document.getElementById(endHour + "3").style.color = "red";
    }
    else if (endMinute == "20") {
        document.getElementById(endHour + "1").style.backgroundColor = "red";
        document.getElementById(endHour + "2").style.backgroundColor = "red";
        document.getElementById(endHour + "3").style.backgroundColor = "red";
        document.getElementById(endHour + "4").style.backgroundColor = "red";

        document.getElementById(endHour + "1").innerHTML = count;
        document.getElementById(endHour + "1").style.color = "red";
        document.getElementById(endHour + "2").innerHTML = count;
        document.getElementById(endHour + "2").style.color = "red";
        document.getElementById(endHour + "3").innerHTML = count;
        document.getElementById(endHour + "3").style.color = "red";
        document.getElementById(endHour + "4").innerHTML = count;
        document.getElementById(endHour + "4").style.color = "red";
    }
    else if (endMinute == "25") {
        document.getElementById(endHour + "1").style.backgroundColor = "red";
        document.getElementById(endHour + "2").style.backgroundColor = "red";
        document.getElementById(endHour + "3").style.backgroundColor = "red";
        document.getElementById(endHour + "4").style.backgroundColor = "red";
        document.getElementById(endHour + "5").style.backgroundColor = "red";

        document.getElementById(endHour + "1").innerHTML = count;
        document.getElementById(endHour + "1").style.color = "red";
        document.getElementById(endHour + "2").innerHTML = count;
        document.getElementById(endHour + "2").style.color = "red";
        document.getElementById(endHour + "3").innerHTML = count;
        document.getElementById(endHour + "3").style.color = "red";
        document.getElementById(endHour + "4").innerHTML = count;
        document.getElementById(endHour + "4").style.color = "red";
        document.getElementById(endHour + "5").innerHTML = count;
        document.getElementById(endHour + "5").style.color = "red";
    }
    else if (endMinute == "30") {
        document.getElementById(endHour + "1").style.backgroundColor = "red";
        document.getElementById(endHour + "2").style.backgroundColor = "red";
        document.getElementById(endHour + "3").style.backgroundColor = "red";
        document.getElementById(endHour + "4").style.backgroundColor = "red";
        document.getElementById(endHour + "5").style.backgroundColor = "red";
        document.getElementById(endHour + "6").style.backgroundColor = "red";

        document.getElementById(endHour + "1").innerHTML = count;
        document.getElementById(endHour + "1").style.color = "red";
        document.getElementById(endHour + "2").innerHTML = count;
        document.getElementById(endHour + "2").style.color = "red";
        document.getElementById(endHour + "3").innerHTML = count;
        document.getElementById(endHour + "3").style.color = "red";
        document.getElementById(endHour + "4").innerHTML = count;
        document.getElementById(endHour + "4").style.color = "red";
        document.getElementById(endHour + "5").innerHTML = count;
        document.getElementById(endHour + "5").style.color = "red";
        document.getElementById(endHour + "6").innerHTML = count;
        document.getElementById(endHour + "6").style.color = "red";
    }
    else if (endMinute == "35") {
        document.getElementById(endHour + "1").style.backgroundColor = "red";
        document.getElementById(endHour + "2").style.backgroundColor = "red";
        document.getElementById(endHour + "3").style.backgroundColor = "red";
        document.getElementById(endHour + "4").style.backgroundColor = "red";
        document.getElementById(endHour + "5").style.backgroundColor = "red";
        document.getElementById(endHour + "6").style.backgroundColor = "red";
        document.getElementById(endHour + "7").style.backgroundColor = "red";

        document.getElementById(endHour + "1").innerHTML = count;
        document.getElementById(endHour + "1").style.color = "red";
        document.getElementById(endHour + "2").innerHTML = count;
        document.getElementById(endHour + "2").style.color = "red";
        document.getElementById(endHour + "3").innerHTML = count;
        document.getElementById(endHour + "3").style.color = "red";
        document.getElementById(endHour + "4").innerHTML = count;
        document.getElementById(endHour + "4").style.color = "red";
        document.getElementById(endHour + "5").innerHTML = count;
        document.getElementById(endHour + "5").style.color = "red";
        document.getElementById(endHour + "6").innerHTML = count;
        document.getElementById(endHour + "6").style.color = "red";
        document.getElementById(endHour + "7").innerHTML = count;
        document.getElementById(endHour + "7").style.color = "red";
    }
    else if (endMinute == "40") {
        document.getElementById(endHour + "1").style.backgroundColor = "red";
        document.getElementById(endHour + "2").style.backgroundColor = "red";
        document.getElementById(endHour + "3").style.backgroundColor = "red";
        document.getElementById(endHour + "4").style.backgroundColor = "red";
        document.getElementById(endHour + "5").style.backgroundColor = "red";
        document.getElementById(endHour + "6").style.backgroundColor = "red";
        document.getElementById(endHour + "7").style.backgroundColor = "red";
        document.getElementById(endHour + "8").style.backgroundColor = "red";

        document.getElementById(endHour + "1").innerHTML = count;
        document.getElementById(endHour + "1").style.color = "red";
        document.getElementById(endHour + "2").innerHTML = count;
        document.getElementById(endHour + "2").style.color = "red";
        document.getElementById(endHour + "3").innerHTML = count;
        document.getElementById(endHour + "3").style.color = "red";
        document.getElementById(endHour + "4").innerHTML = count;
        document.getElementById(endHour + "4").style.color = "red";
        document.getElementById(endHour + "5").innerHTML = count;
        document.getElementById(endHour + "5").style.color = "red";
        document.getElementById(endHour + "6").innerHTML = count;
        document.getElementById(endHour + "6").style.color = "red";
        document.getElementById(endHour + "7").innerHTML = count;
        document.getElementById(endHour + "7").style.color = "red";
        document.getElementById(endHour + "8").innerHTML = count;
        document.getElementById(endHour + "8").style.color = "red";
    }
    else if (endMinute == "45") {
        document.getElementById(endHour + "1").style.backgroundColor = "red";
        document.getElementById(endHour + "2").style.backgroundColor = "red";
        document.getElementById(endHour + "3").style.backgroundColor = "red";
        document.getElementById(endHour + "4").style.backgroundColor = "red";
        document.getElementById(endHour + "5").style.backgroundColor = "red";
        document.getElementById(endHour + "6").style.backgroundColor = "red";
        document.getElementById(endHour + "7").style.backgroundColor = "red";
        document.getElementById(endHour + "8").style.backgroundColor = "red";
        document.getElementById(endHour + "9").style.backgroundColor = "red";

        document.getElementById(endHour + "1").innerHTML = count;
        document.getElementById(endHour + "1").style.color = "red";
        document.getElementById(endHour + "2").innerHTML = count;
        document.getElementById(endHour + "2").style.color = "red";
        document.getElementById(endHour + "3").innerHTML = count;
        document.getElementById(endHour + "3").style.color = "red";
        document.getElementById(endHour + "4").innerHTML = count;
        document.getElementById(endHour + "4").style.color = "red";
        document.getElementById(endHour + "5").innerHTML = count;
        document.getElementById(endHour + "5").style.color = "red";
        document.getElementById(endHour + "6").innerHTML = count;
        document.getElementById(endHour + "6").style.color = "red";
        document.getElementById(endHour + "7").innerHTML = count;
        document.getElementById(endHour + "7").style.color = "red";
        document.getElementById(endHour + "8").innerHTML = count;
        document.getElementById(endHour + "8").style.color = "red";
        document.getElementById(endHour + "9").innerHTML = count;
        document.getElementById(endHour + "9").style.color = "red";
    }
    else if (endMinute == "50") {
        document.getElementById(endHour + "1").style.backgroundColor = "red";
        document.getElementById(endHour + "2").style.backgroundColor = "red";
        document.getElementById(endHour + "3").style.backgroundColor = "red";
        document.getElementById(endHour + "4").style.backgroundColor = "red";
        document.getElementById(endHour + "5").style.backgroundColor = "red";
        document.getElementById(endHour + "6").style.backgroundColor = "red";
        document.getElementById(endHour + "7").style.backgroundColor = "red";
        document.getElementById(endHour + "8").style.backgroundColor = "red";
        document.getElementById(endHour + "9").style.backgroundColor = "red";
        document.getElementById(endHour + "10").style.backgroundColor = "red";

        document.getElementById(endHour + "1").innerHTML = count;
        document.getElementById(endHour + "1").style.color = "red";
        document.getElementById(endHour + "2").innerHTML = count;
        document.getElementById(endHour + "2").style.color = "red";
        document.getElementById(endHour + "3").innerHTML = count;
        document.getElementById(endHour + "3").style.color = "red";
        document.getElementById(endHour + "4").innerHTML = count;
        document.getElementById(endHour + "4").style.color = "red";
        document.getElementById(endHour + "5").innerHTML = count;
        document.getElementById(endHour + "5").style.color = "red";
        document.getElementById(endHour + "6").innerHTML = count;
        document.getElementById(endHour + "6").style.color = "red";
        document.getElementById(endHour + "7").innerHTML = count;
        document.getElementById(endHour + "7").style.color = "red";
        document.getElementById(endHour + "8").innerHTML = count;
        document.getElementById(endHour + "8").style.color = "red";
        document.getElementById(endHour + "9").innerHTML = count;
        document.getElementById(endHour + "9").style.color = "red";
        document.getElementById(endHour + "10").innerHTML = count;
        document.getElementById(endHour + "10").style.color = "red";
    }
    else if (endMinute == "55") {
        document.getElementById(endHour + "1").style.backgroundColor = "red";
        document.getElementById(endHour + "2").style.backgroundColor = "red";
        document.getElementById(endHour + "3").style.backgroundColor = "red";
        document.getElementById(endHour + "4").style.backgroundColor = "red";
        document.getElementById(endHour + "5").style.backgroundColor = "red";
        document.getElementById(endHour + "6").style.backgroundColor = "red";
        document.getElementById(endHour + "7").style.backgroundColor = "red";
        document.getElementById(endHour + "8").style.backgroundColor = "red";
        document.getElementById(endHour + "9").style.backgroundColor = "red";
        document.getElementById(endHour + "10").style.backgroundColor = "red";
        document.getElementById(endHour + "11").style.backgroundColor = "red";

        document.getElementById(endHour + "1").innerHTML = count;
        document.getElementById(endHour + "1").style.color = "red";
        document.getElementById(endHour + "2").innerHTML = count;
        document.getElementById(endHour + "2").style.color = "red";
        document.getElementById(endHour + "3").innerHTML = count;
        document.getElementById(endHour + "3").style.color = "red";
        document.getElementById(endHour + "4").innerHTML = count;
        document.getElementById(endHour + "4").style.color = "red";
        document.getElementById(endHour + "5").innerHTML = count;
        document.getElementById(endHour + "5").style.color = "red";
        document.getElementById(endHour + "6").innerHTML = count;
        document.getElementById(endHour + "6").style.color = "red";
        document.getElementById(endHour + "7").innerHTML = count;
        document.getElementById(endHour + "7").style.color = "red";
        document.getElementById(endHour + "8").innerHTML = count;
        document.getElementById(endHour + "8").style.color = "red";
        document.getElementById(endHour + "9").innerHTML = count;
        document.getElementById(endHour + "9").style.color = "red";
        document.getElementById(endHour + "10").innerHTML = count;
        document.getElementById(endHour + "10").style.color = "red";
        document.getElementById(endHour + "11").innerHTML = count;
        document.getElementById(endHour + "11").style.color = "red";
    }
}

function newEnd(end) {
    var result;

    switch (end) {
        case "09": result = "08";
            break;
        case "10": result = "09";
            break;
        case "11": result = "10";
            break;
        case "12": result = "11";
            break;
        case "13": result = "12";
            break;
        case "14": result = "13";
            break;
        case "15": result = "14";
            break;
        case "16": result = "15";
            break;
        case "17": result = "16";
            break;
        case "18": result = "17";
            break;
        case "19": result = "18";
            break;
        default: result = "00";
            break;
    }

    return result;
}

var modal;

var span;

function hiddenModal() {
    document.getElementById("moreInfo").style.display = "none";
    document.getElementById("head").style.display = "block";
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
        document.getElementById("head").style.display = "block";
    }
}

function popup(value) {
    if (document.getElementById(value).style.backgroundColor === "red") {
        var num = document.getElementById(value).innerHTML;
        var arr = information[num]; 

        modal.style.display = "block";

        //document.getElementById("head").style.display = "none";
        document.getElementById("today").innerHTML = arr[1];
        // document.getElementById("roomName").innerHTML = arr[3];
        document.getElementById("time").innerHTML = arr[4] + " - " + arr[5];
        document.getElementById("subject").innerHTML = "Subject: " + arr[0];
        //document.getElementById("organizer").innerHTML = arr[2];
    }
}