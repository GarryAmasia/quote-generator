const quoteContainer = document.getElementById("quote-container");
const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const fbBtn = document.getElementById("fb-button");

let apiQuotes = [];

//show newQuote function
const newQuote = () => {
  let random = Math.floor(Math.random() * apiQuotes.length);
  //   console.log(random);

  const quote = apiQuotes[random];
  console.log(quote);
  //check if author is blank and replace with unknown
  if (!quote.author) {
    authorText.textContent = "Unknown";
  } else {
    authorText.textContent = quote.author;
  }
  // authorText.textContent = quote.author;
  quoteText.textContent = quote.text;
};

// get quote from api
const getQuote = async () => {
  const apiUrl = "https://type.fit/api/quotes";
  try {
    const response = await fetch(apiUrl);
    apiQuotes = await response.json();
    // console.log(apiQuotes[]);
    newQuote();
  } catch (error) {
    // catching an error
  }
};

//onload
getQuote();
