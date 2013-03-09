// JavaScript Document
 function uploadPhoto(imageURI) {
	
	      var x=checkConnection();
		
            var options = new FileUploadOptions();
            options.fileKey="myfile";
            options.fileName=$("#textinput").attr("value");
          
        // alert($("#textinput").attr("value"));
            var params = new Object();
			 
           params.value1=$("#selectmenu3 option:selected").val();
         
			params.value2 = "js";
          
            options.params = params;
               
            var ft = new FileTransfer();
			
			
			if(x!='No network connection'){
	          $("#loading img").show();
			  $("#1").hide();
			  $("#2").hide();
			  $("#3").hide();
            ft.upload(imageURI, "http://1.njuptxqpk.sinaapp.com/upload/upload.php", win, fail, options);
			
			
			}
			
			
        }

        function win(r) {
			
			console.log("Code = " + r.responseCode);
			//alert(r.responseCode);
			if(r.responseCode==200)
			{
				//alert($("#textinput").attr("value"));
				//alert("上传成功");
				window.plugins.ToastPlugin.show_short('上传成功');
			//插入imginfo
			
			 $.post("http://1.njuptxqpk.sinaapp.com/php/upload.php",{
		imgname:$("#textinput").attr("value"),
		classes:$("#selectmenu3 option:selected").val(),
       schoolyear:$("#selectmenu option:selected").val(),
	  	comment:$("#uploadimgcomment").val()
		},function(){
			//alert("success!!");
			});
			//插入类型
			$.post("http://1.njuptxqpk.sinaapp.com/php/upclasses.php",{
				
				imgname:$("#textinput").attr("value"),
		classes:$("#selectmenu3 option:selected").val()
				},function(){
					
				//	alert("class插入～～");
					}
	     );
		
	   //插入schoolyear
		    $.post("http://1.njuptxqpk.sinaapp.com/php/upschoolyear.php",{
				imgname:$("#textinput").attr("value"),
				schoolyear:$("#selectmenu option:selected").val()
				
				
				},function(){
					//alert("schoolyear插入～～");
					});
					
					//
	$.post("http://1.njuptxqpk.sinaapp.com/php/upcomment.php",{
			forimg:$("#textinput").attr("value"),
			comment:$("#uploadimgcomment").val()
			
			},function(){
			//	alert("comment insert～～")
				
				});
		}
				else
				{
					alert("出现错误！请检查网络状态！");
					}					
            console.log("Response = " + r.response);
			//alert(r.response);
            console.log("Sent = " + r.bytesSent);
			//alert(r.bytesSent);
			$("#loading img").hide();
			 $("#1").show();
			 
			  $("#2").show();
			  $("#3").show();
			history.go(-1);
        }
     
		
        function fail(error) {
             alert("error"+error.code);
	   $("#loading img").hide();
			 $("#1").show();
			 
			  $("#2").show();
			  $("#3").show();
			history.go(-1);
            console.log("upload error source " + error.source);
            //alert("upload error source " + error.source);
            console.log("upload error target " + error.target);
            //alert("upload error target " + error.target);
        }