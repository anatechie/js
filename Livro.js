

class Livro {
    constructor(titulo, autor) {
        this.titulo = titulo
        this.autor = autor
        this.disponivel = true
    }


}



class Biblioteca {
    constructor() {
        this.livros = []
    }

    adicionarLivros(livros) {
        if (!livros || !livros.autor) {
            console.log(`Não foi possível adicionar o livro. Tente novamente`)
        } else {
            this.livros.push(livros)
            console.log(`${livros.titulo} foi adicionado a Biblioteca.`)
        }
    }


    listarLivros() {
        this.livros.forEach(livro => {
            if (livro.disponivel) {
                console.log(livro)
            } else {
                console.log('Não há livros disponíveis')
            }

        });
    }

    contarDisponiveis(livros) {
        if (livros.disponivel) {

        }
    }

    emprestarLivros(livro) {

        if (!livro) {
            console.log('O livro não existe')
        }

        if (livro.disponivel) {
            livro.disponivel = false
            console.log(`${livro.titulo} foi emprestado, disponibilidade ${livro.disponivel}`)
        } else {
            console.log('Livro indisponível')

        }

    }

    devolverLivros(titulo) {
        if (!livro.disponivel) {
            livro.disponivel = true
            console.log(`${titulo.titulo} foi devolvido`)
        }else{
            console.log(`Não foi possivel devolver o livro`)
        }

    }


}


const livro = new Livro("O Hobbit", 'FASFA');
const biblioteca = new Biblioteca();

biblioteca.adicionarLivros(livro);
// biblioteca.listarLivros()
biblioteca.emprestarLivros(livro)
biblioteca.devolverLivros(livro)