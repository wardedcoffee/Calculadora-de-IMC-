const nome = "Marcos";
const peso = 84;
const altura = 1.88;

const imc = peso / (altura * altura);

if(!(imc >= 30) || (imc < 29.9)) {
    console.log('Marcos você não está acima do peso')
    } else {
    console.log('Marcos você está acima do peso')
}

console.log(imc)
