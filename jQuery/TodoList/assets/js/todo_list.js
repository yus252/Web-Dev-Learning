// Check off specifc todos by clicking
$("ul").on("click", "li", function(){
	$(this).toggleClass("done");
});


//Click on X to delete Todo
$("span").click( function(event){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
	event.stopPropagation();
});

// Create new Todo by inputting a string
$("input[type='text']").keypress(function(event){
	if(event.which == 13){
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + $(this).val() + "</li>");
		$(this).val("");
	}
});

$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
})