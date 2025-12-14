const quotes = [
    { text: "The important thing is not to stop questioning. Curiosity has its own reason for existing.", author: "Albert Einstein", category: "science" },
    { text: "Science is not only a disciple of reason but also one of romance and passion.", author: "Stephen Hawking", category: "science" },
    { text: "The good thing about science is that it's true whether or not you believe in it.", author: "Neil deGrasse Tyson", category: "science" },
    { text: "Somewhere, something incredible is waiting to be known.", author: "Carl Sagan", category: "science" },
    { text: "In science, there are no shortcuts to truth.", author: "Karl Popper", category: "science" },
    { text: "The unexamined life is not worth living.", author: "Socrates", category: "philosophy" },
    { text: "I think, therefore I am.", author: "René Descartes", category: "philosophy" },
    { text: "He who has a why to live can bear almost any how.", author: "Friedrich Nietzsche", category: "philosophy" },
    { text: "The only true wisdom is in knowing you know nothing.", author: "Socrates", category: "philosophy" },
    { text: "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.", author: "Ralph Waldo Emerson", category: "philosophy" },
    { text: "The only way to do great work is to love what you do.", author: "Steve Jobs", category: "motivation" },
    { text: "Believe you can and you're halfway there.", author: "Theodore Roosevelt", category: "motivation" },
    { text: "Success is not final, failure is not fatal: it is the courage to continue that counts.", author: "Winston Churchill", category: "motivation" },
    { text: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt", category: "motivation" },
    { text: "It does not matter how slowly you go as long as you do not stop.", author: "Confucius", category: "motivation" },
    { text: "There is no greater agony than bearing an untold story inside you.", author: "Maya Angelou", category: "literature" },
    { text: "A reader lives a thousand lives before he dies. The man who never reads lives only one.", author: "George R.R. Martin", category: "literature" },
    { text: "We read to know we're not alone.", author: "William Nicholson", category: "literature" },
    { text: "The only thing that you absolutely have to know is the location of the library.", author: "Albert Einstein", category: "literature" },
    { text: "Books are a uniquely portable magic.", author: "Stephen King", category: "literature" }
];

let currentIndex = 0;
let filteredQuotes = [...quotes];

const quoteText = document.getElementById('quoteText');
const quoteAuthor = document.getElementById('quoteAuthor');
const quoteCategory = document.getElementById('quoteCategory');
const counter = document.getElementById('counter');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const randomBtn = document.getElementById('randomBtn');

function displayQuote(index) {
    const quote = filteredQuotes[index];
    quoteText.textContent = `"${quote.text}"`;
    quoteAuthor.textContent = `— ${quote.author}`;
    quoteCategory.textContent = quote.category.charAt(0).toUpperCase() + quote.category.slice(1);
    counter.textContent = `Quote ${index + 1} of ${filteredQuotes.length}`;
    updateButtonStates();
}

function updateButtonStates() {
    prevBtn.disabled = currentIndex === 0;
    nextBtn.disabled = currentIndex === filteredQuotes.length - 1;
}

prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        displayQuote(currentIndex);
    }
});

nextBtn.addEventListener('click', () => {
    if (currentIndex < filteredQuotes.length - 1) {
        currentIndex++;
        displayQuote(currentIndex);
    }
});

randomBtn.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * filteredQuotes.length);
    currentIndex = randomIndex;
    displayQuote(currentIndex);
});

displayQuote(currentIndex);