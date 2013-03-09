// JavaScript Document
function upload(){
    
  // Wait for PhoneGap to load
        document.addEventListener("deviceready", onDeviceReady, false);    
        // PhoneGap is ready
        function onDeviceReady() {
            alert("onDeviceReady!!");
        
            navigator.camera.getPicture(uploadPhoto,
                                        function(message) { alert('get picture failed'); },
                                        { quality: 50, 
                                        destinationType: navigator.camera.DestinationType.FILE_URI,
                                        sourceType: navigator.camera.PictureSourceType.PHOTOLIBRARY }
                                    
// quality : 75, 
//   destinationType : Camera.DestinationType.DATA_URL, 
//   sourceType : Camera.PictureSourceType.CAMERA, 
//   allowEdit : true,
//   encodingType: Camera.EncodingType.JPEG,
//   targetWidth: 100,
//   targetHeight: 100,
//   popoverOptions: CameraPopoverOptions,
//   saveToPhotoAlbum: false 

                                        );

        }
		
		 function uploadPhoto(imageURI) {
	//	alert("uploadPhoto!!");
            var options = new FileUploadOptions();
            options.fileKey="myfile";
            options.fileName=imageURI.substr(imageURI.lastIndexOf('/')+1);
             options.mimeType=image/jpeg;
      //   alert("options.mimeType=image/jpeg!!");
            var params = new Object();
            params.value1 = "test";
            params.value2 = "param";

            options.params = params;
               
            var ft = new FileTransfer();
			
		//	alert(imageURI);
            ft.upload(imageURI, "http://1.njuptxqpk.sinaapp.com/upload/upload.php", win, fail, options);
			
        }

        function win(r) {
		    
			console.log("Code = " + r.responseCode);
			alert(r.responseCode);
            console.log("Response = " + r.response);
			alert(r.response);
            console.log("Sent = " + r.bytesSent);
			alert(r.bytesSent);
        }

        function fail(error) {
             alert("error"+error.code);
	   
            console.log("upload error source " + error.source);

            alert("upload error source " + error.source);
            console.log("upload error target " + error.target);
            alert("upload error target " + error.target);
        }
}