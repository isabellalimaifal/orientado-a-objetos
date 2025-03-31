class Produto {
    #nome;
    #preco;
    #quantidadeEmEstoque;

    constructor(nome, preco){
        this.#nome = nome;
        this.#preco = preco;
        this.#quantidadeEmEstoque = 100;
    }

    getNome(){
        return this.#nome;
    }

    setNome(nome){
        this.#nome = nome;
    }

    getPreco(){
        return this.#preco;
    }

    setPreco(preco){
        this.#preco = preco;
    }

    getQuantidadeEmEstoque(){
        return this.#quantidadeEmEstoque;
    }

    reporEstoque(quantidade){
        if (quantidade <= 0){
            console.log("Quantidade inválida para reposição!");
        }else {
            this.#quantidadeEmEstoque += quantidade;
            console.log(`Foram repostas ${quantidade} unidades.`);
        }
    }

    vender(quantidade){
        if (quantidade > this.#quantidadeEmEstoque){
            console.log("Estoque insuficiente!");
        }else{
            this.#quantidadeEmEstoque -= quantidade;
            console.log(`Venda de ${quantidade} unidades realizada!`);
        }
    }

    exibirInfo(){
        console.log(`Produto: ${(this.#nome)}, Preço: R$ ${(this.#preco.toFixed(2))}, Estoque: ${(this.#quantidadeEmEstoque)}`);
    }
}

let produto1 = new Produto("Notebook Games ASUS ROG Strix", 7500);
produto1.exibirInfo();
produto1.vender(50);
produto1.exibirInfo();
produto1.reporEstoque(50);
produto1.exibirInfo();
