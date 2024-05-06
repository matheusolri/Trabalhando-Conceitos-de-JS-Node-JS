/* 
-os arrays são usados para armazenar vários valores em uma única variável 

-diferentemente dos objetos que você acha propriedades ou nomes que você dá a itens dentro dele , os arrays não possuem propriedades voçe encontra os itens dentro deles por posição

-o array começa a ser preenchido a partir da posição 0

-resumindo um array é uma lista de itens com controle por ordem de posição dentro dele

ex const lista = [“matheus”, “josé”, “claudio”] logo a lista na posição [1] vai conter o valor josé
*/

const lista =["matheus","josé","claudio", "aroldo"]


lista.push("adriano");//adiciona adriano na ultima posição da lista, nesse caso após aroldo
lista[5]="jorge";//adiciona jorge na psição 5 da lista
console.log(lista);//mostra todos os itens da lista
console.log(lista.length); //saber o tamanho da lista
console.log(lista[1]); // saber o valor da posção 1 da lista
console.log(lista.indexOf('matheus'));//para achar a posição de um item na listta
console.log(lista.join(","));//para adicionar um item entre os itens da lista
console.log(lista.pop());//remove o ultimo item da lista'
console.log(lista.shift());//tira o primeiro valor da lista
