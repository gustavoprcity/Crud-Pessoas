angular
	.module('pessoaModule')
	.config(config)

	function config($stateProvider, $urlRouterProvider){
		$stateProvider
		.state('pessoa',{
			url: '/pessoa',
			controller: 'pessoaController',
			templateUrl: 'Modulos/Pessoas/pessoa.html'
		})

		.state('pessoaCadastrar',{
			url: '/pessoaCadastrar',
			controller: 'pessoaController',
			templateUrl: '/Modulos/Pessoas/pessoaCadastrar.html'
		})

	}