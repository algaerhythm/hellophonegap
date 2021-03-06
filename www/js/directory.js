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
function BusinessesController($scope){
			$scope.businesses =[{ name:'Unitel' },
								{ name:'88mph' },
								{ name:'Pick n Pay' },
								{ name:'Samsung' },
								{ name:'Groote Schuur' },
								{ name:'Engen' },
								{ name:'McDonalds' }
							   ];
}
directoryApp.controller('CategoriesController', CategoriesController);
directoryApp.controller('BusinessesController', BusinessesController);
