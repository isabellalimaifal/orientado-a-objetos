class Robo {
    nome;
    carga_bateria;
    gasto_por_acelerada;
    velocidade_atual;

    constructor (nome, carga_bateria, gasto_por_acelerada) {
        this.nome = nome;
        this.carga_bateria = carga_bateria;
        this.gasto_por_acelerada = gasto_por_acelerada;
        this.velocidade_atual = 0;
    }

    exibirBateria() {
        console.log(`Bateria restante: ${this.carga_bateria}`);
    }

    exibirVelocidade() {
        console.log(`Velocidade atual: ${this.velocidade_atual}`);
    }

    acelerar(valor) {
        if (valor <= 0) {
            console.log("O valor para acelerar deve ser maior que zero!");
            return;
        }
        const bateria_necessaria = valor * this.gasto_por_acelerada;
        if (bateria_necessaria > this.carga_bateria) {
            console.log('Bateria insuficiente para acelerar!'); 
        } else {
            this.carga_bateria -= bateria_necessaria;
            this.velocidade_atual += valor;
            console.log(`Acelerou para ${this.velocidade_atual} km/h. Bateria restante ${this.carga_bateria}`);
        }
    }   

}

const meuRobo = new Robo('Robo1', 100, 5);
meuRobo.exibirBateria();
meuRobo.acelerar(10);
meuRobo.exibirVelocidade();
meuRobo.acelerar(15);
meuRobo.exibirBateria();
/**
 * Criar uma classe Robo, que posui as seguintes características:
 * nome, carga da bateria, quantidade de bateria que gasta para cada acelerada, velocidade atual, exibir quanto tem de bateria, e exibir a sua velocidade atual.
 * 
 *  Para acelerar, pede o valor que vai acelerar. Sendo que este valor não pode ser 0. Também não é possível acelerar se para o valor a ser gasto da bateria ao acelerar for maior que a carga da bateria
 */