/*é como uma pequena fábrica onde voçe faz entrada e ela te dá uma saída, 
são encaradas como mini programas projetada para fazer uma tarefa que vai contribuir paara todo código, e é executada quando algo a invoca*/

//função de soma :
function soma (valor1 , valor2){
    return valor1 + valor2;
}


var total = soma(10 ,5);
alert(total);


//Invocando função :
 <button onclick="hello()">clique aqui</button>
function hello (){
    alert("olá pessoal");
}

//converter fahrenheit para celsius : 
function convertecelcius(valorfarenheith){
    return (5/9)*(valorfarenheith-32)
}

var x = convertecelcius(77);

alert("a temperatura em celcius é de "+x+ " graus")

