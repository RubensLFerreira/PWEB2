let a = Number(prompt("Digite o valor 1: "));
let b = Number(prompt("Digite o valor 2: "));
let c = Number(prompt("Digite o valor 3: "));

if (a > b || b > c) {
  console.log("a e b: ", a + b);
} else if (b > c || c > a) {
  console.log("b e c: ", b + c);
} else if (c > a || a > b) {
  console.log("c e a: ", c + a);
}
