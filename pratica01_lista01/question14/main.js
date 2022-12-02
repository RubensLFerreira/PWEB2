let anos_fumando = Number(prompt("Há quantos anos fuma? "));
let cigarros_fumados_dia = Number(prompt("Quantos cigarros fuma por dia? "));
let valor_carteira_cigarro = Number(prompt("Valor da carteira de cigarro? "));

// tranformando anos em dias
let dias_fumando = ((anos_fumando * 12) * 30);

// valor unitário do cigarro
let valor_cigarro = valor_carteira_cigarro / 20;

// valor gasto com cigarro durante o periodo
let gasto_cigarro = valor_cigarro * dias_fumando;

document.write(`Valor gasto por dia fumando cigarro: R$ ${gasto_cigarro}`);
