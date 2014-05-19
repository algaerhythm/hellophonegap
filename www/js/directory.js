var directoryApp = angular.module('directoryApp',['ngRoute']);

directoryApp.config(function($routeProvider){


	$routeProvider
		.when('/',
			  {
				  controller: 'HomeController',
				  templateUrl: 'partials/home.html'
			  })
		.when('/categories',
				  {
					  controller: 'CategoriesController',
					  templateUrl: 'partials/home.html'
				  })
		.when('/businesses',
				  {
					  controller: 'BusinessesController',
					  templateUrl: 'partials/home.html'
				  })
		.otherwise( { redirectTo: '/' } );
});
}
function CategoriesController($scope){
			$scope.categories =[{ name:'Acomodacao' },
								{ name:'Bancos' },
								{ name:'Servicos de Mecanica' },
								{ name:'Servicos de Saude' },
								{ name:'Suporte Legal' },
								{ name:'Servicos de Construcao' },
								{ name:'Restaurantes' }
							   ];
}
directoryApp.controller('CategoriesController', CategoriesController);
