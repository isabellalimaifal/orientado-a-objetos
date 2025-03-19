class Contador {
    static #total = 0;
    constructor(){
    }
    
    static obterTotal() {
        return this.#total
    }
}

let c = new Contador();
console.log(Contador.obterTotal());
