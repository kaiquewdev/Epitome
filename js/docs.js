window.addEvent('domready', function() {
	new moostrapScrollspy('sections', {
		onReady: function() {
			this.scroll();
		},
		onActive: function(el) {
			el.getParents("li").getLast().addClass('active');
		},
		onInactive: function() {
			this.element.getElements('li.active').removeClass('active');
		}
	});

	document.getElements('pre').addClass('prettyprint linenums');
	prettyPrint();

});
