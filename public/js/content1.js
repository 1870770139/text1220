/**
 * Created by Administrator on 2016/12/14 0014.
 */
$( function(){
	$("#up").click(function(){
		if($("input[type=text]").val() == "" || $("input[type=password]").val() == "" ){
				alert("输入格式不正确");
			}else{
			window.location.reload();
		}
	});








	$(".bt_register").click(function(){
		location.href="register.html";//注册
	});
	$(".bt_passwd").click(function(){
		location.href="password1.html";//忘记密码
	});
});



