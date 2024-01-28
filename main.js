const container = document.getElementById("container");
let numberOfDivs = 256;

function generateGrid () { 
    for (let i = 0; i < numberOfDivs; i++) {
            const newDiv = document.createElement('div');
            newDiv.classList.add("squares");
            container.appendChild(newDiv);
    }

const containerSize = 500; // Create the var that equal to container size.
const squareSize = containerSize / Math.sqrt (numberOfDivs); 
const squaresSize = Array.from(document.getElementsByClassName("squares"));
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
    const squares = Array.from(document.getElementsByClassName("squares"));
    squares.forEach(squares => squares.parentNode.removeChild(squares));
    generateGrid();
    }
});

