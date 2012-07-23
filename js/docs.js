window.addEvent('domready', function() {
	new moostrapScrollspy('sections', {
		onReady: function() {
			//  this.scroll();
		},
		onActive: function(el) {
			this.element.getElements('li.active').removeClass('active');
			el.getParents("li").getLast().addClass('active');
		}
	});
});
