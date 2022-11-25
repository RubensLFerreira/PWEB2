const inputNumber = document.querySelector("#input-number");
const btnSend = document.querySelector("#send");
const result = document.querySelector("#result");

const send = function (e) {
  e.preventDefault();

  const btnRadioImpar = document.querySelector("#impar");
  const btnRadioPar = document.querySelector("#par");

  const min = 1;
  const max = 10;
  let numberYou = Number(inputNumber.value);
  let numberPc = Number(Math.floor(Math.random() * (max - min) + min));
  let soma = numberYou + numberPc;

  if (numberYou <= 10 && numberYou != 0 && numberYou > 0) {
    if (btnRadioImpar.checked == true || btnRadioPar.checked == true) {
      if (soma % 2 == 0 && btnRadioPar.checked == true) {
        result.innerHTML = `
          <br>A máquina escolheu o número: <span class="span">${numberPc}</span><br>
          Você escolheu o número: <span class="span">${numberYou}</span><br>
          Você colorou: <span class="span">${btnRadioPar.value}</span><br>
          <span class="ganhou">---------- Você ganhou! ----------</span>`;
      } else if (soma % 2 == 1 && btnRadioImpar.checked == true) {
        result.innerHTML = `
          <br>A máquina escolheu o número: <span class="span">${numberPc}</span><br>
          Você escolheu o número: <span class="span">${numberYou}</span><br>
          Você colorou: <span class="span">${btnRadioImpar.value}</span><br>
          <span class="ganhou">---------- Você ganhou! ----------</span>`;
      } else if (soma % 2 == 0 && btnRadioPar.checked == false) {
        result.innerHTML = `
          <br>A máquina escolheu o número: <span class="span">${numberPc}</span><br>
          Você escolheu o número: <span class="span">${numberYou}</span><br>
          Você colorou: <span class="span">${btnRadioImpar.value}</span><br>
          <span class="perdeu">---------- Você perdeu! ----------</span>`;
      } else if (soma % 2 == 1 && btnRadioImpar.checked == false) {
        result.innerHTML = `
          <br>A máquina escolheu o número: <span class="span">${numberPc}</span><br>
          Você escolheu o número: <span class="span">${numberYou}</span><br>
          Você colorou: <span class="span">${btnRadioPar.value}</span><br>
          <span class="perdeu">---------- Você perdeu! ----------</span>`;
      }
    } else {
      result.innerText = "Escolha Ímpar ou Par";
    }
  } else {
    result.innerText = "Digite um valor entre 1 e 10";
  }
};

btnSend.addEventListener("click", send);
