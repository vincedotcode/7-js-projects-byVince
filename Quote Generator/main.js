const btn = document.getElementById("btn");
const quote = document.getElementById("quote");
const author = document.getElementById("author");


function getQuote() {
    fetch("https://api.quotable.io/random")
        .then(response => response.json())
        .then(data => {
            quote.innerHTML = data.content;
            author.innerHTML = data.author;
        });
}

btn.addEventListener("click", getQuote);