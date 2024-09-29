let library = [
    {title: "Harry Potter and the Sorcerer's Stone", author: "J.K. Rowling", year: 1997, isRead: true }, 
    {title: "The Hobbit", author: "J.R.R. Tolkien", year: 1937, isRead: false }, 
    {title: "1984", author: "George Orwell", year: 1949, isRead: true } 
];

function calculateAverageYear(library) {
    if (library.length === 0) return 0; 
    const totalYears = library.reduce((sum, book) => sum + book.year, 0); 
    return totalYears / library.length; 
}

const averageYear = calculateAverageYear(library);
console.log("Середній рік видання:", averageYear);