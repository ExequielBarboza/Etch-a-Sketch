const container = document.getElementById("container");
let numberOfDivs = 256;
let squaresSize = " ";
let currentColor = " ";

function generateGrid () { 
    for (let i = 0; i < numberOfDivs; i++) {
            const newDiv = document.createElement('div');
            newDiv.classList.add("squares");
            container.appendChild(newDiv);
    }

    const containerSize = 500;
    const squareSize = containerSize / Math.sqrt (numberOfDivs); 
    squaresSize = Array.from(document.getElementsByClassName("squares"));
    squaresSize.forEach(squaresSize =>{ 
        squaresSize.style.width = squareSize + "px";
        squaresSize.style.height = squareSize + "px";
    });
};

generateGrid();

const buttonPlay = document.getElementById("buttonPlay");
buttonPlay.addEventListener("click", ()=> {
    numberOfDivs = prompt("Enter a number from 1 to 100 to adjust the size of the Grid:");
    if(numberOfDivs > 100){
        alert("Error! Input number should be minor than 100!");
    } else if (numberOfDivs > 0 && numberOfDivs < 101){ 
    numberOfDivs = numberOfDivs * numberOfDivs;
    const squaresDiv = Array.from(document.getElementsByClassName("squares"));
    squaresDiv.forEach(squares => squares.parentNode.removeChild(squares));
    generateGrid();
    mantainBrushColor();
    }
});

function changeColor () {
squaresSize.forEach(squaresSize =>{ 
    let currentDarkness = 0.3;
    squaresSize.addEventListener("mousemove",()=> {
        currentDarkness += 0.1;
        if(currentDarkness > 1){ currentDarkness = 1;}
        let newColor = calculateDarknessColor (currentDarkness);
        squaresSize.style.backgroundColor = newColor;
    });
})};

function calculateDarknessColor(darkness) {
    const maxColorValue = 255;

    const red = Math.round(maxColorValue * (1-darkness));
    const blue = Math.round(maxColorValue * (1-darkness));
    const green = Math.round(maxColorValue * (1-darkness));

    return `rgb(${red}, ${blue}, ${green})`;
}

const buttonRainbow = document.createElement("button");
const buttonBlack = document.createElement("button");
const buttons = document.getElementById("buttons");
buttons.style.padding = "25px";
buttons.appendChild(buttonRainbow);
buttons.appendChild(buttonBlack);
buttonRainbow.textContent = "Rainbow brush!";
buttonRainbow.style.padding = "10px";
buttonBlack.textContent = "Dark brush!";
buttonBlack.style.padding = "10px";
buttons.style.display = "flex";
buttons.style.gap = "20px";

const colors = ["red","blue","violet","orange","yellow","green","violet"];
let randomNumber = Math.floor(Math.random() * 7) + 1;
let randomColor = colors[randomNumber];

function Rainbow() {
    squaresSize.forEach(squaresSize =>{ 
        let darknessColor = 0.3;
        squaresSize.addEventListener("mousemove",()=> {
        darknessColor += 0.1;
        if (darknessColor > 1) {darknessColor = 1};
        randomNumber = Math.floor(Math.random() * 7) + 1;
        randomColor = colors[randomNumber];
        squaresSize.style.backgroundColor = randomColor;
        squaresSize.style.opacity = darknessColor;
        });
    });
}

buttonRainbow.addEventListener("click", ()=>{
    Rainbow();
    currentColor = 1;
});

buttonBlack.addEventListener("click", ()=> {
    changeColor();
    currentColor = 2;
});

const eraser = document.createElement("button");
buttons.appendChild(eraser);
eraser.textContent = "Eraser";
eraser.style.padding = "10px";

function eraserButton () {
    const eraserAll = Array.from(document.getElementsByClassName("squares"));
    eraserAll.forEach(eraserAll => eraserAll.parentNode.removeChild(eraserAll));
    generateGrid();
};

eraser.addEventListener("click", () => {
    eraserButton ();
    mantainBrushColor();
});

function mantainBrushColor() {
    switch (currentColor) {
        case 1:
            Rainbow();
            break;
        case 2:
            changeColor();
            break;
    }
};
