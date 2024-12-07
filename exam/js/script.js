document.getElementById('numbersInput').addEventListener('blur', function () {
    const input = this.value.trim();

    if (/[^0-9,\.\s]/.test(input)) {
      document.getElementById('averageOutput').textContent = "Введіть числа через кому...";
      return;
    }
    if (!input.includes(',')) {
      document.getElementById('averageOutput').textContent = "Введіть числа через кому...";
      return;
    }

    const numbers = input
      .split(',')
      .map(num => parseFloat(num.trim()))
      .filter(num => !isNaN(num));

    if (numbers.length === 0) {
      document.getElementById('averageOutput').textContent = "Помилка. Введіть правильно";
      return;
    }

    const average = numbers.reduce((sum, num) => sum + num, 0) / numbers.length;

    document.getElementById('averageOutput').textContent = `Середнє арифметичне: ${average}`;
  });