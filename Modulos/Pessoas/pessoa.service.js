angular
	.module('pessoaModule')
	.factory('pessoaService',pessoaService)

	function pessoaService(){
		var pessoas = [];

		var service = {
			listarPessoas: listarPessoas,
			cadastrarPessoa: cadastrarPessoa,
			deletarPessoa: deletarPessoa
		}

		function listarPessoas(){
			return pessoa;
		}

		function cadastrarPessoa(pessoa){
			var copiaPessoa = angular.copy(pessoa);
			pessoas.push(copiaPessoa);
		}

		function deletarPessoa(pessoa){
			var posicao = pessoas.indexOf(pessoa);
			pessoas.splice(posicao);
		}

		return service;

	}
