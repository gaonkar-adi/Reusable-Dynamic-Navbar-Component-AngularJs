mainApp.config(function($routeProvider) {
	$routeProvider
		.when('/home', {
			templateUrl: './app/components/homepage/home.html',
			controller: 'homeController'
		})
		.when('/basicgrid', {
			templateUrl: './app/components/grid-demo/grid-template.html'
		}).when('/gridfilter', {
			templateUrl: './app/components/grid-filter/grid-filter-template.html'
		}).when('/gridpagination', {
			templateUrl: './app/components/pagination/grid-pagination.html'
		})
		.when('/gridcheckbox', {
			templateUrl: './app/components/grid-checkbox-selection/grid-checkbox-template.html'
		})
		.when('/gridcolumnresizing', {
			templateUrl: './app/components/grid-column-resizing/column-resizing-template.html'
		}).when('/gridinlineedit', {
			templateUrl: './app/components/grid-editable/editable-grid-template.html'
		}).when('/gridfreeze', {
			templateUrl: './app/components/grid-column-freeze/grid-freeze-template.html',
		}).when('/gridmulticolumnheader', {
			templateUrl: './app/components/grid-multi-column-header/grid-multi-column-header-template.html',
		}).when('/gridcolgrouping', {
			templateUrl: './app/components/grid-column-grouping/grid-grouping-template.html'
		})
		.otherwise({
			redirectTo: '/home'
		});
});
