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
    wardrobe.forEach(item => { 
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
console.log(`Середній розмір одягу: ${averageSize.toFixed(2)}`);

wardrobe.sort((a, b) => a.size - b.size);
console.log("Відсотований гардероб:");
displayWardrobe();

function addClothesToWardrobe() { 
    let type = prompt("Введіть тип одягу:"); 
    let color = prompt("Введіть колір:"); 
    let size = +prompt("Введіть розмір:"); 
    let season = prompt("Введіть сезон:"); 
    let isWorn = confirm("Чи ношений цей одяг?"); 

    wardrobe.push({ type, color, size, season, isWorn }); 
    console.log(`Гардероб з доданим новим одяг: `);
    displayWardrobe(); 
} 
addClothesToWardrobe();