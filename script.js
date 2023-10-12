// script.js
const questions = [
    {
        question: 'What is the capital of France?',
        answers: ['Paris', 'Berlin', 'Madrid', 'Rome'],
        correctAnswer: 'Paris'
    },
    {
        question: 'Which planet is known as the Red Planet?',
        answers: ['Earth', 'Mars', 'Jupiter', 'Venus'],
        correctAnswer: 'Mars'
    },
    {
        question: 'What is the largest mammal?',
        answers: ['Elephant', 'Giraffe', 'Blue Whale', 'Hippopotamus'],
        correctAnswer: 'Blue Whale'
    },
    {
        question: 'Which one of the following river flows between Vindhyan and Satpura ranges?',
        answers:['Narmada' , 'Mahanadi', 'Son' , 'Netravati'],
        correctAnswer: 'Narmada'
    }
];

let currentQuestionIndex = 0;
let score = 0;

const questionText = document.getElementById('question-text');
const answerContainer = document.getElementById('answer-container');
const nextButton = document.getElementById('next-button');
const resultText = document.getElementById('result');

function displayQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionText.textContent = currentQuestion.question;

    answerContainer.innerHTML = '';
    currentQuestion.answers.forEach(answer => {
        const answerButton = document.createElement('button');
        answerButton.textContent = answer;
        answerButton.addEventListener('click', () => checkAnswer(answer));
        answerContainer.appendChild(answerButton);
    });
}

function checkAnswer(selectedAnswer) {
    const currentQuestion = questions[currentQuestionIndex];
    if (selectedAnswer === currentQuestion.correctAnswer) {
        score++;
    }

    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        displayQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    questionText.style.display = 'none';
    answerContainer.style.display = 'none';
    nextButton.style.display = 'none';

    resultText.textContent = `You scored ${score} out of ${questions.length}!`;
}

nextButton.addEventListener('click', () => {
    if (currentQuestionIndex < questions.length) {
        displayQuestion();
    } else {
        showResult();
    }
});

displayQuestion();
