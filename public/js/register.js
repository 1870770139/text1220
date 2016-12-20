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

$(function(){
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
		if(x == 5){
			confirm("注册完成!");
		}else{
			confirm("注册失败!");
		}
	 });
	//身份选择
	$(".form-cell:last" ).click(function(){
		$(".form-cell-nev" ).css("display","block")
	});
	//页面跳转
	$(".i").click(function(){
		location.href="content1.html";//登录
	});
});

var $test=$(".test1");
var $btn=$("#btn2");
var $last=$(".form-cell-nev");
$test.on('tap',function (){//tap 事件类似于 jQuery click() 方法。
	var $self=$(this);
	//console.log($(this ).text());
	$btn.val($(this ).text());
	//$last.css("display","none")
	setTimeout(function(){
		$last.css("display","none")
	},1000)
});







