let fatorial = parseInt(prompt('Digite um número: '));
let resultado = fatorial;
for (let i = 1; i < fatorial; i++) {
  resultado *= i;
}
document.write(resultado);
