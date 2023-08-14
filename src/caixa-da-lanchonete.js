class CaixaDaLanchonete {

    constructor() {
        // Definindo os preços dos itens e combos aqui
        this.prices = {
          cafe: 2.5,
          chantily: 1.5,
          combo1: 10,
        };
      }

    calcularValorDaCompra(metodoDePagamento, itens) {
        // Verificando a forma de pagamento 
    if (formaDePagamento !== 'debito' && formaDePagamento !== 'credito' && formaDePagamento !== 'dinheiro') {
      return 'Forma de pagamento inválida!';
    }

    // Criando um objeto para armazenar a contagem de itens
    const itemQuantities = {};

    
  }
}
    

export { CaixaDaLanchonete };
