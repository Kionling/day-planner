$(document).ready(function () {
$("#currentDay").text(moment());
var textAreas = $("textarea")
console.log(textAreas)
function presentTime(){
    if (textAreas !== moment().hour()){
        $("textarea").addClass("past")
    }
}

presentTime();

















})
