class Livro{
    constructor(titulo, autor){
        this.titulo = titulo;
        this.autor = autor;
    }

    getTitulo(){
        return this.titulo;
    }

    getAutor(){
        return this.autor;
    }

    imprimirDados(){
        console.log(`Título: ${this.titulo}, Autor: ${this.autor}`);
    }
}

class Biblioteca {
    constructor(){
        this.livros = [];
    }

    adicionarLivro(titulo, autor){
        if (this.livros.length < 5){
            this.livros.push(new Livro(titulo, autor));
        }else{
            console.log("A biblioteca está cheia!");
        }
    }

    removerLivro(titulo){
        this.livros = this.livros.filter(livro => livro.getTitulo() !== titulo);
    }

    listarLivros(){
        this.livros.forEach(livro => livro.imprimirDados());
    }

}

const minhaBiblioteca = new Biblioteca();
minhaBiblioteca.adicionarLivro("Uma Vida Pequena", "Hanya Yanagihara");
minhaBiblioteca.adicionarLivro("Noites Brancas", "Fiódor Dostoiévski");
minhaBiblioteca.adicionarLivro("Notas do Subterrâneo", "Fiódor Dostoiévski");

console.log("Agenda completa:");
minhaBiblioteca.listarLivros();

console.log("Removendo Noites Brancas...");
minhaBiblioteca.removerLivro("Noites Brancas")

console.log("Biblioteca após remoção:");
minhaBiblioteca.listarLivros();