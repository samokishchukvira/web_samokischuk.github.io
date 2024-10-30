let clothes = { 
    type: "худі", 
    color: "лавандовий", 
    size: 38, 
    season: "осінь",
    isWorn: true,
    clothesInfo() {
        console.log(`Тип: ${this.type}, Колір: ${this.color}, Розмір: ${this.size}, Сезон: ${this.season}, Вдягнений: ${this.isWorn ? "так" : "ні"}`);
    }
};

clothes.isWorn = !clothes.isWorn; 
clothes.clothesInfo();

let wardrobe = [
    {type: "джинси", color: "синій", size: 37, season: "весна", isWorn: true}, 
    {type: "футболка", color: "зелена", size: 39, season: "літо", isWorn: false}, 
    {type: "класичні штани", color: "чорні", size: 38, season: "осінь", isWorn: true}, 
    {type: "світшот", color: "чорний", size: 40, season: "осінь", isWorn: true}
];

function displayWardrobe() { 
    console.log("\nНошений одяг:");
    wardrobe.filter(item => item.isWorn).forEach(item => { 
        console.log(`Тип: ${item.type}, Колір: ${item.color}, Розмір: ${item.size}, Сезон: ${item.season}, Вдягнений: ${item.isWorn ? "так" : "ні"}`);
    });

    console.log("\nНе ношений одяг:");
    wardrobe.filter(item => !item.isWorn).forEach(item => { 
        console.log(`Тип: ${item.type}, Колір: ${item.color}, Розмір: ${item.size}, Сезон: ${item.season}, Вдягнений: ${item.isWorn ? "так" : "ні"}`);
    });
}

displayWardrobe();

function calculateAverageSize() {
    let totalSize = 0;
    for (let item of wardrobe) {
        totalSize += item.size;
    }
    return totalSize / wardrobe.length;
}

const averageSize = calculateAverageSize();
console.log(`\nСередній розмір одягу: ${averageSize.toFixed(2)}`);

function addClothesToWardrobe() {
    let type;
    while (true) {
        type = prompt("Введіть тип одягу:");
        if (type) break; 
        alert("Поле тип не може бути порожнім. Спробуйте ще раз.");
    }

    let color;
    while (true) {
        color = prompt("Введіть колір:");
        if (color) break; 
        alert("Поле колір не може бути порожнім. Спробуйте ще раз.");
    }

    let size;
    while (true) {
        size = prompt("Введіть розмір:");
        size = parseInt(size, 10); 
        if (!isNaN(size) && size > 0) break; 
        alert("Будь ласка, введіть число.");
    }

    let season;
    while (true) {
        season = prompt("Введіть сезон:");
        if (season) break; 
        alert("Поле сезон не може бути порожнім. Спробуйте ще раз.");
    }

    let isWorn = confirm("Чи ношений цей одяг?"); 

    wardrobe.push({ type, color, size, season, isWorn }); 
    console.log(`\nГардероб з доданим новим одягом:`);
    displayWardrobe(); 
}

addClothesToWardrobe();

wardrobe.sort((a, b) => a.type.localeCompare(b.type)); 

console.log("\nВідсортований гардероб:");
wardrobe.forEach(item => {
    console.log(`Тип: ${item.type}, Колір: ${item.color}, Розмір: ${item.size}, Сезон: ${item.season}, Вдягнений: ${item.isWorn ? "так" : "ні"}`);
});
