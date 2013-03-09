var pictureSource;var destinationType;
document.addEventListener("deviceready",onDeviceReady,false);
function onDeviceReady()
{
	
	pictureSource=navigator.camera.PictureSourceType;destinationType=navigator.camera.DestinationType;
 //document.addEventListener("backbutton", onBackKeyDown, false);
 document.addEventListener("online", online, false);
 document.addEventListener("offline", offline, false);
 checkConnection();
 if(checkConnection()=="No network connection"){
	
	 window.plugins.ToastPlugin.show_short('No network connection');
	 }
 
	document.addEventListener("menubutton", menubuttonFunction, false);
  
  window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, gotFS, fail); 
}


function readDataUrl(file) { 
		var reader = new FileReader(); 
		reader.onloadend = function(evt) { 
			console.log("Read as data URL"); 
			console.log(evt.target.result);
			alert(evt.target.result); 
		}; 
		reader.readAsDataURL(file); 
	}  

function  downloadnewver(){
	//alert("download");
	window.plugins.downloader.downloadFile("http://njuptxqpk-photo.stor.sinaapp.com/views/njupt70-1.01.apk",{},
	function(data){
		window.plugins.statusBarNotification.notify(JSON.stringify(data.file), JSON.stringify(data.status)+" "+JSON.stringify(data.progress+"%"));
	if(data.progress==100){
		//alert("下载完成！保存在sdcard/download,请安装！！");
		window.plugins.ToastPlugin.show_short("下载完成！保存在sdcard/download,请安装！！");
		window.plugins.installapk.install();
		}
		},
		function(data){alert("fail");});
	
	
	
	}


function download(){
	navigator.notification.alert("!!",'警告','确认');
	
	var fileTransfer = new FileTransfer();

fileTransfer.download(
    'http://njuptxqpk-test.stor.sinaapp.com/最新/',
    '/sdcard',
    function(entry) {
        console.log("download complete: " + entry.fullPath);
		alert(entry.fullPath);
    },
    function(error) {
        console.log("download error source " + error.source);
        console.log("download error target " + error.target);
        console.log("upload error code" + error.code);
		alert(error.source+" "+error.code+" "+error.target);
    }
);	
}





 function  menubuttonFunction(){
	 
	
	 
	 }



	
function onBackKeyDown() {
    var a=confirm("再点击一次退出!");
	if(a)
	{
		navigator.app.exitApp();
		
		
		}



}

function online()
{
	alert("online");
	}
function offline(){
	alert("offline");
	}	

function onPhotoURISuccess(b){
	console.log(b);
	
	var c=document.getElementById("largeImage");
	c.style.display="block";
	c.style.height="60%";
	
	c.src=b;
	
	
	var a=b.substr(b.lastIndexOf("?")+1)+'.jpg';
//alert(a);

$("#textinput").attr("value",a)
}


function onPhotoURISuccessb(b){
	console.log(b);
	var c=document.getElementById("largeImage");
	c.style.display="block";
	c.style.height="60%";
	
	c.src=b;
	
	
	var a=b.substr(b.lastIndexOf("/")+1)+'.jpg';


$("#textinput").attr("value",a)
}



function capturePhoto(){
	navigator.camera.getPicture(onPhotoURISuccessb,onFail,{quality:50,destinationType:1,targetWidth:screen.width,targetHeight:screen.height,EncodingType:0,sourceType:1}
	)}
function capturePhotoEdit(){navigator.camera.getPicture(onPhotoURISuccess,onFail,{quality:20,allowEdit:true,destinationType:Camera.DestinationType.FILE_URI})}
function getPhoto(a){
	navigator.camera.getPicture(onPhotoURISuccess,onFail,
{quality:100,destinationType:destinationType.FILE_URI,sourceType:a,targetWidth:screen.width,targetHeight:screen.height,EncodingType:0})}
function onFail(a){alert("Failed because: "+message)};