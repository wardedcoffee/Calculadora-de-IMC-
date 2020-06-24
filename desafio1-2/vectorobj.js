// const usuario = {
    
// }

const objeto = {
    nome: "Carlos",
    idade: "66",
    propriedade: [
    {
        job1: "C++",
        especialidade1: "Desktop"
    },
    {
        job2: "Python",
        especialidade2: "Data Science"
    },
    {
        job3: "JavaScript",
        especialidade3: "Web/Mobile"
    }
]
};

console.log(`O usuário ${objeto.nome} tem ${objeto.idade} anos e usa a tecnologia ${objeto.propriedade[2].job3} com especialidade em ${objeto.propriedade[2].especialidade3}`);
// console.log(objeto);



// const programador = {
//     nome: "Marcos",
//     idade: 34,
//     tecnologias: [
//         { nome: 'JavaScript', especialidade: 'Desktop'},
//         { nome: 'JavaScript', especialidade: 'Web/Mobile'}
//     ]
// }

// console.log(`O usuário ${programador.nome} tem ${programador.idade} anos e usa a tecnologia ${programador.tecnologias[1].nome} com especialidade em ${programador.tecnologias[1].especialidade}`)