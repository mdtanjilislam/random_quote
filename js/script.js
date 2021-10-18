/******************************************
project 1 - Random Quote Generator
******************************************/
const load_quote = document.querySelector('.load-quote');
const quote_box = document.querySelector('.quote-box');
const quote = document.querySelector('.quote');
const source = document.querySelector('.source');
const citation = document.querySelector('.citation');
const year = document.querySelector('.year');

/***
 * `quotes` array
 ***/
 const quotes = [
    {
    quote:"The purpose of our lives is to be happy",
    source:"Dalai Lama",
    citation:"Parade",
    year:"2015"
    },
    {
    quote:"The artist is nothing without the gift, but the gift is nothing without work",
    source:"Emile Zola",
    citation:"cs.virginia.edu",
    year:"1878"
    },
    {
    quote:"Get busy living or get busy dying",
    source:"Stephen King",
    citation:"Parade",
    year:"2000"
    },
    {
    quote:"You only live once, but if you do it right, once is enough",
    source:"Mae West",
    citation:"Facebook",
    year:"2009"
    },
    {
    quote:"In the End, we will remember not the words of our enemies, but the silence of our friends",
    source:"Martin Luther King Jr.",
    citation:"cs.virginia.edu",
    year:"1960"
    },
    {
    quote:"If you want to live a happy life, tie it to a goal, not to people or things",
    source:"Albert Einstein",
    citation:"Parade",
    year:"1945"
    },
    {
    quote:"Never let the fear of striking out keep you from playing the game",
    source:"Babe Ruth",
    citation:"Parade",
    year:"1910"
    },
    {
    quote:"Money and success don’t change people; they merely amplify what is already there",
    source:"Will Smith",
    citation:"Twitter",
    year:"2010"
    },
    {
    quote:"Not how long, but how well you have lived is the main thing",
    source:"Seneca",
    citation:"Twitter",
    year:"2000"
    },
    {
    quote:"That which does not kill us makes us stronger",
    source:"Friedrich Nietzsche",
    citation:"Pakwired",
    year:"1890"
    }
];

/***
 * `getRandomQuote` function
 ***/
function getRandomQuote(){
    let quoteIndex = Math.floor(Math.random() * quotes.length);
    return quotes[quoteIndex]; 
}

/***
 * `printQuote` function
 ***/
function printQuote(){
    let randomQuoteObject = getRandomQuote();
    //changing the quotes, source, citation & year
    quote.innerText = randomQuoteObject.quote;
    source.innerText = randomQuoteObject.source;
    citation.innerText = randomQuoteObject.citation;
    source.appendChild(citation);
    year.innerText = randomQuoteObject.year;
    source.appendChild(year);
    //BG color change for each click
    let randomColor = Math.floor(Math.random() * 3850594 ).toString(16);
    document.body.style.backgroundColor = '#' + randomColor;
}

/***
 * click event listener for the print quote button
 ***/
load_quote.addEventListener('click', printQuote);