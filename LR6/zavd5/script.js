function getRandomNumber(delay) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const randomNumber = Math.floor(Math.random() * 10) + 1; 
            resolve(randomNumber);
        }, delay);
    });
}

const promises = [
    getRandomNumber(1000),
    getRandomNumber(2000), 
    getRandomNumber(3000)  
];

Promise.all(promises).then(results => {
    const sum = results.reduce((acc, num) => acc + num, 0); 
    document.getElementById("result").textContent = `Сума всіх значень: ${sum}`;
});
