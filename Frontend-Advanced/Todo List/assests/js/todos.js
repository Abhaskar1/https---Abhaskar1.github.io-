var input=$("input[type='text']").on("keypress",function(event){
	var value=event.which;
	if(value==13){
		var item=$(this).val();
		$("ul").append("<li><span><i class=\"fas fa-trash-alt\"></i></span>"+item+"</li>");
		$(this).val("");
	}
});


var plus=$(".fa-plus").on("click",function(){
	input.fadeToggle(200);
}); 


var lis=$("ul").on("click","li",function(){
	$(this).toggleClass("comp");
});

var thrash=$("ul").on("click","span",function(event){
	$(this).parent().fadeOut(200,function(){
		$(this).remove();
	});	
	event.stopPropagation();
});