const alunos = [
  { nome: 'João', nota: 7 },
  { nome: 'José', nota: 6 },
  { nome: 'Maria', nota: 9 },
  { nome: 'Cecília', nota: 3 },
  { nome: 'Marcos', nota: 10 },
  { nome: 'Ana', nota: 7 },
  { nome: 'Julia', nota: 1 },
  { nome: 'Carlos', nota: 5 },
  { nome: 'Beatriz', nota: 6 },
  { nome: 'Bruno', nota: 5 }
];

const selecionarAlunosAprovados = array => {

  let alunosAprovados = [];

  array.map(aluno => {
    if (aluno.nota >= 6) {
      alunosAprovados.push(aluno);
    }
  });

  return alunosAprovados;
}

console.log(selecionarAlunosAprovados(alunos));