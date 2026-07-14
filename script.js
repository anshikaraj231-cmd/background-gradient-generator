const button1 = document.getElementById("myButton");
const button2 = document.getElementById("myButton2");
const copyCode = document.querySelector(".copyCode");

let color1 = "#051937";
let color2 = "#008793";

function getRandomColor() {
    const hex = "0123456789ABCDEF";
    let color = "#";

    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)];
    }

    return color;
}

function updateGradient() {
    document.body.style.backgroundImage =
        `linear-gradient(to right, ${color1}, ${color2})`;

    copyCode.innerText =
        `background-image: linear-gradient(to right, ${color1}, ${color2});`;
}

button1.addEventListener("click", () => {
    color1 = getRandomColor();
    button1.innerText = color1;
    button1.style.backgroundColor = color1;
    updateGradient();
});

button2.addEventListener("click", () => {
    color2 = getRandomColor();
    button2.innerText = color2;
    button2.style.backgroundColor = color2;
    updateGradient();
});

copyCode.addEventListener("click", async () => {
    try {
        await navigator.clipboard.writeText(copyCode.innerText);
        alert("Gradient code copied!");
    } catch (err) {
        alert("Copy failed. Run the project using Live Server.");
    }
});

updateGradient();