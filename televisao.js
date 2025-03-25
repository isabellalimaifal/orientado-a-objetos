class Televisao {
    constructor(){
        this.canal = 1;
        this.volume = 10;
    }
}

class ControleRemoto {
    constructor(tv){
        this.tv = tv;
    }

    aumentarVolume(){
        this.tv.volume++;
    }

    diminuirVolume(){
        this.tv.volume--;
    }

    aumentarCanal(){
        this.tv.canal++;
    }

    diminuirCanal(){
        this.tv.canal--;
    }

    trocarCanal(canal){
        this.tv.canal = canal;
    }

    consultar(){
        console.log(`Canal: ${this.tv.canal}, Volume: ${this.tv.volume}`);
    }
}

const minhaTv = new Televisao();
const controle = new ControleRemoto(minhaTv);
controle.trocarCanal(5);
controle.aumentarVolume();
controle.consultar();