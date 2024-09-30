class Animal { //classe 
    nome_especie; //atributo da classe/armazenar valores

    constructor(_nome_especie){ //recebe uma variavel //é uma função especial que define como é e como fazer meu objeto
        this.nome_especie = _nome_especie; //this = pegar os métodos ou atributos da classe 
    }
        
    movimentar() { //função
        console.log('Sou um e estou me movimentando'); 
    }
}

const cachorro = new Animal(); //'cachorro' vai ser um objeto do tipo animal. 'new Animal();' chama a função 'constructor'
cachorro.movimentar('cachorro');

const gato = new Animal("gato");
gato.movimentar();
