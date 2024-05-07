/*For


//(Contagem Simples de a até 10000)

for(a=0;a<1001;a++){
    document.write("<br> o valor de A é: "+a)
}
*/

//(fazendo caixa de seleção com opções de ano : do ano que estamos até 1900 utilizando o for)

var ano= new Date().getFullYear();
for(let i=ano ; i >= 1900; i--){
    document.getElementById("ano").innerHTML += "<option value='"+i+"'>"+i+"</option.";
}

//percorrendo array com for
const carros =["Fusca","Brazilia","Porche", "Hilux"];
var tamanho = carros.length;
for(let i=0 ;i<tamanho; i++){
    document.getElementById("teste").innerHTML+= carros[i]+"-";
}

//While
/*var x =0;
while(x<10){
    document.write("<br> O valor de x é igaul a: " +x)
    x++;
}
*/