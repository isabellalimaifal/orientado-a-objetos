class ConversorDeMoeda {
    static taxaPadrao = 5.0;

    static converterParaDolar(valorEmReais, taxaCambio  = ConversorDeMoeda.taxaPadrao){
        return valorEmReais / taxaCambio;
    }
}

console.log(ConversorDeMoeda.converterParaDolar(50));
console.log(ConversorDeMoeda.converterParaDolar(50, 4.8));
