require(["jquery","vendor/modernizr-2.6.2.min","plugins","navigation","vendor/doT.min"], function($) {
    $(function() {
		var doT = require("vendor/doT.min");
        //

var def = {
	frame: $('#dot-frame').html,
	read: $('#dot-read').html,
	form: $('#dot-form').html
};
var data = {
	src: "testsrc",
	name: "testname"
};

var pagefn = doT.template($('#dot-frame').html, undefined, def);
$('.main').append(pagefn(data));

// pagefn = doT.template(document.getElementById('pagetmplwithcustomizableheader').text, undefined, def);
// document.getElementById('contentcustom').innerHTML = pagefn(data);
    });
});