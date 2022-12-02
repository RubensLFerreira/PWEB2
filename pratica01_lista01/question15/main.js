var n = parseInt(prompt('Digite um valor: '));

for(count = 1; count <= n; count++) {
  if(n % count == 0) {
    alert(count)
  }
}