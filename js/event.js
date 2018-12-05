// JavaScript Document
function login(){
	var account=document.getElementById("doc-ipt-email-1").value;
	var password=document.getElementById("doc-ipt-pwd-1").value;
	var url="http://127.0.0.1:8099/weather/login?account="+account+"&password="+password;
	console.log("url"+url);
	$.ajax({
            url:url,
            type:"post",
			dataType:"text",
     		crossDomain: true,    
			contentType: "application/json;charset=utf-8",
			success:function (res) {
				var obj = eval(res);
				console.log(obj);
				if(obj.result=="true"){
					var su=setCookie("account",account,30);
					setCookie("password",password,30);
					setCookie("state","online",30);
					window.location.href="index.html";
				}else{
					alert("账号或者密码错误");
　　					window.location.href="login.html";
				}		
				
			},
            error:function (error) {
				alert("登录失败");
　　				window.history.back(-1); 
			}
        })
}

function register(){
	window.location.href="register.html";
}


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

function setCookie(c_name,value,expiredays)
{
var exdate=new Date()
exdate.setDate(exdate.getDate()+expiredays)
document.cookie=c_name+ "=" +escape(value)+((expiredays==null) ? "" : ";expires="+exdate.toGMTString())
return true;
}


function checkCookie()
{
username=getCookie('username')
if (username!=null && username!="")
  {alert('Welcome again '+username+'!')}
else 
  {
  username=prompt('Please enter your name:',"")
  if (username!=null && username!="")
    {
    setCookie('username',username,365)
    }
  }
}

