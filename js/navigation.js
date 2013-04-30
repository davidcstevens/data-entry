require(["jquery"], function($) {
    $(function() {
		$(".next").on("click",function(){
			getNext();
		});
    });
});

function getNext() {
	console.log("next");
}