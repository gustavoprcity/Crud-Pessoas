angular
	.module('app',['ui.router','pessoaModule'])
	.controller('appController',appController)
	.config(config)

	function appController($scope, $state){

	}

	function config($stateProvider, $urlRouterProvider){
			$stateProvider
			.state('index',{
			url: '/index',
			controller: 'appController',
			templateUrl: 'index.html'
			})
	}	