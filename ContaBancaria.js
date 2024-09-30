class ContaBancaria {
    saldo;
    nomeCorrentista;
    numeroConta;

    sacar() {

    }

    depositar(valorDeposito) {
        if(valorDeposito > 0) {
            this.saldo += 
            valorDeposito;
        } else {
            console.log("Valor inválido!");
        }
    }

    mostrarSaldo() {
        return this.saldo; //retornar o atricuto salvo
    }

}

const c1 = new ContaBancaria();
c1.depositar = (10);
console.log(c1.mostrarSaldo());

const c2 = new ContaBancaria();
c2.depositar(49);
console.log(c2.mostrarSaldo());
