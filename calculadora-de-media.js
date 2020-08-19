const input = require("readline-sync")
console.log('== Olá, essa é sua calculadora de média! ==')

const nota1 = input.question('Me fala, qual foi tua primeira nota?')
const nota2 = input.question('Hum... Agora voce poderia me dizer a segunda nota?')
const nota3 = input.question('Estamos quase la, hein?! Me diz tua terceira nota?')
const nota4 = input.question('E a quarta nota, coloca aqui?')
const nota5 = input.question('Nesse momento tenho certeza que estou tao nervosa quanto voce! Bora la, me conta o valor da tua quinta nota!')
const nota6 = input.question('Massa!!! Agora é o momento decisivo, coloque a sua sexta nota aqui, cruze os dedos e vamos la!')

const soma = (parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3) + parseFloat(nota4) + parseFloat(nota5) + parseFloat(nota6))
const media = soma / 6
const resultado = media.toFixed(2)

if (resultado >=7){
    console.log(`Sua media e ${resultado}. Parabens, você foi aprovada!`)
} else if (resultado < 5){
    console.log(`Eita, sinto muito! Sua media e ${resultado}. Voce nao foi aprovada.`)
} else {
    console.log(`Sua media e ${resultado}. Voce ta quase la! Teras mais uma chance na recuperacao. Bons estudos!`)
}