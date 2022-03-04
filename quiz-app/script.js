const quizData = [
    {
        question : 'Who won the Stanley Cup last year?',
        a: 'Calgary Flames ',
        b: 'Montreal Canadians ',
        c: 'Tampa Bay Lightning',
        d: 'Edmonton Oilers',
        correct: 'c'
    },
    {
        question: 'Who led the NHL in points last year?',
        a: 'Connor MacDavid',
        b: 'Sidney Crosby',
        c: 'Alexander Ovechkin',
        d: 'John Tavares',
        correct: 'a'
    },{
        question: 'Who won the most recent SuperBowl?',
        a: 'Tampa Bay Buccaneers',
        b: 'Los Angeles Rams',
        c: 'New York Jets',
        d: 'New York Giants',
        correct: 'b',
    },{
        question: 'Which of these is not a team in the NHL',
        a: 'Calgary Flames',
        b: 'Edmonton Oilers',
        c: 'Toronto Blue Jays',
        d: 'Toronto Maple Leafs',
        correct: 'c',

    },{
        question: 'Which of these is not a team in the NBA',
        a: 'Toronto Raptors',
        b: 'Los Angeles Lakers',
        c: 'Los Angeles Clippers',
        d: 'They are all teams in the NBA',
        correct: 'd'
    }

];

const quiz = document.getElementById("quiz");
const answersEls = document.querySelectorAll(".answer");

const questionE1 = document.getElementById("question");
const starting = document.getElementById("starting");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;

let score = 0;
starting.addEventListener('click', startQuiz);
function startQuiz() {
    starting.classList.add('hide')
    quiz.classList.remove('hide')
    loadQuiz();
}

function loadQuiz(){
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz];

    questionE1.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected(){

    let answer = undefined;
    answersEls.forEach((answerE1) => {
        if(answerE1.checked){
            answer = answerE1.id;
        }
        
    });
    return answer;
}


function deselectAnswers(){
    answersEls.forEach((answerE1) => {
        answerE1.checked = false;
    });
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected();

    if(answer){
        if(answer === quizData[currentQuiz].correct){
            score ++;
        }
        currentQuiz++;
        if(currentQuiz < quizData.length){
            loadQuiz();
        }else{
           quiz.innerHTML = `<h2>You answered correctly at ${score}/${quizData.length} questions! If you would like to do the quiz again hit the button below! </h2> <button onclick ="location.reload()">Try Again</button>`
        }
    }
});