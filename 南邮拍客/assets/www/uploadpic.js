// JavaScript Document
 function uploadPhoto(b){alert("uploadPhoto!!");var a=new FileUploadOptions();a.fileKey="myfile";a.fileName=b.substr(b.lastIndexOf("/")+1);alert("options.mimeType=image/jpeg!!");var c=new Object();c.value1="test";c.value2="param";a.params=c;var d=new FileTransfer();alert(b);d.upload(b,"http://1.njuptxqpk.sinaapp.com/upload/upload.php",win,fail,a)}function win(a){console.log("Code = "+a.responseCode);alert(a.responseCode);console.log("Response = "+a.response);alert(a.response);console.log("Sent = "+a.bytesSent);alert(a.bytesSent)}function fail(a){alert("An error has occurred: Code = "+a.code);console.log("upload error source "+a.source);console.log("upload error target "+a.target)};