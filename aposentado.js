const nome = "Silvana";
const sexo = "F";
const idade = 48;
const contribuicao = 40;

// condicao1 = (contribuicao > 35) || (contribuicao > 30); 
// condicao2 = (idade > 95) || (idade > 85);
const condicao1 = (contribuicao > 35) || (idade >= 95);
const condicao2 = (contribuicao > 30) || (idade >= 85);

// const condicao1 = (idade + contribuicao == 95);
// const condicao2 = (idade + contribuicao == 85);

if((condicao1) || (condicao2)) {
      console.log('Silvana, você pode se aposentar!');
} else {
    console.log('Silvana, você ainda não pode se aposentar!');
    } 

// } else {
// //     if(!(condicao2)) {
//         console.log('Silvana, você ainda não pode se aposentar!')
// //     }
// }

// const imc = peso / (altura * altura);

// if(!(imc >= 30) || (imc < 29.9)) {
//     console.log('Marcos você não está acima do peso')
//     } else {
//     console.log('Marcos você está acima do peso')
// }

// console.log(imc)