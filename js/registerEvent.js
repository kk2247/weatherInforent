// JavaScript Document
function register(){
	if(document.getElementById("doc-ipt-email-1").value==""||document.getElementById("doc-ipt-pwd-1").value==""||document.getElementById("doc-ipt-pwd-2").value==""){
		document.getElementById("warning").innerHTML="账号密码不可为空";
		
	}else{
		var account=document.getElementById("doc-ipt-email-1").value;
		var password=document.getElementById("doc-ipt-pwd-1").value;
	
		var url="http://127.0.0.1:8099/weather/register?account="+account+"&password="+password;
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
					window.location.href="login.html";
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
	
}

function checkPassword(){
	var password=document.getElementById("doc-ipt-pwd-1").value;
	var password2=document.getElementById("doc-ipt-pwd-2").value;
	if(password!=password2){
		document.getElementById("warning").innerHTML="两次输入的密码不一致";
	}
}
