import GerenciadorFilmes from "./gerenciador.filmes";

describe("Inserção de filmes", () => {
  beforeAll(() => {});

  let gerenciador;

  beforeEach(() => {
    gerenciador = new GerenciadorFilmes();
  });

  // Teste 1
  test("Deve permitir inserção de filme", () => {
    const filme = {
      nome: "Matrix",
      ano: 1999,
      genero: ["Ficção"],
    };
    gerenciador.inserir(filme);
    expect(gerenciador.filmes.length).toBe(1);
  });

  // Teste 2
  test("Não deve permitir a inserção de filme sem nome", () => {
    const filme = {};
    expect(() => {
      gerenciador.inserir(filme);
    }).toThrow(Error);
  });

  // Teste 3
  test("Não deve permitir filmes com ano futuro", () => {
    const anoSeguinte = new Date().getFullYear() + 1;
    const filme = {
      nome: "Deadpool 3",
      ano: anoSeguinte,
      genero: ["Ação", "Romance"],
    };
    expect(() => gerenciador.inserir(filme)).toThrow(Error);
  });

  // Teste 4
  test("Filmes devem ter ao menos 1 gênero", () => {
    const filme = {
      nome: "Carros",
      ano: 2005,
      genero: [],
    };
    expect(() => gerenciador.inserir(filme)).toThrow(Error);
  });

  afterEach(() => {});

  afterAll(() => {});
});
