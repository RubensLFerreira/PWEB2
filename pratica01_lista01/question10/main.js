let num = Number(
  prompt("Digite um número para saber se é positivo ou negativo: ")
);

if (num >= 0) {
  document.write("Este número é positivo");
} else if (num < 0) {
  document.write("Este número é negativo");
}
