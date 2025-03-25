class Pessoa {
    constructor(nome, anoNascimento, altura){
        this._nome = nome;
        this._anoNascimento = anoNascimento;
        this._altura = altura;
    }

    getNome(){
        return this._nome;
    }

    setNome(nome){
        this._nome = nome;
    }

    getAnoNascimento(){
        this._anoNascimento = anoNascimento;
    }

    setAnoNascimento(ano){
        this._anoNascimento = ano;
    }

    getAltura(){
        this._altura = altura;
    }

    setAltura(altura){
        this._altura = altura;
    }

    calcularIdade(anoAtual){
        return anoAtual - this._anoNascimento;
    }

    imprimirDados(){
        console.log(`Nome: ${this._nome}, Idade: ${this.calcularIdade(2025)}, Altura: ${this._altura}m`);
    }
}

const pessoa1 = new Pessoa("Matt",  1994, 1.75);
pessoa1.imprimirDados();