
/*são basicamente variáveis com muitos valores dentro ex : const carro = {marca=”ford”, modelo=”ka”,ano : 2005 }

oque tem dentro dos objetos são chamados de  propriedade

objetos também possuem métodos que são como funções colocado dentro de propiedades

geralmente objetos são feitos com tipo de variável const
*/

const carro = {
    marca:"ford",
    modelo:"ka",
    ano:2001,
    placa:"abc-1234",
    busina:function(){alert("biiiiiiiiiiii")},// um método chamado buzina
    completo:function(){
        return "a marca do carro é "+this.marca+" e seu modelo é " +this.modelo + " do ano de "+this.ano
    }// um método cgmado completo

}
alert(carro.completo());
