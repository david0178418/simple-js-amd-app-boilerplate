define(function(require) {
	var $ = require('jquery'),
		_ = require('lodash');

	return function(appSelector) {
		this.init = function() {
			$(appSelector).text('Javascript App Started!');
		};
	};
})