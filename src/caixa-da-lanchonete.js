class CaixaDaLanchonete {
  constructor() {
    this.prices = {
      cafe: 3.0,
      chantily: 1.5,
      suco: 6.2,
      sanduiche: 6.5,
      queijo: 2.0,
      salgado: 7.25,
      combo1: 9.5,
      combo2: 7.5,
    };
    this.extrasForMainItems = {
      cafe: ['chantily'],
      sanduiche: ['queijo'],
    };
  }

  calcularValorDaCompra(formaDePagamento, itens) {
    const formasDePagamentoValidas = ['debito', 'credito', 'dinheiro'];
    const itemQuantities = {};

    if (!formasDePagamentoValidas.includes(formaDePagamento)) {
      return 'Forma de pagamento inválida!';
    }

    if (itens.length === 0) {
      return 'Não há itens no carrinho de compra!';
    }

    for (const item of itens) {
      const [itemCode, quantity] = item.split(',');

      if (!this.prices[itemCode]) {
        return 'Item inválido!';
      }

      if (!itemQuantities[itemCode]) {
        itemQuantities[itemCode] = 0;
      }

      itemQuantities[itemCode] += parseInt(quantity);
    }

    for (const itemCode in itemQuantities) {
      if (this.extrasForMainItems[itemCode]) {
        for (const extra of this.extrasForMainItems[itemCode]) {
          if (!itemQuantities[itemCode] && itemQuantities[extra]) {
            return 'Item extra não pode ser pedido sem o principal';
          }
        }
      }
    }

    if (itemQuantities.cafe === 0) {
      return 'Quantidade inválida!';
    }

    let total = 0;
    for (const itemCode in itemQuantities) {
      if (this.prices[itemCode]) {
        total += this.prices[itemCode] * itemQuantities[itemCode];
      }
    }

    if (formaDePagamento === 'dinheiro') {
      total *= 0.95; 
    } else if (formaDePagamento === 'credito') {
      total *= 1.03; 
    }

    const formattedTotal = total.toFixed(2).replace('.', ',');
    const formattedTotalWithCurrency = `R$ ${formattedTotal}`;

    return formattedTotalWithCurrency;
  }
}

export { CaixaDaLanchonete };
