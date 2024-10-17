// Завдання 1
function convertToCelsius() {
    let fahrenheit = document.getElementById('fahrenheit').value;
    if (fahrenheit !== '') {
        let celsius = (5/9) * (fahrenheit - 32);
        document.getElementById('celsius').value = celsius.toFixed(2);
    } else {
        document.getElementById('celsius').value = '';
    }
}

function convertToFahrenheit() {
    let celsius = document.getElementById('celsius').value;
    if (celsius !== '') {
        let fahrenheit = (celsius * 9/5) + 32;
        document.getElementById('fahrenheit').value = fahrenheit.toFixed(2);
    } 
    else {
        document.getElementById('fahrenheit').value = '';
    }
}

// Завдання 2
let score = 0;
let correctAnswers = 0;
let totalAnswers = 0;

function generateTask() {
    let num1 = Math.floor(Math.random() * 10) + 1; 
    let num2 = Math.floor(Math.random() * 10) + 1;

    document.getElementById('num1').textContent = num1;
    document.getElementById('num2').textContent = num2;
    
    document.getElementById('answer').value = '';  
    document.getElementById('feedback').textContent = '';  
}

function checkAnswer() {
    let num1 = parseInt(document.getElementById('num1').textContent);
    let num2 = parseInt(document.getElementById('num2').textContent);
    
    let correctAnswer = num1 * num2;
    
    let userAnswer = parseInt(document.getElementById('answer').value);

    totalAnswers++;

    if (userAnswer === correctAnswer) {
        correctAnswers++;
        document.getElementById('feedback').textContent = 'Правильно!';
    } else {
        document.getElementById('feedback').textContent = `Помилка, правильна відповідь: ${correctAnswer}`;
    }

    score = Math.round((correctAnswers / totalAnswers) * 100);
    document.getElementById('score').textContent = score;
    document.getElementById('correct').textContent = correctAnswers;
    document.getElementById('total').textContent = totalAnswers;
}

window.onload = generateTask;

// Завдання 5
let captchaValue = '';

        function generateCaptcha(length) {
            const captchaContainer = document.getElementById('captcha');
            captchaContainer.innerHTML = ''; 
            captchaValue = '';

            for (let i = 0; i < length; i++) {
                const randomDigit = Math.floor(Math.random() * 10);
                captchaValue += randomDigit;

                const digitSpan = document.createElement('span');
                digitSpan.classList.add('captcha-digit');
                digitSpan.textContent = randomDigit;
                captchaContainer.appendChild(digitSpan);
            }
        }

        function checkCaptcha() {
            const userInput = document.getElementById('user-input').value;
            const messageElement = document.getElementById('message');

            if (userInput === captchaValue) {
                messageElement.textContent = 'Правильно!';
                messageElement.style.color = 'green';
            } else {
                messageElement.textContent = 'Помилка';
                messageElement.style.color = 'red';
            }
        }

        window.onload = function() {
            generateCaptcha(4);
        };