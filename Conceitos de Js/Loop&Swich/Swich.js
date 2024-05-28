// é uma expressão de casos, em que podemos acesar ou colocar para fazer determinadas condições atavés do caso que voçe digitar
//dentro do parenteses do swich fica o caso
//o prompt sempre devolve como muma string por isso botar o Number(valor) para tranformar o valor em um numero e não mais uma string
//o break serve para parar a execussão ali
//o default serve para se o usúario digitar uma opção que não possua no switch
function pedir(){
var valor = prompt("digite um valor de 1 a 4");

switch(Number(valor)){
case 1 :
    alert("voçe escolheu 1 - Suco")
    break;
    case 2 :
    alert("voçe escolheu 2 - Agua")
    break;
    case 3 :
    alert("voçe escolheu 3 - Sorvete")
    break;
    case 4 :
    alert("voçe escolheu 4 - Chamar o Garçom")
    break;
    default:
        alert("escolha um numero entre 1 e 4")
}
}
