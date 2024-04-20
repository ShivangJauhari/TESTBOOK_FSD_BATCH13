/**
 * Represents a quote generator.
 * @module QuoteGenerator
 */

// variables

/** @type {HTMLButtonElement} */
let btn = document.querySelector('#quote-btn');

/** @type {HTMLParagraphElement} */
let quote = document.querySelector('.quote');

/** @type {HTMLParagraphElement} */
let author = document.querySelector('.author');

/** @type {Array} */
const quotes = [];

fetch('quotes.json')
    .then(response => response.json())
    .then(quotesObj => quotes.push(quotesObj))
    .catch(error => console.error('Error:', error));

// console.log(quotes);

btn.addEventListener('click', () => {
    let random = Math.floor(Math.random() * quotes[0].length);
    quote.textContent = quotes[0][random].quote;
    author.textContent = quotes[0][random].author;
});