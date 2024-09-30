class Animal { //classe 
    nome_especie;

    constructor(nomeAnimal){ //é uma função especial que define como é e como fazer meu objeto
        console.log("Construindo um animal..");
    }
        
    movimentar() { //função
        console.log('Sou um e estou me movimentando'); 
    }
}

const cachorro = new Animal(); //'cachorro' vai ser um objeto do tipo animal. 'new Animal();' chama a função 'constructor'
cachorro.movimentar();

const gato = new Animal();
gato.movimentar();