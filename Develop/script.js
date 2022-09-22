myStorage = window.localStorage; 
// Variables for each hour 
var hour8am = $("#8:00am");
var hour9am = $("#9:00am");
var hour10am = $("#10:00am");
var hour11am = $("#11:00am");
var hour12pm = $("#12:00pm");
var hour1pm = $("#1:00pm");
var hour2pm = $("#2:00pm");
var hour3pm = $("#3:00pm");
var hour4pm = $("#4:00pm");
var hour5pm = $("#5:00pm");
var hour6pm = $("#6:00pm");
var hour7pm = $("#7:00pm");
var hour8pm = $("#8:00pm");
var hour9pm = $("#9:00pm");
var hour10pm = $("#10:00pm");

// Local storage save 

function scheduleEvents() {
    var event8 = JSON.parse(localStorage.getItem("8:00 AM"));
    hour8am.val(event8);
    var event9 = JSON.parse(localStorage.getItem("9:00 AM"));
    hour9am.val(event9);
    var event10 = JSON.parse(localStorage.getItem("10:00 AM"));
    hour10am.val(event10);
    var event11 = JSON.parse(localStorage.getItem("11:00 AM"));
    hour11am.val(event11);
    var event12 = JSON.parse(localStorage.getItem("12:00 PM"));
    hour12pm.val(event12);
    var event13 = JSON.parse(localStorage.getItem("1:00 PM"));
    hour1pm.val(event13);
    var event14 = JSON.parse(localStorage.getItem("2:00 PM"));
    hour2pm.val(event14);
    var event15 = JSON.parse(localStorage.getItem("3:00 PM"));
    hour3pm.val(event15);
    var event16 = JSON.parse(localStorage.getItem("4:00 PM"));
    hour4pm.val(event16);
    var event17 = JSON.parse(localStorage.getItem("5:00 PM"));
    hour5pm.val(event17);
    var event18 = JSON.parse(localStorage.getItem("6:00 PM"));
    hour6pm.val(event18);
    var event19 = JSON.parse(localStorage.getItem("7:00 PM"));
    hour7pm.val(event19);
    var event20 = JSON.parse(localStorage.getItem("8:00 PM"));
    hour8pm.val(event20);
    var event21 = JSON.parse(localStorage.getItem("9:00 PM"));
    hour9pm.val(event21);
    var event22 = JSON.parse(localStorage.getItem("10:00 PM"));
    hour10pm.val(event22);
    
}
// Background color 
function past () {
    $("form-control").each(function (){
        var timeTest = parseInt($(this).attr("id"));
        hour = parseInt(hour);
        console.log(timeTest);
        console.log(hour);
        if (hour > timeTest) {
            $(this).addClass("past");
        } else if (hour < timeTest){
            $(this).addClass("future");
        } else {
            $(this).addClass("present")
        }
        
    });
    
}
