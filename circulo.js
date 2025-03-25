class Circulo {
    constructor(raio){
        this.raio = raio;
    }

    calcularArea(){
        return 3.14 * this.raio^2;
    }

    calcularPerimetro(){
        return 2 * 3.14 * this.raio;
    }
}

const circulo1 = new Circulo(5);
console.log("Área:", circulo1.calcularArea());
console.log("Perímetro:", circulo1.calcularPerimetro());