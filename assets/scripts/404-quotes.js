// 404-quotes.js
// Rotates through a list of quotes for the 404 page

const quotes = [
  "Houston, we have a problem.",
  "404: Page not found!",
  "Looks like you're lost in space.",
  "Oops! This page has gone missing.",
  "Well, this is awkward...",
  "The page you seek is not here.",
  "Error 404: The robots couldn't find it.",
  "Are you sure you typed that right?",
  "This isn't the page you're looking for.",
  "Lost in the void. Try again!"
];

function getRandomQuote() {
  return quotes[Math.floor(Math.random() * quotes.length)];
}

// Replace the quote in the 404 page if the element exists
window.addEventListener('DOMContentLoaded', function() {
  const quoteElem = document.getElementById('error-quote');
  if (quoteElem) {
    quoteElem.textContent = getRandomQuote();
  }
});
