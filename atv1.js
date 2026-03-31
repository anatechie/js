
const prompt = require('prompt-sync')()

class Produto{
   constructor(nome, preco, quantidade){
    this.nome = nome
    this.preco = preco
    this.quantidade = quantidade
   } 

   mostrarDisponiveis(){
      console.log(`NOME DO PRODUTO: ${this.nome} |
                   PREÇO: R$${this.preco}
                   QUANTIDADE: ${this.quantidade} `)  
   }
}

class Carrinho{
    constructor(nome, preco, quantidade, itens, valorTotal, totalItens, status){
        super(nome, preco, quantidade)
        this.itens = []
        this.valorTotal = valorTotal
        this.totalItens = totalItens
        this.status = status
   } 

   adicionarProduto(nome){
         if(nome.quantidade > 0){
             this.itens.push(nome)
            console.log(`O produto ${quantidade.nome}`)
        }
   }

   calcularTotal(quantidade, preco){
        if(this.quantidade > 0){ 
            preco += quantidade * preco
            console.log(`O preço do produto ${this.nome} é R$${preco}`)
        }else{
            console.log(`Produto sem estoque`)
        }


    }
}

class Mercado{
   constructor(tipoMercado, setor, estoque){
        this.tipoMercado = tipoMercado
        this.setor = setor
        this.estoque = estoque
       
   } 

 
}