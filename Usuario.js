class Usuario {
    #senha
    constructor(){
        this.#senha = 3231;
    }

    definirSenha(senha){
        this.#senha = senha;
    }

    verificarSenha(senha){
        return this.#senha === senha
    }
}

let user = new Usuario();
user.definirSenha(5555);
console.log(user.verificarSenha(5555));
