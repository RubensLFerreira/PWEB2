let a = parseInt(prompt('Digite um número: '));
let b = parseInt(prompt('Digite um número: '));

if(a >= 1 && b >= 1) {
  function euclides(a, b) {
    while(b != 0){
        var r = a % b;
        a = b;
        b = r;
    }
    document.write(a);
  }
} else {
  document.write('Digite um valor inteiro positivo!');
}

euclides(a, b);