function main(code)
{
    currentDate();
    populateTable(code);
}

var currentDate;

function currentDate()
{
	var today = new Date();
	var day = today.getDate();
	var m = today.getMonth();
	var year = today.getFullYear();
	var month;

	if(day.toString().length == 1)
	{
		m++;
		if(m.toString().length == 1)
			currentDate = year + "-0" + m + "-0" + day;
		else
		 	currentDate = year + "-" + m + "-0" + day;
	}
	else
	{
		m++;
		if(m.toString().length == 1)
			currentDate = year + "-0" + m + "-" + day;
		else
		 	currentDate = year + "-" + m + "-" + day;
	}

	m--;

	switch(m)
	{
		case 0 : month = "January";
					  break;
		case 1 : month = "February";
					  break;
		case 2 : month = "March";
					  break;
		case 3 : month = "April";
					  break;
		case 4 : month = "May";
					  break;
		case 5 : month = "June";
					  break;
		case 6 : month = "July";
					  break;
		case 7 : month = "August";
					  break;
		case 8 : month = "September";
					  break;
		case 9 : month = "October";
					  break;
		case 10 : month = "November";
					  break;
		case 11 : month = "December";
					  break;
		default : month = "Error";
				  break;
	}

	document.getElementById("date").innerHTML = day + " " + month + " " + year;
}

function populateTable(code)
{
    var values = changeRoom(code);
	var value = values.value;

	for(var i = 0; i < value.length; i++)
	{
		var subject = value[i].subject;
		var start = value[i].start;
		var end = value[i].end;
		var location = value[i].location;
		var organizer = value[i].organizer;

		var startDateTime = start.dateTime;
		var endDateTime = end.dateTime;

		var startDate = startDateTime.substring(0,10);
		var startTime = startDateTime.substring(11,16);

		if(startDate == currentDate)
		{
			console.log("here");
			var endDate = endDateTime.substring(0,10);
			var endTime = endDateTime.substring(11,16);

			var startHour = startTime.substring(0,2);
			var endHour = endTime.substring(0,2);

			var startMinute = startTime.substring(3,5);
			var endMinute = endTime.substring(3,5);

			if(startHour == endHour)
			{
				if(startMinute == "00")
				{
					if(endMinute == "15")
						document.getElementById(startHour + "1").style.backgroundColor = "#e60000";
					else if(endMinute == "30")
					{
						document.getElementById(startHour + "1").style.backgroundColor = "#e60000";
						document.getElementById(startHour + "2").style.backgroundColor = "#e60000";
					}
					else if(endMinute == "45")
					{
						document.getElementById(startHour + "1").style.backgroundColor = "#e60000";
						document.getElementById(startHour + "2").style.backgroundColor = "#e60000";
						document.getElementById(startHour + "3").style.backgroundColor = "#e60000";
					}

				}
				else if(startMinute == "15")
				{
					if(endMinute == "30")
						document.getElementById(startHour + "2").style.backgroundColor = "#e60000";
					else if(endMinute == "45")
					{
						document.getElementById(startHour + "2").style.backgroundColor = "#e60000";
						document.getElementById(startHour + "3").style.backgroundColor = "#e60000";
					}
				}
				else if(startMinute == "30")
				{
					if(endMinute == "45")
						document.getElementById(startHour + "3").style.backgroundColor = "#e60000";
				}
				else if(startMinute == "45")
				{
					document.getElementById(startHour + "4").style.backgroundColor = "#e60000";
				}
			}
			else if(startMinute == "00")
			{
				if(parseInt(endHour) - parseInt(startHour) == 1 && endMinute == "00")
				{
					document.getElementById(startHour + "1").style.backgroundColor = "#e60000";
					document.getElementById(startHour + "2").style.backgroundColor = "#e60000";
					document.getElementById(startHour + "3").style.backgroundColor = "#e60000";
					document.getElementById(startHour + "4").style.backgroundColor = "#e60000";
				}
				else
				{
					document.getElementById(startHour + "1").style.backgroundColor = "#e60000";
					document.getElementById(startHour + "2").style.backgroundColor = "#e60000";
					document.getElementById(startHour + "3").style.backgroundColor = "#e60000";
					document.getElementById(startHour + "4").style.backgroundColor = "#e60000";

					var temp = startHour;

					for(var j = parseInt(startHour) + 1; j < parseInt(endHour); j++)
					{
						switch(temp)
						{
							case "07" : temp = "08";
										break;
							case "08" : temp = "09";
										break;
							case "09" : temp = "10";
										break;
							case "10" : temp = "11";
										break;
							case "11" : temp = "12";
										break;
							case "12" : temp = "13";
										break;
							case "13" : temp = "14";
										break;
							case "14" : temp = "15";
										break;
							case "15" : temp = "16";
										break;
							case "16" : temp = "17";
										break;
							case "17" : temp = "18";
										break;
							case "18" : temp = "19";
										break;
							default : temp = "00"
									  break;
						}

						document.getElementById(temp + "1").style.backgroundColor = "#e60000";
						document.getElementById(temp + "2").style.backgroundColor = "#e60000";
						document.getElementById(temp + "3").style.backgroundColor = "#e60000";
						document.getElementById(temp + "4").style.backgroundColor = "#e60000";
					}

					var tempEnd = newEnd(endHour);

					if(endMinute == "00")
					{
						document.getElementById(tempEnd + "1").style.backgroundColor = "#e60000";
						document.getElementById(tempEnd + "2").style.backgroundColor = "#e60000";
						document.getElementById(tempEnd + "3").style.backgroundColor = "#e60000";
						document.getElementById(tempEnd + "4").style.backgroundColor = "#e60000";
					}
					else if(endMinute == "15")
					{
						document.getElementById(endHour + "1").style.backgroundColor = "#e60000";	
					}
					else if(endMinute == "30")
					{
						document.getElementById(endHour + "1").style.backgroundColor = "#e60000";
						document.getElementById(endHour + "2").style.backgroundColor = "#e60000";
					}
					else if(endMinute == "45")
					{
						document.getElementById(endHour + "1").style.backgroundColor = "#e60000";
						document.getElementById(endHour + "2").style.backgroundColor = "#e60000";
						document.getElementById(endHour + "3").style.backgroundColor = "#e60000";
					}
				}
			}
			else if(startMinute == "15")
			{
				if(parseInt(endHour) - parseInt(startHour) == 1 && endMinute == "00")
				{
					document.getElementById(startHour + "2").style.backgroundColor = "#e60000";
					document.getElementById(startHour + "3").style.backgroundColor = "#e60000";
					document.getElementById(startHour + "4").style.backgroundColor = "#e60000";
				}
				else
				{
					document.getElementById(startHour + "2").style.backgroundColor = "#e60000";
					document.getElementById(startHour + "3").style.backgroundColor = "#e60000";
					document.getElementById(startHour + "4").style.backgroundColor = "#e60000";

					var temp = startHour;

					for(var j = parseInt(startHour) + 1; j < parseInt(endHour); j++)
					{
						switch(temp)
						{
							case "07" : temp = "08";
										break;
							case "08" : temp = "09";
										break;
							case "09" : temp = "10";
										break;
							case "10" : temp = "11";
										break;
							case "11" : temp = "12";
										break;
							case "12" : temp = "13";
										break;
							case "13" : temp = "14";
										break;
							case "14" : temp = "15";
										break;
							case "15" : temp = "16";
										break;
							case "16" : temp = "17";
										break;
							case "17" : temp = "18";
										break;
							case "18" : temp = "19";
										break;
							default : temp = "00"
									  break;
						}

						document.getElementById(temp + "1").style.backgroundColor = "#e60000";
						document.getElementById(temp + "2").style.backgroundColor = "#e60000";
						document.getElementById(temp + "3").style.backgroundColor = "#e60000";
						document.getElementById(temp + "4").style.backgroundColor = "#e60000";
					}

					var tempEnd = newEnd(endHour);

					if(endMinute == "00")
					{
						document.getElementById(tempEnd + "1").style.backgroundColor = "#e60000";
						document.getElementById(tempEnd + "2").style.backgroundColor = "#e60000";
						document.getElementById(tempEnd + "3").style.backgroundColor = "#e60000";
						document.getElementById(tempEnd + "4").style.backgroundColor = "#e60000";
					}
					else if(endMinute == "15")
					{
						document.getElementById(endHour + "1").style.backgroundColor = "#e60000";	
					}
					else if(endMinute == "30")
					{
						document.getElementById(endHour + "1").style.backgroundColor = "#e60000";
						document.getElementById(endHour + "2").style.backgroundColor = "#e60000";
					}
					else if(endMinute == "45")
					{
						document.getElementById(endHour + "1").style.backgroundColor = "#e60000";
						document.getElementById(endHour + "2").style.backgroundColor = "#e60000";
						document.getElementById(endHour + "3").style.backgroundColor = "#e60000";
					}
				}
			}
			else if(startMinute == "30")
			{
				if(parseInt(endHour) - parseInt(startHour) == 1 && endMinute == "00")
				{
					document.getElementById(startHour + "3").style.backgroundColor = "#e60000";
					document.getElementById(startHour + "4").style.backgroundColor = "#e60000";
				}
				else
				{
					document.getElementById(startHour + "3").style.backgroundColor = "#e60000";
					document.getElementById(startHour + "4").style.backgroundColor = "#e60000";

					var temp = startHour;

					for(var j = parseInt(startHour) + 1; j < parseInt(endHour); j++)
					{
						switch(temp)
						{
							case "07" : temp = "08";
										break;
							case "08" : temp = "09";
										break;
							case "09" : temp = "10";
										break;
							case "10" : temp = "11";
										break;
							case "11" : temp = "12";
										break;
							case "12" : temp = "13";
										break;
							case "13" : temp = "14";
										break;
							case "14" : temp = "15";
										break;
							case "15" : temp = "16";
										break;
							case "16" : temp = "17";
										break;
							case "17" : temp = "18";
										break;
							case "18" : temp = "19";
										break;
							default : temp = "00"
									  break;
						}

						document.getElementById(temp + "1").style.backgroundColor = "#e60000";
						document.getElementById(temp + "2").style.backgroundColor = "#e60000";
						document.getElementById(temp + "3").style.backgroundColor = "#e60000";
						document.getElementById(temp + "4").style.backgroundColor = "#e60000";
					}

					var tempEnd = newEnd(endHour);

					if(endMinute == "00")
					{
						document.getElementById(tempEnd + "1").style.backgroundColor = "#e60000";
						document.getElementById(tempEnd + "2").style.backgroundColor = "#e60000";
						document.getElementById(tempEnd + "3").style.backgroundColor = "#e60000";
						document.getElementById(tempEnd + "4").style.backgroundColor = "#e60000";
					}
					else if(endMinute == "15")
					{
						document.getElementById(endHour + "1").style.backgroundColor = "#e60000";	
					}
					else if(endMinute == "30")
					{
						document.getElementById(endHour + "1").style.backgroundColor = "#e60000";
						document.getElementById(endHour + "2").style.backgroundColor = "#e60000";
					}
					else if(endMinute == "45")
					{
						document.getElementById(endHour + "1").style.backgroundColor = "#e60000";
						document.getElementById(endHour + "2").style.backgroundColor = "#e60000";
						document.getElementById(endHour + "3").style.backgroundColor = "#e60000";
					}
				}
			}
			else if(startMinute == "45")
			{
				if(parseInt(endHour) - parseInt(startHour) == 1 && endMinute == "00")
					document.getElementById(startHour + "4").style.backgroundColor = "#e60000";
				else
				{
					document.getElementById(startHour + "4").style.backgroundColor = "#e60000";

					var temp = startHour;

					for(var j = parseInt(startHour) + 1; j < parseInt(endHour); j++)
					{
						switch(temp)
						{
							case "07" : temp = "08";
										break;
							case "08" : temp = "09";
										break;
							case "09" : temp = "10";
										break;
							case "10" : temp = "11";
										break;
							case "11" : temp = "12";
										break;
							case "12" : temp = "13";
										break;
							case "13" : temp = "14";
										break;
							case "14" : temp = "15";
										break;
							case "15" : temp = "16";
										break;
							case "16" : temp = "17";
										break;
							case "17" : temp = "18";
										break;
							case "18" : temp = "19";
										break;
							default : temp = "00"
									  break;
						}

						document.getElementById(temp + "1").style.backgroundColor = "#e60000";
						document.getElementById(temp + "2").style.backgroundColor = "#e60000";
						document.getElementById(temp + "3").style.backgroundColor = "#e60000";
						document.getElementById(temp + "4").style.backgroundColor = "#e60000";
					}

					var tempEnd = newEnd(endHour);

					if(endMinute == "00")
					{
						document.getElementById(tempEnd + "1").style.backgroundColor = "#e60000";
						document.getElementById(tempEnd + "2").style.backgroundColor = "#e60000";
						document.getElementById(tempEnd + "3").style.backgroundColor = "#e60000";
						document.getElementById(tempEnd + "4").style.backgroundColor = "#e60000";
					}
					else if(endMinute == "15")
					{
						document.getElementById(endHour + "1").style.backgroundColor = "#e60000";	
					}
					else if(endMinute == "30")
					{
						document.getElementById(endHour + "1").style.backgroundColor = "#e60000";
						document.getElementById(endHour + "2").style.backgroundColor = "#e60000";
					}
					else if(endMinute == "45")
					{
						document.getElementById(endHour + "1").style.backgroundColor = "#e60000";
						document.getElementById(endHour + "2").style.backgroundColor = "#e60000";
						document.getElementById(endHour + "3").style.backgroundColor = "#e60000";
					}
				}
			}
		}
		else
			break;
	}
}

function newEnd(end)
{
	var result;

	switch(end)
	{
		case "09" : result = "08";
					break;
		case "10" : result = "09";
					break;		
		case "11" : result = "10";
					break;	
		case "12" : result = "11";
					break;
		case "13" : result = "12";
					break;
		case "14" : result = "13";
					break;
		case "15" : result = "14";
					break;
		case "16" : result = "15";
					break;
		case "17" : result = "16";
					break;
		case "18" : result = "17";
					break;
		case "19" : result = "18";
					break;
		default : result = "00";
				  break;
    }

	return result;
}