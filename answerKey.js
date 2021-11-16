// I need to store my questions, answers, and images.
// I can use an array that holds objects--each question will
// be an object, and each question object will contain the 
// content as keys and values

'use strict';

const quizData = [
    { 
        question: "JavaScript is a ___ -side programming language?",
        choices: [
            "Client",
            "Server",
            "Both",
            "None"
        ],
        correct: "Server"
    },
    {
        question: "Which company developed JavaScript?",
        choices: [
            "Netscape",
            "Bell Lab",
            "Sun Microsystems",
            "IBM"
        ],
        correct: "IBM"
    },
    {
        question: "Which of the following is not JavaScript frameworks or libraries?",
        choices: [
            "Undefined",
            "Number",
            "Float",
            "Boolean"
        ],
        correct: "Float"
    },
    {
        question: "What year was JavaScript launched?",
        choices: [
            "1996",
            "1995",
            "1994",
            "none of the above"
        ],
        correct: "1995"
    },
    {
        question: "What is the original name of JavaScript?",
        choices: [
            "LiveScript",
            "EScript",
            "Mocha",
            "JavaScript"
        ],
        correct: "Mocha"
    },
    {
        question: "Which of them is not the looping structures in JavaScript?",
        choices: [
            "while",
            "for",
            "for which",
            "do while"
        ],
        correct: "while"
    },
    {
        question: "What are the types of pop-up boxes available in JavaScrip",
        choices: [
            "Confirm",
            "Prompt",
            "Alert",
            "All of the above"
        ],
        correct: "All of the above"
    },
    {
        question: "The _______ method of an Array object adds and/or removes elements from an array.",
        choices: [
            "Reverse",
            "Shift",
            "Splice",
            "Slice"
        ],
        correct: "Splice"
    },
    {
        question: "How do you find the minimum of x and y using JavaScript?",
        choices: [
            "min(x,y)",
            "Math.min(x,y)",
            " Math.min(xy)",
            " min(xy)"
        ],
        correct: "Math.min(x,y)"
    },
    {
        question: "Determine the result – String(“Hello”) === “Hello”;",
        choices: [
            "True",
            "False",
            "SyntaxError",
            "ReferenceError"
        ],
        correct: "False"
    }

];