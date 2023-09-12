class Pedidos{
    constructor(cliente,mesa,descricao){
        this.cliente= cliente;
        this.mesa = mesa;
        this.descricao = descricao
        this.id= this.gerarId();
    }
    gerarId(){
        return Math.floor(Math.random()*1000)
    }
}