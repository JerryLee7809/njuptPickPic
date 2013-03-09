// JavaScript Document
var Openfile= function (){

	}
	
	
	openfile.prototype.openFile= function(){
		
		PhoneGap.exec(win, fail, "openfile", "openfile", [fileUrl, params]);		
		}
    PhoneGap.addConstructor(function() {
	PhoneGap.addPlugin('openfile', new Openfile());
	
  })