jQuery.fn.tw = function(conf) {
	var settings = {
		'selector' : this,
		'delay'	   : 100,
		'callback' : null
	};
	if (conf) {
		jQuery.extend(settings, conf);
	}
	
	settings.selector.hide();
	function TypeWriterItem(index) {
		var current_elem = $(settings.selector[index]);
		var total_text   = current_elem.text();
		current_elem.html("").show();
		function TypeWriter(innerIndex) {
			current_elem.html(total_text.substr(0,innerIndex));
			if (innerIndex <= total_text.length) {
				setTimeout(function(){
					TypeWriter(innerIndex+1);
				} , settings.delay);
			}
			else {
				if (++index < settings.selector.length) {
					TypeWriterItem(index);
				}
			}
		}
		TypeWriter(0);
	}
	TypeWriterItem(0);
}