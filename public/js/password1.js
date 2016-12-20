/**
 * Created by Administrator on 2016/12/14 0014.
 */

//倒计时
var countdown=60;
function settime(obj) {
	if (countdown == 0) {
		obj.removeAttribute("disabled");
		obj.value="免费获取验证码";
		countdown = 60;
		return;
	} else {
		obj.setAttribute("disabled", true);
		obj.value="重新发送(" + countdown + ")";
		countdown--;
	}
	setTimeout(function() {
			settime(obj) }
		,1000)
}



$( function(){
	//判断表单是否为空
	var x=0;
	$(".btn_login").click(function(){
		$("input[type=text],input[type=password]").each(function(){
			if($(this).val() == ""){
				x=0;
			}else {
				x++;
			}
		});
		if(x == 4){
			confirm("注册完成!");
		}else{
			confirm("注册失败!");
		}

	});


//页面跳转
	$(".i").click(function(){
		location.href="content1.html";//登录
	});
});

function checkConfirm(){
	var pass = document.getElementById("pass").value;
	var confirmpass = document.getElementById("confirmPass").value;
	if(pass != confirmpass){
		document.getElementById("confirmPass_tips").style.display = "inline-block";
		return false;
	}else{
		document.getElementById("confirmPass_tips").style.display = "none";
		return true;
	}
}
