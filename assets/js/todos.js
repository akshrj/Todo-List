// check off specific todos by clicking
$("ul").on("click", "li", function() {
	$(this).toggleClass("completed");

	// //if li is gray
	// if ($(this).css("color") === "rgb(128, 128, 128)") {		//when comparing, don't write the color name, write its rgb() value because JavaScript compares color with its RGB() value
	// 	//turn it black
	// 	$(this).css({
	// 		color: "black",
	// 		textDecoration: "none"
	// 	});
	// } else {
	// 	//turn it gray
	// 	$(this).css({		//using an object inside the .css() property
	// 		color: "gray",
	// 		textDecoration: "line-through"		//jQuery: here use js syntax(camelCase) for the 'key' and for 'value' use the css syntax
	// 	});
	// }	

});

$("ul").on("click", "span", function(event) {
	$(this).parent().fadeOut(500, function() {
		$(this).remove();
	});
	event.stopPropagation();		//to stop event bubbling: event.stopPropagation( ); (where, 'event' is just a placeholder which is passed in as an argument in the call-back function
});

$("input[type = 'text']").keypress(function(event) {
	if (event.which === 13) {
		//grabbing new todo text from input
		var todotext = $(this).val();
		//clearing input area
		$(this).val("");		//it's an empty string
		//creating a new li and add to ul
		$("ul").append("<li><span><i class='fas fa-trash'></i></span> " + todotext + "</li>");
	}
});

$(".fa-plus").click(function() {
	$("input[type = 'text']").fadeToggle();
});