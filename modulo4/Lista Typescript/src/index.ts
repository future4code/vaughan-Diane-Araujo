/* 1 Crie um função que receba uma string com o nome e outra string com uma data de nascimento 
(ex.: “24/04/1993”). A função deve separar o dia, o mês e ano e retornar uma string no seguinte formato:  */

var funcao1 = (nome: string, dataNascimento: string): string => {
    var [dia, mes, ano] = dataNascimento.split("/");
    var frase: string = `Olá me chamo ${nome}, nasci no dia ${dia} do mês de ${mes} do ano de ${ano}`;
    return frase;
  };


  //2 Crie uma função que receba um parâmetro qualquer e que imprima no console o tipo da variável. 

  // 3 
  enum GENERO {
	ACAO="ação",
	DRAMA="drama",
	COMEDIA="comédia",
	ROMANCE="romance",
	TERROR="terror"
}

//4
enum SETORES {
    MARKETING = "marketing",
    VENDAS = "vendas",
    FINANCEIRO = "financeiro"
  }
  
  type colaboradores = {
    nome: string;
    salário: number;
    setor: SETORES;
    presencial: boolean;
  };
  
  var listaColaboradores: colaboradores[] = [
    { nome: "Marcos", salário: 2500, setor: SETORES.MARKETING, presencial: true },
    { nome: "Maria", salário: 1500, setor: SETORES.VENDAS, presencial: false },
    { nome: "Saulo", salário: 2200, setor: SETORES.FINANCEIRO, presencial: true },
    { nome: "João", salário: 2800, setor: SETORES.MARKETING, presencial: false },
    { nome: "Josué", salário: 5500, setor: SETORES.FINANCEIRO, presencial: true },
    { nome: "Natalia", salário: 4700, setor: SETORES.VENDAS, presencial: true },
    { nome: "Paola", salário: 3500, setor: SETORES.MARKETING, presencial: true }
  ];
  
  var funcao4 = (lista: colaboradores[]): colaboradores[] => {
    var listaFiltrada: colaboradores[] = lista.filter((colaborador) => {
      return colaborador.setor === SETORES.MARKETING && colaborador.presencial;
    });
    return listaFiltrada;
  };

  //5
  enum ROLE {
    ADMIN = "admin",
    USER = "user"
  }
  
  type user = {
    name: string;
    email: string;
    role: ROLE;
  };
  
  const usersList: user[] = [
    { name: "Rogério", email: "roger@email.com", role: ROLE.USER },
    { name: "Ademir", email: "ademir@email.com", role: ROLE.ADMIN },
    { name: "Aline", email: "aline@email.com", role: ROLE.USER },
    { name: "Jéssica", email: "jessica@email.com", role: ROLE.USER },
    { name: "Adilson", email: "adilson@email.com", role: ROLE.USER },
    { name: "Carina", email: "carina@email.com", role: ROLE.ADMIN }
  ];
  
  const funcao5 = (list: user[]): string[] => {
    const emailsList: string[] = list
      .filter((user) => user.role === ROLE.ADMIN)
      .map((user) => user.email);
    return emailsList;
  };

  //6
  
type conta = {
    cliente: string;
    saldoTotal: number;
    debitos: number[];
  };
  
  const listaClientes: conta[] = [
    { cliente: "João", saldoTotal: 1000, debitos: [100, 200, 300] },
    { cliente: "Paula", saldoTotal: 7500, debitos: [200, 1040] },
    { cliente: "Pedro", saldoTotal: 10000, debitos: [5140, 6100, 100, 2000] },
    { cliente: "Luciano", saldoTotal: 100, debitos: [100, 200, 1700] },
    { cliente: "Artur", saldoTotal: 1800, debitos: [200, 300] },
    { cliente: "Soter", saldoTotal: 1200, debitos: [] }
  ];
  
  const funcao6 = (lista: conta[]): conta[] => {
    lista.forEach((cliente) => {
      const totalDebitos = cliente.debitos.reduce((a, b) => a + b, 0);
      cliente.saldoTotal -= totalDebitos;
      cliente.debitos = [];
    });
    const contasNegativas = lista.filter((conta) => conta.saldoTotal < 0);
    return contasNegativas;
  };
  // 7
  const ajustaPreco = (preco: number): string => {
    const valorAjustado: string = preco.toFixed(2).replace(".", ",");
    return "R$ " + valorAjustado;
  };
  
  type produto = {
    nome: string;
    quantidade: number;
    valorUnitario: number | string;
  };
  
  const estoque: produto[] = [
    { nome: "MacMugffin", quantidade: 37, valorUnitario: 51.04 },
    { nome: "Vassoura voadora", quantidade: 56, valorUnitario: 210.0 },
    { nome: "Laço da verdade", quantidade: 32, valorUnitario: 571.5 },
    { nome: "O precioso", quantidade: 1, valorUnitario: 9181.923 },
    { nome: "Caneta de 250 cores", quantidade: 123, valorUnitario: 17 },
    { nome: "Plumbus", quantidade: 13, valorUnitario: 140.44 },
    { nome: "Pokebola", quantidade: 200, valorUnitario: 99.9915 }
  ];
  
  const funcao7 = (lista: produto[]): produto[] => {
    lista.forEach(
      (item) => (item.valorUnitario = ajustaPreco(item.valorUnitario as number))
    );
  
    const listaOrdernada: produto[] = lista.sort(
      (a, b) => a.quantidade - b.quantidade
    );
  
    return listaOrdernada;
  };