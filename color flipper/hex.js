const btn = document.getElementById("btn");
const color = document.getElementById("color");

const setBg = () => {

    document.body.style.backgroundColor = "#" + randomColor;
    color.innerHTML = "#" + randomColor;
}

btn.addEventListener("click", function() {
    //get random number between 0 and 3
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    console.log(randomColor);
    document.body.style.backgroundColor = "#" + randomColor;
    color.textContent = "#" + randomColor;
    document.getElementById("color").style.color = "#" + randomColor;
});