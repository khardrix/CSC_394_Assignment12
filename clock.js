"use strict";
var timer;
var $ = function(id) { return document.getElementById(id); };

var displayCurrentTime = function() {
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    var ampm = "";
    
    if(hours >= 12){
        ampm = "PM";
        hours %= 12;
    } else{
        ampm = "AM";
        if(hours === 0){
            hours = 12;
        }
    }
    
    if(hours < 10){
        hours = padSingleDigit(hours);
    }
    if(minutes < 10){
        minutes = padSingleDigit(minutes);
    }
    if(seconds < 10){
        seconds = padSingleDigit(seconds);
    }
    
    $("hours").firstChild.nodeValue = hours;
    $("minutes").firstChild.nodeValue = minutes;
    $("seconds").firstChild.nodeValue = seconds;
    $("ampm").firstChild.nodeValue = ampm;
};

var padSingleDigit = function(num) {
	if (num < 10) {	return "0" + num; }
	else { return num; }
};

window.onload = function() {
    // set initial clock display and then set interval timer to display
    setInterval(displayCurrentTime, 1000);
    // new time every second. Don't store timer object because it 
    // won't be needed - clock will just run.
};