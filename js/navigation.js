require(["jquery"], function($) {
    $(function() {
		$(".next").on("click",function(){
			getNext();
		});
    });
});

function getNext() {
	console.log("next");
	// $.get(
	//     "http://php5/sandbox", 
	//     function(data) { 
	//     	alert(data); 
	//     },
	// );
}