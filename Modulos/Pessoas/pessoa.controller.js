angular	
	.module('pessoaModule')
	.controller('pessoaController', pessoaController)

	function pessoaController($scope,produtoService,$state){
	$scope.pessoas = pessoaService.listarPessoas();

			$scope.goCadastrarPessoa = function(){
				$state.go('pessoaCadastrar');
			}
			$scope.excluirPessoa = function(pessoa){
				pessoaService.deletarPessoa(pessoa);
				$scope.pessoas = pessoaService.listarPessoas();
			}
	}
