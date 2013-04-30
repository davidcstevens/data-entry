<?php // functions

function getTemplates() {
	$path = "./templates";
	$templates = '';
	if ($handle = opendir($path)) {
	    while (false !== ($file = readdir($handle))) {
	        if ($file != "." && $file != "..") {
	        	$content = file_get_contents($path.'/'.$file);
	        	$strip = substr($file, 0, strrpos($file, '.'));
	            $templates.= '<script id="dot-'.$strip.'" type="text/x-dot-template">
	            ';
	            $templates.= $content;
	            $templates.= '
	            </script> <!-- /#'.$strip.' -->
	            ';
	        }
	    }
	    closedir($handle);
	}
	return $templates;
}
