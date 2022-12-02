let num = Number(prompt("Digite um número para saber se é primo: "));

const numPrimo = (num) => {
  for (let i = 2; i < num; i++)
    if (num % i === 0) {
      return false;
    }
  return num > 1;
};

if (numPrimo(num) == false) {
  document.write(`O número ${num} não é primo`);
} else {
  document.write(`O número ${num} é primo`);
}
