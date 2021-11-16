'use strict';

let userScore = 0;
let questionCount = 0;


function updateScore() {
	userScore++;
}

function updateQuestionCount() {
	questionCount++;
	$('.currentQuestion').text(questionCount);
}
// when start button is pressed, update the page/DOM to show the question page/begin quiz
function start() {
	$('.startButtonContainer').on('click', '.startButton', function(event) {
		$('.intro').remove();
		$('.startButtonContainer').remove();
		$('.quizFormContainer').css('display', 'block');
		console.log('start button pressed');
	});
}

// this function will contain the HTML that's needed to populate the form with the quiz questions,
// it must access the objects from answerKey.js and use it to generate the questions one at a time until
// it reaches the end of the questions. 
function addQuestions() {
	if(questionCount < quizData.length) {
		return `
			<div class="questionNum${questionCount}">
				<h2 class="quizQuestion">${quizData[questionCount].question}</h2>
				<form class="questionForm">
					<fieldset id="fieldset" name="answerOptions">
					<legend id="legend">Answers</legend>
						<div class='answerBox col-6'>
							<label class="answerOption">
								<input type="radio" value="${quizData[questionCount].choices[0]}" name="answer" tabindex="0" required>
								<span>${quizData[questionCount].choices[0]}</span>
							</label>
						</div>
						<div class='answerBox col-6'>
							<label class="answerOption">
								<input type="radio" value="${quizData[questionCount].choices[1]}" name="answer" tabindex="1" required>
								<span>${quizData[questionCount].choices[1]}</span>
							</label>
						</div>
						<div class='answerBox col-6'>
							<label class="answerOption">
								<input type="radio" value="${quizData[questionCount].choices[2]}" name="answer" tabindex="2" required>
								<span>${quizData[questionCount].choices[2]}</span>
							</label>
						</div>
						<div class='answerBox col-6'>
							<label class="answerOption">
								<input type="radio" value="${quizData[questionCount].choices[3]}" name="answer" tabindex="3" required>
								<span>${quizData[questionCount].choices[3]}</span>
							</label>
						</div>
						<div class="submitAnswerButtonContain col-12"><button type="submit" class="submitAnswerButton" tabindex="4">Submit</button></div>

					</fieldset>
				</form>
			</div>`;
	}
	else {
		showResults();
		restart();
	}
}

// this function will handle answer submission and checking to see if the selected choice is correct
function checkUserAnswer() {
	$('.questionForm').on('submit', function(event) {
		console.log('submit pressed');
		event.preventDefault();
		let userAnswer = $('input[name=answer]:checked').val();
		console.log(userAnswer);
		let correctAnswer = `${quizData[questionCount].correct}`;
		console.log(correctAnswer);

		// If answer is right, then update DOM to provide feedback that user was CORRECT
		if(userAnswer === correctAnswer){
			$('.quizFormContainer').html(`
				<div class="questionFeedback_Correct col-12">
					<h2 id="correct">Correct!</h2>
					<div class="nextQuestionContain"><button type="button" class="nextQuestion">Next</button></div>
				</div>
			`);
			updateScore();
			updateQuestionCount();
		}
		else{
			$('.quizFormContainer').html(`
				<div class="questionFeedback_Wrong col-12">
					<h2 id="wrong">Wrong!</h2>
					<h2 id="wrong">The correct answer is: ${quizData[questionCount].correct}</h2>
					<div class="nextQuestionContain"><button class="nextQuestion">Next</button></div>
				</div>
			`);
			updateQuestionCount();
		}

	});
}

// this function handles the nextQuestion button, makes the page display the next question
function nextQuestion() {
	$('main').on('click', '.nextQuestion', function(event){
		renderForm();
		checkUserAnswer();
		console.log('next pressed');
	});
}

// this function will update the page with HTML for the user's results and the button to restart the quiz
function showResults() {
	$('.quizFormContainer').html(`
		<div class="finalResults">
			<h2>Your Final Results</h2>
			<h2>You were correct on ${userScore} out of 10 questions</h2>
			<div class="restartQuizButtonContain"><button class="restartQuizButton">Restart</button></div>
		</div>
	`);
	console.log(userScore);
}

// this function will handle the restart button click event
function restart() {
	$('main').on('click', '.restartQuizButton', function(event){
		console.log('restart pressed');
		location.reload();
	});
}

function renderForm() {
	$('.quizFormContainer').html(addQuestions());

}

function generateNewQuiz() {
	start();
	renderForm();
	checkUserAnswer();
	nextQuestion();
	
}

$(generateNewQuiz);