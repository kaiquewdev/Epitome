#!/usr/bin/env node
var dom = require('jsdom'),
	request = require('request'),
	fs = require('fs'),
	repo = 'DimitarChristoff/Epitome',
	build = 'http://documentup.com/' + repo,
	compile = 'http://documentup.com/' + repo + '/recompile/',
	writeDocs = function() {
		request(build, function(error, response, html) {
			if (error) {
				console.log('Failed to get documentation.', error);
				process.exit(1);
			}

			// now, create a jsdom document out of the response, injecting the extra scripts
			dom.env(html, [
				'http://ajax.googleapis.com/ajax/libs/mootools/1.4.5/mootools-yui-compressed.js',
				'js/moostrap-scrollspy.js',
				'js/docs.js'
			],
			function(errors, window) {
				var head = window.getDocument().getElement('head'),
					css = head.getElement('link');



				// add custom stylesheet
				new window.Element('link', {
					href: 'css/docs.css',
					type: 'text/css',
					rel: 'stylesheet'
				}).replaces(css);

				// move the scripts to the head
				window.document.getElements('.jsdom').removeClass('jsdom').inject(head);

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
			})

		});
	};

// get going. compile first, then get the new docs.
request(compile, function(error, response, html) {
	if (error) {
		console.log('Failed to recompile docs.', error);
		process.exit(1);
	}
	// give it some time to generate
	setTimeout(writeDocs, 2000);
});
