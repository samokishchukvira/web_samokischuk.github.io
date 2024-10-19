function replaceDateFormats(inputString) {
    const dateFormat = /\b(\d{2})\/(\d{2})\/(\d{4})\b/g;

    return inputString.replace(dateFormat, function(match, day, month, year) {
        return `${year}-${month}-${day}`;
    });
}

function replaceDate() {
    const input = document.getElementById('userInput').value;
    const outputElement = document.getElementById('output');
    
    if (input.trim() === '') {
        outputElement.textContent = 'Поле порожнє! Введіть будь ласка дату у форматі DD/MM/YYYY.';
        return;
    }
    const dateCheckFormat = /\b(\d{2})\/(\d{2})\/(\d{4})\b/;
    
    if (!dateCheckFormat.test(input)) {
        outputElement.textContent = 'Неправильний формат! Введіть дату у форматі DD/MM/YYYY.';
        return;
    }

    const output = replaceDateFormats(input);
    outputElement.textContent = output;
}

function extractValidEmails(text) {
    const emailRegex = /\b[\w.%+-]+@[\w.-]+\.[a-zA-Z]{2,6}\b/g;
    
    const emails = text.match(emailRegex);

    if (emails) {
        return emails;
    } else {
        return [];
    }
}

function extractEmails() {
    const input = document.getElementById('emailInput').value;
    const outputElement = document.getElementById('output');

    const validEmails = extractValidEmails(input);

    if (validEmails.length > 0) {
        outputElement.textContent = `Електронрні адреси: ${validEmails.join(', ')}`;
    } else {
        outputElement.textContent = 'Не знайдено елктронні адреси!';
    }
}
