// JavaScript Document
window.onload=function(){ 
	var account=getCookie("account");

};

function getCookie(c_name)
{
if (document.cookie.length>0)
  {
  c_start=document.cookie.indexOf(c_name + "=")
  if (c_start!=-1)
    { 
    c_start=c_start + c_name.length+1 
    c_end=document.cookie.indexOf(";",c_start)
    if (c_end==-1) c_end=document.cookie.length
    return unescape(document.cookie.substring(c_start,c_end))
    } 
  }
return ""
}

window.onload=function(){ 
	var account=getCookie("account");
	var password=getCookie("password");
	var state=getCookie("state");
	var url="http://127.0.0.1:8099/weather/login?account="+account+"&password="+password;
	if(state=="online"){
		$.ajax({
            url:url,
            type:"post",
			dataType:"text",
     		crossDomain: true,    
			contentType: "application/json;charset=utf-8",
			success:function (res) {
				console.log(res);
				var obj = eval(res);
				console.log(obj);
				if(obj.result=="true"){
					setCookie("account",account,30);
					setCookie("password",password,30);
					setCookie("state","online",30);
					var city="广州";
					var temperature="10度~20度";
					document.getElementById("temperature").innerHTML=temperature;
					document.getElementById("city").innerHTML=city;
				}else{
					alert("请重新进行登录");
　　					window.location.href="login.html";
				}		
				
			},
            error:function (error) {
				alert("登录失败");
　　				window.location.href="login.html";
			}
        })
	}else{
		window.location.href="login.html";
	}
	

};

function setCookie(c_name,value,expiredays)
{
var exdate=new Date()
exdate.setDate(exdate.getDate()+expiredays)
document.cookie=c_name+ "=" +escape(value)+((expiredays==null) ? "" : ";expires="+exdate.toGMTString())
return true;
}