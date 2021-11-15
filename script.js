const quiz= document.getElementById('quiz')
const answerID = document.querySelectorAll('.answer')
const questionID = document.getElementById('question')
const A = document.getElementById('ansA')
const B = document.getElementById('ansB')
const C = document.getElementById('ansC')
const D = document.getElementById('ansD')
const submitBtn = document.getElementById('submit')

const quizData = [
    { 
        question: "JavaScript is a ___ -side programming language?",
        A: "Client",
        B: "Server",
        C: "Both",
        D: "None",
        correct: "B",
    },
    {
        question: "Which company developed JavaScript?",
        A: "Netscape",
        B: "Bell Lab",
        C: "Sun Microsystems",
        D: "IBM",
        correct: "D",
    },
    {
        question: "Which of the following is not JavaScript frameworks or libraries?",
        A: "Undefined",
        B: "Number",
        D: "Float",
        C: "Boolean",
        correct: "c",
    },
    {
        question: "What year was JavaScript launched?",
        A: "1996",
        B: "1995",
        C: "1994",
        D: "none of the above",
        correct: "b",
    },
    {
        question: "What is the original name of JavaScript?",
        A: "LiveScript",
        B: "EScript",
        C: "Mocha",
        D: "JavaScript",
        correct: "c",
    },
    {
        question: "Which of them is not the looping structures in JavaScript?",
        A: "while",
        B: "for",
        C: "for which",
        D: "do while",
        correct: "a",
    },
    {
        question: "What are the types of pop-up boxes available in JavaScrip",
        A: "Confirm",
        B: "Prompt",
        C: "Alert",
        D: "All of the above",
        correct: "",
    },
    {
        question: "The _______ method of an Array object adds and/or removes elements from an array.",
        A: "Reverse",
        B: "Shift",
        C: "Splice",
        D: "Slice",
        correct: "C",
    },
    {
        question: "How do you find the minimum of x and y using JavaScript?",
        A: "min(x,y)",
        B: "Math.min(x,y)",
        C: " Math.min(xy)",
        D: " min(xy)",
        correct: "B",
    },
    {
        question: "Determine the result – String(“Hello”) === “Hello”;",
        A: "True",
        B: "False",
        C: "SyntaxError",
        D: "ReferenceError",
        correct: "B",
    },

];


let currentQuiz = 0
let score = 0


function loadQuiz(quizData) {
    document.getElementById(quizData)
}

quiz();
    
    // deselectAnswers()
    
    const currentQuizData = quizData[currentQuiz]
    
    questionID.innerText = currentQuizData.question
    ansA.innerText = currentQuizData.a
    ansB.innerText = currentQuizData.b
    ansC.innerText = currentQuizData.c
    ansD.innerText = currentQuizData.d


function deselectAnswers() {
    answerID.forEach(answerID => answerID.checked = false)
}

function getSelected() {
    let answer
    answerID.forEach(answerID => {
        if (answerID.checked) {
            answer = answerID.id
        }
    });
    return answer
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answerID) {
        if(answerID === quizData[currentQuiz].correct) {
            score++
        }

        currentQuiz++

        if(currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            quiz.innerHTML = `
        <h2>You got ${score}/${quizData.length} questions right!</h2>

        <button onclick="location.reload()">Reload</button>
        `
        }
    }
})

// var sec = 15;
// var time = setInterval(mytimer, 1000);

// function sec() {
//     document.getElementById('time').innerHTML=sec + "Time Remaining:";
//     sec--;
//     if (sec = -1){
//     clearInterval(time);
//     alert("You're out of time!");
//     document.getElementById('mytime').innerHTML='sec';
//     // or...
// }
// }; 1000;

