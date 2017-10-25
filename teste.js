var idade = 30;
idade = 30 + 20 - 10*5;

var nome;
nome = prompt("Qual é seu nome?");
alert("Olá, " + nome);

function exibirMensagem() {
	alert(“Olá, seja bem vindo(a)!”);
}

function somar(A, B) {
	return A + B;
}

if(condição 1) {
  //ação se condição 1 verdadeira
}
else if (condição 2) {
  //ação se condição 2 verdadeira
}
else {
  //ação se nenhuma das condições for verdadeira
}

if(idade > 18) {
	alert(“É maior de idade”).
}
else {
	alert(“É menor de idade”);
}

switch(dia) {	
	case 1:
		alert(“Hoje é domingo”);
	break;
	case 2:
		alert(“Hoje é segunda”);
	break;
	case 3:
		alert(“Hoje é terça”);
	break;
	default:
		alert(“Hoje não é nem domingo, nem segunda, nem terça”);
	break
}

var contador = 0;
while(contador < 5) {
  alert(“Olá”);
  contador = contador + 1;
}

var contador = 0;
do {
	alert(“Olá”);
	contador = contador + 1;
}
while(contador < 5)
var contador;

for(contador = 0; contador < 10; contador++) {
	alert(contador);
}

function clique_botao() {
	alert("Você clicou no botão");
}