export default class RepositorioFilmes {
  constructor() {
    this.filmes = [];
  }

  inserir(filme) {
    // this.filmes.push(filme);
  }

  remover(filme) {
    this.filmes.splice(0, this.filmes.indexOf(filme));
  }

  todos() {
    return this.filmes;
  }

  total() {
    return this.filmes.length;
  }
}
