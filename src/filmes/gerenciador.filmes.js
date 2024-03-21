import RepositorioFilmes from "./repositorio.filmes";

export default class GerenciadorFilmes {
  constructor() {
    this.repositorioFilmes = new RepositorioFilmes();
  }

  inserir(filme) {
    if (!("nome" in filme)) {
      throw Error("Não é permitido filme sem nome");
    }
    if (filme.genero.length === 0) {
      throw Error("Filme deve ter ao menos 1 gênero");
    }
    const filmes = this.repositorioFilmes.todos();
    if (filmes.indexOf(filme) >= 0) {
      throw Error("Não é permitido filmes repetidos");
    }
    const anoCorrente = new Date().getFullYear();
    if (filme.ano > anoCorrente) {
      throw Error("Não é permitido filmes com data superior ao ano atual");
    }
    this.repositorioFilmes.inserir(filme);
  }

  total() {
    return this.repositorioFilmes.total();
  }
}
