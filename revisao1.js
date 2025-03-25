class Quadrado {
    constructor(lado){
        this.lado = lado;
    }

    calcularArea(){
        return this.lado * this.lado;
    }

    calcularPerimetro(){
        return 4 * this.lado;
    }
}

const quadrado1 = new Quadrado(7);
console.log("Área: ", quadrado1.calcularArea());
console.log("Perímetro: ", quadrado1.calcularPerimetro());
