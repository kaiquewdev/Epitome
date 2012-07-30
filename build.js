#!/usr/bin/env node
var dom = require('jsdom'),
	request = require('request'),
	fs = require('fs'),
	repo = 'DimitarChristoff/Epitome',
	compile = 'http://documentup.com/' + repo + '/recompile/';

request(compile, function(error, response, html) {
	if (error) {
		console.log('Failed to get documentation.', error);
		process.exit(1);
	}

	// now, create a jsdom document out of the response, injecting the extra scripts
	dom.env(html, [
		'http://ajax.googleapis.com/ajax/libs/mootools/1.4.5/mootools-yui-compressed.js',
		'js/moostrap-scrollspy.js',
		'js/prettify.js',
		'js/docs.js'
	],
	function(errors, window) {
		var head = window.getDocument().getElement('head'),
			css = head.getElement('link');

		// add custom stylesheet
		var bootstrap = new window.Element('link', {
			href: 'css/bootstrap.css',
			type: 'text/css',
			rel: 'stylesheet'
		}).replaces(css);

		// move the scripts to the head
		window.document.getElements('.jsdom').removeClass('jsdom').inject(head);

		// prettify
		window.document.getElements('pre').addClass('prettyprint linenums');

		/*
		window.document.getElements('a.api').each(function(a) {
			var api = [],
				searching = true,
				c = true;

			while(searching && c) {
				c = a.getNext();

				if (c.hasClass('api-end')) {
					c.destroy();
					searching = false;
				}
				else {
					api.push(c);
				}
			}

			var foo = new window.Element('div.alert.alert-info').adopt(api).replaces(a);
		});
		*/

		// fix doctype
		html = ['<!DOCTYPE html>', window.document.innerHTML].join('\n');

		// write to file.
		fs.writeFile('index.html', html, function(error) {
			if (error) {
				console.log('Failed to create index.html. ', error);
				process.exit(1);
			}
			else {
				console.log('index.html was created');
				process.exit(0);
			}
		});
	});
});
