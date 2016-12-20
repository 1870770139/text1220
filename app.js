/**
 * Created by Administrator on 2016/12/20 0007.
 */
	//引入path内置模块
var path=require("path");
//引入express依赖模块，用来启动静态服务器
var express=require("express");

//实例express
var app = express();

console.log(__dirname);
//拼接物理路径，用来指定虚拟路劲的访问（静态页面文件）
var viewsPath=path.join(__dirname,"views");
console.log("viewsPath");
//指定访问 页面 的路径
app.use("/",express.static(viewsPath));
//拼接物理路径，用来指定虚拟路径的访问（静态资源文件）
var publickPath=path.join(__dirname,"public");
//
app.use("/public",express.static(publickPath));
//
app.listen(16922,function(){
	console.log("sever run at port 16922");
});

module.exports=app;