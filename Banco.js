class Conta {
    #saldo
    constructor(){
        this.#saldo = 100;
        this.titular = "";
    }

    setTitular(nome){
        this.titular = nome;
    }

    depositar(valor){
        if (valor > 0){
            this.#saldo += valor;
            console.log(`Deposito de R$ ${(valor)} realizado!`)
        }else{
            console.log(`Não foi possível realizar o deposito de R$ ${(valor)}. Tente novamente!`)
        }
    }

    sacar(valor){
        if (valor > this.#saldo){
            console.log("Valor indisponível!");
            return false;
        }else{
            this.#saldo = this.#saldo - valor;
            console.log(`Saque de R$ ${valor} realizado!`);
            return true;

        }
    }

    consultarSaldo(){
        return this.#saldo;
    }
}

let conta = new Conta();
conta.setTitular('Murdock');
console.log(`O Saldo atual de ${(conta.titular)} é de R$:`, conta.consultarSaldo());
conta.depositar(20);
console.log("O Saldo após o depósito é de R$:", conta.consultarSaldo());
conta.sacar(20);
console.log("O Saldo após o saque é de R$:", conta.consultarSaldo());
