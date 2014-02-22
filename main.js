requirejs.config({
	//urlArgs: "bust=" +  (new Date()).getTime(),	//cache-bust if needed
	baseUrl: 'src',
	paths: {
		'jquery': '../libs/jquery/dist/jquery',
		'lodash': '../libs/lodash/dist/lodash',
	}
});

require(['app'],
	function(App) {
		var app = new App('#app');

		app.init();
	}
);
