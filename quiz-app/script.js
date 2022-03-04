const quizData = [
    {
        question : 'How old is the Florin?',
        a: '10',
        b: '17',
        c: '26',
        d: '110',
        correct: 'c'
    },
    // {
    //     question: 'What is the most used programming language in 2019?',
    //     a: 'Python',
    //     b: 'C',
    //     c: 'Java',
    //     d: 'Javascript',
    //     correct: 'd'
    // },{
    //     question: 'Who is the president of the US?',
    //     a: 'Florin Pop',
    //     b: 'Donald Trump',
    //     c: 'Hiliary Clinton',
    //     d: 'Joel Vandervalk',
    //     correct: 'b',
    // },{
    //     question: 'What does HTML stand for?',
    //     a: 'Hypertext Markup Language',
    //     b: 'Cascading Style Sheet',
    //     c: 'Jason object notation',
    //     d: 'Application Programming Interface',
    //     correct: 'a',

    // },{
    //     question: 'What year was Javascript launched',
    //     a: '1994',
    //     b: '2000',
    //     c: '2010',
    //     d: 'none of the above',
    //     correct: 'd'
    // }

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