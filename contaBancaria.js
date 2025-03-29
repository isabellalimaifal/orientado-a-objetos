class Conta {
    #saldo;
    #titular;
    #numeroConta;

    constructor(titular) {
        this.#saldo = 100;
        this.#titular = titular;
        this.#numeroConta = 1234;
    }

    depositar(valor) {
        if (valor > 0) {
            this.#saldo += valor;
            console.log(`Depósito de R$ ${valor} realizado!`);
        } else {
            console.log(`Não foi possível realizar o depósito de R$ ${valor}. Tente novamente!`);
        }
    }

    sacar(valor) {
        if (valor > this.#saldo) {
            console.log("Valor indisponível!");
            return false;
        } else {
            this.#saldo -= valor;
            console.log(`Saque de R$ ${valor} realizado!`);
            return true;
        }
    }

    verSaldo() {
        return this.#saldo;
    }

    transferir(valor, contaDestino) {
        if (!contaDestino || !contaDestino.verSaldo) {
            console.log("Conta de destino inválida!");
            return;
        }

        if (this.#saldo < valor) {
            console.log("Valor indisponível!");
        } else {
            this.#saldo -= valor;
            contaDestino.depositar(valor);
            console.log(`Transferência de R$ ${valor} enviada para ${contaDestino.getTitular()}.`);
        }
    }

    setTitular(titular) {
        this.#titular = titular;
    }

    getTitular() {
        return this.#titular;
    }
}

// Criando duas contas para testar a transferência
let conta1 = new Conta("Matthew");
let conta2 = new Conta("Foggy Nelson");

console.log(`O saldo atual de ${conta1.getTitular()} é de R$: ${conta1.verSaldo()}`);
conta1.depositar(20);
console.log("O saldo após o depósito é de R$: ", conta1.verSaldo());
conta1.sacar(10);
console.log("O saldo após o saque é de R$: ", conta1.verSaldo());
conta1.transferir(30, conta2);
console.log("O saldo de Matthew após a transferência é de R$: ", conta1.verSaldo());
