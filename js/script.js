const container = document.querySelector('.container');

function changeGridSize(gridSize) {
	container.replaceChildren();
	for(let index=0; index < gridSize*gridSize; index++) {   
		const squareDiv = document.createElement('square-div');
		squareDiv.classList.add('square-div');

		const randomColor = generateRandomColor()
		console.log(randomColor);

		const widthHeight = Math.round(720/gridSize);
		squareDiv.style.width = `${widthHeight}px`;
		squareDiv.style.height = `${widthHeight}px`;
		squareDiv.style.backgroundColor = randomColor;

		container.appendChild(squareDiv);

		squareDiv.addEventListener('mouseover',() => squareDiv.style.opacity = 1);
	}
}

// Grid Size Code
let gridSizeChoice = 16;
changeGridSize(gridSizeChoice);

const gridChangeButton = document.querySelector('.grid-button');

gridChangeButton.addEventListener('click', () => {
	gridSizeChoice = prompt("Enter the grid size(Between 10 and 100): ");
	console.log(gridSizeChoice);
	
	if(gridSizeChoice === null) 
		changeGridSize(16);
	else
		changeGridSize(gridSizeChoice);
})

// Random color generator code
function randomColorNum() {
	// RGB color value ranges from 0 to 255
	return Math.floor(Math.random() * 256);
}

function generateRandomColor() {
	return `rgb(${randomColorNum()}, ${randomColorNum()}, ${randomColorNum()})`;
}


// Clear grid
let clearButton = document.querySelector('.clear-button');
clearButton.addEventListener('click',() => changeGridSize(gridSizeChoice));