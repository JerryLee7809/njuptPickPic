// JavaScript Document

/** 
 * Constructor 
 */ 
function installapk() { 
}; 
 
/** 
 * Starts the video player intent 
 * 
 * @param url           The url to play 
 */ 
installapk.prototype.install = function() { 
    PhoneGap.exec(success, fail, "installapk", "install", null); 
}; 
 
 function success(){
	 
	 alert("success");
	 
	 }
function fail(){
	
	alert("fail");
	}
 
/** 
 * Load VideoPlayer 
 */ 
PhoneGap.addConstructor(function() { 
    PhoneGap.addPlugin("installapk", new installapk()); 
}); 