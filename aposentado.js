const nome = "Silvana";
const sexo = "F";
const idade = 48;
const contribuicao = 40;

const condicao1 = (contribuicao > 35) || (idade >= 95);
const condicao2 = (contribuicao > 30) || (idade >= 85);

if((condicao1) || (condicao2)) {
      console.log('Silvana, você pode se aposentar!');
} else {
    console.log('Silvana, você ainda não pode se aposentar!');
    } 
