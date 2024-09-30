class ContaBancaria {
    saldo;
    nomeCorrentista;
    numeroConta;

    constructor() {
        this.numeroConta = 0;
        this.saldo = 0;
        this.nomeCorrentista = "";
    }

    sacar(_valorSaque) {
        if(_valorSaque <= this.saldo) {
        this.saldo -=
        _valorSaque;
    } else {
        console.log("Saldo insuficiente");
    }
}
    depositar(_valorDeposito) {
        this.saldo = _saldo
        if(_valorDeposito > 0) {
            this.saldo += 
            _valorDeposito;
        } else {
            console.log("Valor inválido!");
        }
    }

    mostrarSaldo() {
        return this.saldo; //retornar o atricuto salvo
    }
}

const c1 = new ContaBancaria();
c1.depositar(10);
c1.depositar(10);
c1.mostrarSaldo();
console.log(c1.mostrarSaldo());
