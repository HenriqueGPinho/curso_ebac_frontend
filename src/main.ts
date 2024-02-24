function produto(valor1: number, valor2: number): number {
  return valor1 * valor2;
}

function saudacao(nome: string): void {
  console.log(`Olá, ${nome}!!`);
}

saudacao('Henrique');
console.log(produto(2,3));