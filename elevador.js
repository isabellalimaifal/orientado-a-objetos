class Elevador {
    constructor(capacidade, totalAndares){
        this.capacidade = capacidade;
        this.totalAndares = totalAndares;
        this.pessoas = 0;
        this.andarAtual = 0;
    }

    entra(){
        if (this.pessoas < this.capacidade){
            this.pessoas++;
        }else{
            console.log("Elevador cheio!");
        }
    }

    sai(){
        if (this.pessoas > 0){
            this.pessoas--;
        }else{
            console.log("O elevador já está vazio!");
        }
    }

    sobe(){
        if (this.andarAtual < this.totalAndares){
            this.andarAtual++;
        }else{
            console.log("Já está no último andar!");
        }
    }

    desce(){
        if (this.andarAtual > 0){
            this.andarAtual--;
        }else{
            console.log("Já está no térreo!");
        }
    }
}

const meuElevador = new Elevador(5, 10);
meuElevador.entra();
meuElevador.entra();
meuElevador.sobe();
meuElevador.sobe();
meuElevador.desce();
console.log("Andar atual:", meuElevador.andarAtual);
console.log("Pessoas no elevador:", meuElevador.pessoas);