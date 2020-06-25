$(document).ready(function () {

$("#currentDay").text(moment().format( "dddd, MMMM Do YYYY, h:mm:ss a" ));
      var uniTime = moment().hour();
var oneTry = $("#9amInput").attr("value2");
// alert(oneTry);
alert(uniTime);
if(uniTime === oneTry){
    $("#9amInput").addClass("present")
}
if(uniTime > oneTry){
    $("#9amInput").addClass("past")
}
if(uniTime < oneTry){
    $("#9amInput").addClass("future")
}

var ar=document.getElementsByTagName("textarea");


for(var i=0; i< ar.length; i++){

    if(uniTime === ar[i].name * 1){
        ar[i].setAttribute("class", "present");
    }
    if(uniTime > ar[i].name * 1){
        ar[i].setAttribute("class", "future");
    }
    if(uniTime < ar[i].name * 1){
        ar[i].setAttribute("class", "past");
    }





}
      
    





  })

      
    
    
    