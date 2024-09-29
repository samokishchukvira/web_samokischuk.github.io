let library = [
    {title: "Harry Potter and the Sorcerer's Stone", author: "J.K. Rowling", year: 1997, isRead: true }, 
    {title: "The Hobbit", author: "J.R.R. Tolkien", year: 1937, isRead: false }, 
    {title: "1984", author: "George Orwell", year: 1949, isRead: true } 
];

function displayLibrary() { 
    library.forEach(book => { 
        console.log(`Назва: ${book.title}, Автор: ${book.author}, Рік видання: ${book.year}. Прочитана: ${book.isRead ? "Так" : "Ні"}`); 
    });
}

library.push({ title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925, isRead: false }); 
displayLibrary();

library.sort((a, b) => a.year - b.year);
console.log("Відсортовані книги за роком видання:", library); 

let unreadBooks = library.filter(book => ! book.isRead);
console.log("Непрочитані книги:", unreadBooks);
  
let tolkienBook = library.find(book => book.author === "J.R.R. Tolkien"); 
console.log("Книга Толкіна:", tolkienBook);