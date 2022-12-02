function num(N) {
  var K = (-3 + Math.sqrt(24 * N - 15)) / 6;
  return K - parseInt(K) == 0;
}

var N = Number(prompt('Digite um número: '))
console.log(N)
if (num(N)) {
  document.write(`${N} é triangular`);
} else {
  document.write(`${N} não é triangular`);
}