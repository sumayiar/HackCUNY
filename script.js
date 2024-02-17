const fallingNumberElement = document.getElementById('falling-number');
const optionsElement = document.getElementById('options');
const scoreValueElement = document.getElementById('score-value');
let score = 0;

function generateQuestion() {
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    const answer = num1 + num2;
    const wrongAnswer1 = answer + Math.floor(Math.random() * 5) + 1;
    const wrongAnswer2 = answer - Math.floor(Math.random() * 5) - 1;
    const options = [answer, wrongAnswer1, wrongAnswer2];
    shuffleArray(options);

    fallingNumberElement.textContent = `${num1} + ${num2}`;
    optionsElement.innerHTML = '';
    options.forEach(option => {
        const optionButton = document.createElement('button');
        optionButton.classList.add('option');
        optionButton.textContent = option;
        optionButton.onclick = () => checkAnswer(option === answer);
        optionsElement.appendChild(optionButton);
    });
}

function checkAnswer(isCorrect) {
    if (isCorrect) {
        score++;
        scoreValueElement.textContent = score;
    }
    generateQuestion();
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Initial setup
generateQuestion();
