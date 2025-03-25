class Pessoa {
    constructor(nome, idade, altura){
        this._nome = nome;
        this._idade = idade;
        this._altura = altura;
    }

    getNome() {
        return this._nome;
    }

    imprimirDados() {
        console.log(`Nome: ${this._nome}, Idade: ${this._idade} anos, Altura: ${this._altura}m`);
    }
}

class Agenda {
    constructor(){
        this.pessoas = [];
    }

    armazenaPessoa(nome, idade, altura){
        if(this.pessoas.length < 10) {
            this.pessoas.push(new Pessoa(nome, idade, altura));
        }else{
            console.log("Agenda cheia!");
        }
    }

    removerPessoa(nome){
        this.pessoas = this.pessoas.filter(pessoa => pessoa.getNome() !== nome);
    }

    buscarPessoa(nome){
        const index = this.pessoas.findIndex(pessoa => pessoa.getNome() === nome);
        return index !== -1 ? index : "Pessoa não encontrada";
    }

    imprimeAgenda(){
        this.pessoas.forEach(pessoa => pessoa.imprimirDados());
    }

    imprimePessoa(index){
        if (index >= 0 && index < this.pessoas.length){
            this.pessoas[index].imprimirDados();
        }else{
            console.loh("Índice inválido!");
        }
    }
}

const minhaAgenda = new Agenda();
minhaAgenda.armazenaPessoa("Alice", 30, 1.65);
minhaAgenda.armazenaPessoa("Bob", 25, 1.79);

console.log("Agenda completa:");
minhaAgenda.imprimeAgenda();

console.log("Posição do Bob:", minhaAgenda.buscarPessoa("Bob"));

console.log("Removendo Alice...");
minhaAgenda.removerPessoa("Alice");

console.log("Agenda após remoção:");
minhaAgenda.imprimeAgenda();