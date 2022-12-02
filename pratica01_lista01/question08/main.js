const num1 = Number(prompt("Digite a nota do exame 1: "));
const num2 = Number(prompt("Digite a nota do exame 2: "));
const num3 = Number(prompt("Digite a nota do exame 3: "));
const num4 = Number(prompt("Digite a nota do exame 4: "));
const num5 = Number(prompt("Digite a nota do exame 5: "));

if ((num1, num2, num3, num4, num5 > 70)) {
  document.write("A – passou em todos os exames.");
} else if ((num2, num3, num4 >= 70 && num1, num5 < 70)) {
  document.write("B – passou em I, II e IV, mas não em III ou V.");
} else if (num1, num2, num3, num4 >= 70 && num5 < 70) {
  document.write("C – passou em I e II, III ou IV, mas não em V");
} else if(num1, num2, num3, num4, num5 < 70) {
  document.write("Reprovado – outras situações.");
}
