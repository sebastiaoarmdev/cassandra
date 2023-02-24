'use strict';

const possibleAnswers = [
    "A resposta não está clara, tente novamente.",
    "A resposta para essa pergunta não é exatamente aquela que você deseja.",
    "A resposta para essa pergunta é exatamente aquela que você deseja.",
    "Afirmativo!",
    "As perspectivas não são tão boas.",
    "Certamente, sim!",
    "Com certeza!",
    "Concentre-se e pergunte novamente.",
    "De certa maneira, sim!",
    "De certo modo, sim.",
    "De jeito algum.",
    "De jeito nenhum.",
    "De maneira alguma.",
    "De modo algum.",
    "Decididamente, sim!",
    "Definitivamente, não.",
    "Duvido muito.",
    "Há outras áreas da sua vida que merecem mais atenção, não?",
    "Minhas fontes dizem não.",
    "Muito provavelmente, não.",
    "Muito provavelmente, sim!",
    "Negativo.",
    "No tempo certo, sim!",
    "Não agora.",
    "Não como você deseja.",
    "Não como você espera.",
    "Não conte com isso.",
    "Não da meneira como você está pensando.",
    "Não dessa vez.",
    "Não é possível prever isso agora.",
    "Não.",
    "Não, e você sabe o motivo.",
    "Não, mas a que custo?",
    "Pelos meus cálculos, sim!",
    "Pelos meus cálculos, não.",
    "Pelo que vejo, sim.",
    "Pelo que vejo, não.",
    "Pergunte novamente mais tarde.",
    "Pode contar com isso.",
    "Positivo!",
    "Sem dúvida!",
    "Sim, mas a que custo?",
    "Sim, definitivamente!",
    "Sim, e você sabe o motivo.",
    "Sim, existe uma boa chance.",
    "Sim, mas não do jeito como você imagina.",
    "Sim!",
    "Sinais apontam que sim.",
    "Tem certeza que era essa a verdadeira pergunta que você gostaria de ter feito?",
    "É melhor você não saber sobre isso agora.",
    "É realmente isso que você gostaria de saber agora?",
];

const answerElement = document.getElementById("answer");
const button = document.getElementById('button');
const typeWriterSpeed = 50;

let typeWriterIndex = 0;
let answer = '';

function getAnswer() {
    let answer = '';
    let index = Math.floor(Math.random() * possibleAnswers.length) + 1;
    answer = possibleAnswers[index];
    return answer;
}

function typeWrite() {
    if (typeWriterIndex < answer.length) {
        answerElement.innerHTML = answerElement.innerHTML + answer.charAt(typeWriterIndex);
        typeWriterIndex = typeWriterIndex + 1;
        setTimeout(typeWrite, typeWriterSpeed);
    }
}

function reset() {
    answerElement.innerHTML = '';
    typeWriterIndex = 0;
    answer = getAnswer();
}

function showAnswer() {
    button.innerHTML = 'Ter resposta para outra pergunta';
    reset();
    typeWrite();
}

button.addEventListener('click', showAnswer)