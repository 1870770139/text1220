var $active= $(".active");
var $inform=$("inform");
var $massage=$("massage");
var $news=$("news");
var x=0;

$active.on("tap",function(){
	var $table=$(this );
	$table.toggle(1000,function(){
		$table.css("background-color","#ed692b" ).css("color","white");
		$inform.css("display","block" );
	} );
});


