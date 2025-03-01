class Carro {
    #velocidadeMaxima;

    constructor(cor, modelo, velocidadeMaxima, motor) {
        this.cor = cor;
        this.modelo = modelo;
        this.velocidadeAtual = 0;
        this.#velocidadeMaxima = velocidadeMaxima;
        this.motor = motor;
    }

    liga() {
        console.log(`O carro ${this.modelo} de cor ${this.cor} está ligado. \nMotor: ${this.motor.tipo}\n`);
      }    

    acelera(quantidade) {
        if (this.velocidadeAtual = quantidade > this.#velocidadeMaxima) {
            console.log("\nVelocidade máxima atingida!");
            this.velocidadeAtual = this.#velocidadeMaxima;
        } else {
            this.velocidadeAtual += quantidade;
        }
    }

    informaMarcha() {
        if (this.velocidadeAtual < 0) return -1;
        if (this.velocidadeAtual <= 39) return 1;
        if (this.velocidadeAtual <= 79) return 2;
        return 3;
    }

    get velocidadeMaxima() {
        return this.#velocidadeMaxima;
    }

    set velocidadeMaxima(valor) {
        console.log("A velocidade máxima não pode ser alterada!\n");
    }
}

class Motor {
    constructor(potencia, tipo) {
        this.potencia = potencia;
        this.tipo = tipo;
    }
}

const motorGasolina = new Motor(150, "Gasolina");
const carroFusca = new Carro("Verde", "Fusca", 80, motorGasolina);

console.log("");
carroFusca.liga();
carroFusca.acelera(20);
console.log(`Velocidade Atual: ${carroFusca.velocidadeAtual} km/h`);
console.log(`Marcha Atual: ${carroFusca.informaMarcha()}\n`);

carroFusca.acelera(30);
console.log(`Velocidade Atual: ${carroFusca.velocidadeAtual} km/h`);
console.log(`Marcha Atual: ${carroFusca.informaMarcha()}\n`);

carroFusca.acelera(50);
console.log(`Velocidade Atual: ${carroFusca.velocidadeAtual} km/h`);
console.log(`Marcha Atual: ${carroFusca.informaMarcha()}`);

carroFusca.acelera(100);
console.log(`Velocidade Atual: ${carroFusca.velocidadeAtual} km/h`);
carroFusca.velocidadeMaxima = 100;

const motorEletrico = new Motor(200, "Elétrico");
const carroTesla = new Carro("Preto", "Tesla", 150, motorEletrico);

carroTesla.liga();
carroTesla.acelera(100);
console.log(`Velocidade Atual: ${carroTesla.velocidadeAtual} km/h`);
console.log(`Marcha Atual: ${carroTesla.informaMarcha()}\n`);

carroTesla.acelera(60);
console.log(`Velocidade Atual: ${carroTesla.velocidadeAtual} km/h`);
console.log(`Marcha Atual: ${carroTesla.informaMarcha()}\n`);
