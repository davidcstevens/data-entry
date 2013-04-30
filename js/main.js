require(["jquery","vendor/modernizr-2.6.2.min","plugins","navigation","vendor/doT.min"], function($) {
    $(function() {
        //
    });
});

var def = {
	frame: document.getElementById('dot-frame').text,
	image: document.getElementById('dot-image').text,
	form: document.getElementById('dot-form').text
};
var data = {
	title: "My title",
	name: "My name"
};

var pagefn = doT.template(document.getElementById('pagetmpl').text, undefined, def);
document.getElementById('content').innerHTML = pagefn(data);

pagefn = doT.template(document.getElementById('pagetmplwithcustomizableheader').text, undefined, def);
document.getElementById('contentcustom').innerHTML = pagefn(data);