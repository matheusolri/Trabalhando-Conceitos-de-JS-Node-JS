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
