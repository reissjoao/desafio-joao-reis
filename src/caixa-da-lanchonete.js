class CaixaDaLanchonete {

    calcularValorDaCompra(formaDePagamento, itens) {
        
        const cardapio = {
            cafe: {
              codigo: 'cafe',
              descricao: 'Café',
              valor: 3.00,
            },
            chantilly: {
              codigo: 'chantilly',
              descricao: 'Chantily (extra do Café)',
              valor: 1.50,
            },
            suco: {
              codigo: 'suco',
              descricao: 'Suco Natural',
              valor: 6.20,
            },
            sanduiche: {
              codigo: 'sanduiche',
              descricao: 'Sanduíche',
              valor: 6.50,
            },
            queijo: {
              codigo: 'queijo',
              descricao: 'Queijo (extra do Sanduíche)',
              valor: 2.00,
            },
            salgado: {
              codigo: 'salgado',
              descricao: 'Salgado',
              valor: 7.25,
            },
            combo1: {
              codigo: 'combo1',
              descricao: '1 Suco e 1 Sanduíche',
              valor: 9.50,
            },
            combo2: {
              codigo: 'combo2',
              descricao: '1 Café e 1 Sanduíche',
              valor: 7.50,
            },
          };

          const formasPagamento = ['dinheiro', 'debito', 'credito'];

          // Verifica se os itens estão presentes
          if (itens.length === 0) {
            return "Não há itens no carrinho de compra!";
          }

          // Verifica se a quantidade de itens é maior que zero
          itens.forEach(item => {
            if(item.quantidade <= 0) {
                return "Quantidade inválida!";
            }
          });

          // Verifica se o código do item existe no cardápio
          itens.forEach(item => {
            if(!cardapio.hasOwnProperty(item.codigo)) {
                "Item inválido!";
            }
          });

          // Verifica se a forma de pagamento é válida
          if(!formasPagamento.hasOwnProperty(formaDePagamento)) {
            return "Forma de pagamento inválida!";
          }

          // Calculaa o valor total da compra
          let valorTotal = 0;
          itens.forEach(item => {
            valorTotal += item.quantidade * cardapio.get(item.codigo);
          });

          // Aplicação do desconto e acréscimo valor total
          if(formaDePagamento === "dinheiro") {
            valorTotal *= 0.95;
          } else if (formaDePagamento === "credito") {
            valorTotal += 1.03;
          }

        return valorTotal.toFixed(2);
    }

}

export { CaixaDaLanchonete };
