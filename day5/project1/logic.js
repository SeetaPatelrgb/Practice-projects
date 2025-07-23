async function getQuote() {
  const quoteText = document.getElementById("quote");
  const authorText = document.getElementById("author");

  // quoteText.innerText = "Loading...";
  // authorText.innerText = "";

  try {
    const response = await fetch("https://quote-generator-api-six.vercel.app/api/quotes/random");
    const data = await response.json();

    quoteText.innerText = `"${data.content}"`;
    authorText.innerText = `- ${data.author}`;
  } catch (error) {
    quoteText.innerText = "Failed to fetch quote.";
  }
}

// Load first quote on page load
getQuote();
