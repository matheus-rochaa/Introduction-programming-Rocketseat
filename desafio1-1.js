// Cálculo de IMC
// Crie um programa para calcular o IMC e nível de obesidade de uma pessoa.
const nome = 'Matheus';
const peso = 75;
const altura = 1.77;
const sexo = 'Masculino';

const imc = peso / (altura * altura)

if (imc >= 30) {
    console.log(`${nome} você está acima do peso.`)
} else {
    console.log(`${nome} você não está acima do peso.`)
}

// Cálculo de aposentadoria
// Crie um programa para calcular a aposentadoria de uma pessoa.
const nome01 = 'João';
const sexo01 = 'M';
const idade01 = 55;
const contribuicao01 = 40;

const somaidade01Contribuicao01Masc = idade01 + contribuicao01

if(contribuicao01 >= 35 && sexo01 == 'M') {
    if(somaidade01Contribuicao01Masc >= 95) {
        console.log(`${nome01}, você pode se aponsentar!`)
    } else {
        console.log(`${nome01}, você não pode se aponsentar!`)
    }
} else {
    console.log(`${nome01}, você não pode se aponsentar!`)
}

const nome02 = 'Maria';
const sexo02 = 'F';
const idade02 = 50;
const contribuicao02 = 20;

somaIdade02Contribuicao02Fem = idade02 + contribuicao02

if(contribuicao02 >= 30 && sexo02 == 'F'){
    if(somaIdade02Contribuicao02Fem >= 85) {
        console.log(`${nome02}, você pode se aponsentar!`)
    } else {
        console.log(`${nome02}, você não pode se aponsentar!`)
    }
} else {
    console.log(`${nome02}, você não pode se aponsentar!`)
}