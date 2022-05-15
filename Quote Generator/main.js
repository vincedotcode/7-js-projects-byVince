const btn = document.getElementById("btn");
const quote = document.getElementById("quote");


function getQuote() {
    fetch("https://api.quotable.io/random")
        .then(response => response.json())
        .then(data => {
            quote.innerHTML = data.content;
        });
}

btn.addEventListener("click", getQuote);