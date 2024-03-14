export default class GerenciadorFilmes {
  constructor() {
    this.filmes = [];
  }

  inserir(filme) {
    if (!("nome" in filme)) {
      throw Error("Não é permitido filme sem nome");
    }
    if (filme.genero.length === 0) {
      throw Error("Filme deve ter ao menos 1 gênero");
    }
    const anoCorrente = new Date().getFullYear();
    if (filme.ano > anoCorrente) {
      throw Error("Não é permitido filmes com data superior ao ano atual");
    }
    this.filmes.push(filme);
  }
}
