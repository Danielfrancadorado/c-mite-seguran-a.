const quiz = [

{
question:"Como a liderança da transportadora demonstra que segurança é prioridade em relação à produtividade?",
answers:[
"Realiza visitas periódicas em campo",
"Participa de DDS e diálogos de segurança",
"Analisa indicadores preventivos",
"Todas as anteriores"
],
correct:3
},

{
question:"Qual indicador melhor demonstra a maturidade da cultura de segurança?",
answers:[
"Quantidade de multas",
"Número de viagens realizadas",
"Relatos de desvios e condições inseguras",
"Faturamento mensal"
],
correct:2
},

{
question:"Quando um motorista deixa de reportar um incidente, qual o principal risco para a organização?",
answers:[
"Perda de produtividade",
"Perda de oportunidade de prevenção",
"Aumento do custo operacional",
"Atraso na programação"
],
correct:1
}

];

let current = 0;
let score = 0;
let timeLeft = 20;
let timer;

function startQuiz(){

document.getElementById("startScreen").classList.add("hidden");
document.getElementById("quizScreen").classList.remove("hidden");

loadQuestion();

}

function loadQuestion(){

const q = quiz[current];

document.getElementById("questionNumber").innerText =
`Pergunta ${current+1}/${quiz.length}`;

document.getElementById("question").innerText =
q.question;

const answersDiv =
document.getElementById("answers");

answersDiv.innerHTML = "";

const colors =
["red","blue","yellow","green"];

q.answers.forEach((answer,index)=>{

const btn =
document.createElement("button");

btn.className =
`answer ${colors[index]}`;

btn.innerText =
answer;

btn.onclick = () => choose(index);

answersDiv.appendChild(btn);

});

startTimer();

}

function startTimer(){

clearInterval(timer);

timeLeft = 20;

document.getElementById("timer").innerText =
timeLeft;

timer = setInterval(()=>{

timeLeft--;

document.getElementById("timer").innerText =
timeLeft;

if(timeLeft <= 0){

nextQuestion();

}

},1000);

}

function choose(index){

clearInterval(timer);

if(index === quiz[current].correct){

score += 100 + timeLeft;

}

nextQuestion();

}

function nextQuestion(){

current++;

if(current < quiz.length){

loadQuestion();

}else{

finishQuiz();

}

}

function finishQuiz(){

document.getElementById("quizScreen").classList.add("hidden");

document.getElementById("resultScreen").classList.remove("hidden");

document.getElementById("finalScore").innerText =
`Pontuação: ${score}`;

}
