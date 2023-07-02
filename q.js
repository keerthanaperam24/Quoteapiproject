const quoteText = document.getElementById('quote-text');
const quoteTags = document.getElementById('quote-tags');
const quoteAuthor = document.getElementById('quote-author');
const genQuoteBtn = document.getElementById('btn');

function randomQuote() {
  fetch('https://api.quotable.io/random')
    .then(response => response.json())
    .then(data => {
        console.log(data.content)
      quoteText.textContent = data.content;
      quoteTags.textContent = data.tags;
      quoteAuthor.textContent = `-- ${data.author}`;
    });
}

randomQuote();

genQuoteBtn.addEventListener('click', () => {
  randomQuote();
});
