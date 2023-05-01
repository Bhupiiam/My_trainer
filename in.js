// Get all the quotes
var quotes = document.querySelectorAll('.quote');

// Set the index of the current quote
var currentQuoteIndex = 0;

// Set the time interval for changing the quote
var interval = setInterval(changeQuote, 5000);

// Function to change the quote
function changeQuote() {
  // Hide the current quote
  quotes[currentQuoteIndex].style.display = 'none';

  // Increment the current quote index
  currentQuoteIndex++;

  // If we've reached the end of the quotes, go back to the beginning
  if (currentQuoteIndex >= quotes.length) {
    currentQuoteIndex = 0;
  }

  // Show the new quote
  quotes[currentQuoteIndex].style.display = 'block';
}
