// common.js



document.addEventListener('deviceready',onDeviceReady,false);

function onDeviceReady () {
	// body...
}
//load phonegap
function comfirmCallback (buttonIndex) {
		switch(buttonIndex)
		{
			case 1:

				break
			case 2:
				break
			case 3:
			    break
			default:


		}
}


//检查网络状态
//
function checkConnection() { 
		var networkState = navigator.network.connection.type; 		 

		var states = {}; 
		states[Connection.UNKNOWN]  = 'Unknown connection'; 
		states[Connection.ETHERNET] = 'Ethernet connection'; 
		states[Connection.WIFI]     = 'WiFi connection'; 
		states[Connection.CELL_2G]  = 'Cell 2G connection'; 
		states[Connection.CELL_3G]  = 'Cell 3G connection'; 
		states[Connection.CELL_4G]  = 'Cell 4G connection'; 
		states[Connection.NONE]     = 'No network connection'; 
		return states[networkState];
		
	
}

//检查升级
function updata(){
	var version=1;
    var newversion;
	$.getJSON("http://1.njuptxqpk.sinaapp.com/php/version.php",{overwrite:true},function(data){
	
     newversion=data.version;
	
	if(newversion>version){
	 var x=confirm("有新版本，确认升级?");
	 navigator.notification.comfirm("需要升级么？",comfirmCallback,"升级","ok,cancel");
	}else{
		alert("已经是最新版本");
		}	
	});

}


//初始化
$("#page").live("pageinit",function(){
	
$("img:not(:first)").hide();

var height=  document.body.scrollHeight;
var width= document.body.scrollWidth;
$("#mainbody").attr("style","width:"+width+"px;"+"height:"+height*0.70+"px;overflow:scroll");

$("#commentdiv").attr("style","width:"+width+"px;"+"height:"+height*0.75+"px;overflow:scroll");
});


//拍照按钮和从相册获取
$("#capturephoto").live("vclick",function(){
	
	getPhoto(pictureSource.PHOTOLIBRARY)});

$("#getpic").live("vclick",function(){capturePhoto()});


//左右手势操作
var index=0;
	$("#page").live("swipeleft",function(){
		var b=$("img:visible").next().length;
		//alert(b);
		if(b==1){
		$("img:visible").attr("style","  margin:0;float:left;").hide("slow","linear");
		$("img:visible").next().attr("style","margin:0").show("slow","linear");
		index++;
	var c=$("img:visible").next().attr("src");
	if(checkConnection()!='No network connection'){
		$("#commentlistone p").html("<img src='images/ajax_loading.gif'/>");
	
     var d=c.substr(c.lastIndexOf("/")+1);
       $("#commentlistone p").load("http://1.njuptxqpk.sinaapp.com/php/commentlistone.php",{imgname:d},function(){})
	}
		}
		else{
			window.plugins.ToastPlugin.show_short('到头了，请再按一次分类刷新～');
			
			}
		

}).live("swiperight",function(){
	var b=$("img:visible").prevAll().length;
		
		if(b!=0){
		$("img:visible").attr("style"," margin:0;float:left").hide("slow");
		$("img:visible").prev().attr("style","overflow:hidden");

if(checkConnection()!='No network connection'){

	$("#commentlistone p").html("<img src='images/ajax_loading.gif'/>");
var c=$("img:visible").attr("src");

var d=c.substr(c.lastIndexOf("/")+1);

$("#commentlistone p").load("http://1.njuptxqpk.sinaapp.com/php/commentlistone.php",{imgname:d},function(){});
}

		}
		else{
			window.plugins.ToastPlugin.show_short('到头了～～请再按一次分类刷新～');

			}

});

// end
// 
// 
// 最新按钮
var tempnum=-5;
$("#lastest").live("vclick",function(){
	var x=checkConnection();
	//alert(x);
	tempnum=tempnum+5;
	if(x!='No network connection'){
		
	$("#mainbody").html("<img src='images/ajax_loading.gif'/>");
	$("#mainbody").load("http://1.njuptxqpk.sinaapp.com/php/listlastest.php",{tempnum:tempnum},function(){$("img:first").attr("style","margin:0");
	$("img:not(:first)").attr("style","display:none");index=0;});
	}
	else{
		//alert(x);
		window.plugins.ToastPlugin.show_short(x);
		}
	});

//仙林风景
var tempxianlin=-5;
$("#xianlin").live("vclick",function(){
	var x=checkConnection();
	tempxianlin=tempxianlin+5;
	if(x!='No network connection'){
		//alert(tempnum);
	$("#mainbody").html("<img src='images/ajax_loading.gif'/>");
	$("#mainbody").load("http://1.njuptxqpk.sinaapp.com/php/listxianlin.php",{tempnum:tempxianlin},function(){$("img:first").attr("style","margin:0;");
	$("img:not(:first)").attr("style","display:none");index=0;});
	}
	else{
		//alert(x);
		window.plugins.ToastPlugin.show_short(x);
		}

	});

// end
// 

//三牌楼风景
//
var tempsanpailou=-5;
$("#sanpailou").live("vclick",function(){
	var x=checkConnection();
	tempsanpailou=tempsanpailou+5;
	if(x!='No network connection'){
		//alert(tempnum);
	$("#mainbody").html("<img src='images/ajax_loading.gif' />");
	$("#mainbody").load("http://1.njuptxqpk.sinaapp.com/php/listsanpailou.php",{tempnum:tempsanpailou},function(){
		$("img:first").attr("style","margin:0;");
		$("img:not(:first)").attr("style","display:none");
		index=0;
		});
	}
	else{
		
		window.plugins.ToastPlugin.show_short(x);
		}

	});	


//个人上传秀
//
var temppersonal=-5;
$("#personal").live("vclick",function(){
	var x=checkConnection();
	temppersonal=temppersonal+5;
	if(x!='No network connection'){
	$("#mainbody").html("<img src='images/ajax_loading.gif'/>");
	$("#mainbody").load("http://1.njuptxqpk.sinaapp.com/php/listpersonal.php",{tempnum:temppersonal},function(){$("img:first").attr("style","margin:0;");
	$("img:not(:first)").attr("style","display:none");index=0;});
	}
	else{
		window.plugins.ToastPlugin.show_short(x);
		}

	});



//历史
var temphistory=-5;
$("#lishi").live("vclick",function(){
	
	var x=checkConnection();
	temphistory=temphistory+5;
	if(x!='No network connection'){
		//alert(tempnum);
	$("#mainbody").html("<img src='images/ajax_loading.gif' />");
	$("#mainbody").load("http://1.njuptxqpk.sinaapp.com/php/listhistory.php",{tempnum:temphistory},function(){$("img:first").attr("style","margin:0;");$("img:not(:first)").attr("style","width:95%; max-height:65%;display:none");index=0;});
	}
	else{
		//alert(x);
		window.plugins.ToastPlugin.show_short(x);
		}
	
	
	});	


//有趣funny

var tempfunny=-5;
$("#funny").live("vclick",function(){
	var x=checkConnection();
	tempfunny=tempfunny+5;
	if(x!='No network connection'){
		
	$("#mainbody").html("<img src='images/ajax_loading.gif'/>");
	$("#mainbody").load("http://1.njuptxqpk.sinaapp.com/php/listfunny.php",{tempnum:tempfunny},function(){$("img:first").attr("style","margin:0;");$("img:not(:first)").attr("style","display:none");index=0;});
	}
	else{
		//alert(x);
		window.plugins.ToastPlugin.show_short(x);
		}
	
	
	
	});

	//最热

		var temphot=-5;
	$("#hot").live("vclick",function(){
		var x=checkConnection();
	temphot=temphot+5;
	if(x!='No network connection'){
		//alert(tempnum);
	$("#mainbody").html("<img src='images/ajax_loading.gif' />");
	$("#mainbody").load("http://1.njuptxqpk.sinaapp.com/php/hot.php",{tempnum:temphot},function(){$("img:first").attr("style","margin:0;");$("img:not(:first)").attr("style","display:none");index=0;});
	}
	else{
		//alert(x);
		window.plugins.ToastPlugin.show_short(x);
		}
	
		
		
		});

	// end


	// 按钮事件


//确认上传
$("#submit").live("vclick",function(){
	
	
	var a=$("#largeImage").attr("src");
	
	uploadPhoto(a)
	
	
	});

//评论
$("#comments").live("vclick",function(){
	var a=$("img:visible").attr("src");
var b=a.substr(a.lastIndexOf("/")+1);
$("#forcommentimg").attr("value",function(){return b});a=$("#forcommentimg").attr("value");

 
$("#commentdiv p").load("http://1.njuptxqpk.sinaapp.com/php/commentlist.php",{imgname:a},function(){
	
	})
	
	});

//确认评论

$("#submitcomment").live("vclick",function(){
	
	var a=checkConnection();
	
	if(a!='No network connection'){
	  $("#commentloading img").show();
	$.post("http://1.njuptxqpk.sinaapp.com/php/upcomment.php",{forimg:$("#forcommentimg").val(),comment:$("#commentinput").val()},function(){window.plugins.ToastPlugin.show_short('提交成功');
     $("#commentinput").attr("value","");	 
	 $("#commentloading img").hide()})
	}
	else{
	window.plugins.ToastPlugin.show_short(a);
		}
	
	});

//喜欢按钮
$("#like").live("vclick",function(){
	var c=$("img:visible").attr("src");
var d=c.substr(c.lastIndexOf("/")+1);
	if(checkConnection() != 'No network connection'){
	$.post("http://1.njuptxqpk.sinaapp.com/php/countlike.php",{imgname:d},function(){
		
		alert("+1成功");
		});
	}
	else{
		window.plugins.ToastPlugin.show_short(checkConnection());
		}
	
	});