//Check off specific todos by clicking
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
  //Prevent any propagation (bubbling up to parent elements or capturing down to child elements) of the same event
	event.stopPropagation();
});

$("input[type='text']").keypress(function(event){ 
	if (event.which === 13) {
		//Grabbing new todo text from input
		var todoText = $(this).val();
		$(this).val("");
		//Create a new li and add to ul
    //Dynamically created list elements can not be removed with click function, $("ul").on("click","li", function() would not work!
		$("ul").append("<li><span><i class='fa fa-trash'></i></span>" + todoText + "</li>");
		}
});
