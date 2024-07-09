const container = document.querySelector('.container');

function changeGridSize(gridSize) {
	container.replaceChildren();

	// To get style of container div
	const containerComputedStyle = window.getComputedStyle(container);
	const containerWidth = parseFloat(containerComputedStyle.width);
    const containerHeight = parseFloat(containerComputedStyle.height);

	for(let index=0; index < gridSize*gridSize; index++) {   
		const squareDiv = document.createElement('div');
		squareDiv.classList.add('square-div');
		const randomColor = generateRandomColor()

		const itemWidth = containerWidth / gridSize;
		const itemHeight = containerHeight / gridSize;

		squareDiv.style.width = `${itemWidth}px`;
		squareDiv.style.height = `${itemHeight}px`;
		squareDiv.style.backgroundColor = randomColor;
		squareDiv.style.opacity = 0;
		container.appendChild(squareDiv);
	}
	startPainting();
}



// Grid Size Code
let gridSizeChoice = 16;
changeGridSize(gridSizeChoice);

const gridChangeButton = document.querySelector('.grid-button');

gridChangeButton.addEventListener('click', () => {
	gridSizeChoice = prompt("Enter the grid size(Between 10 and 100): ");
	console.log(`gridSizeChoice: ${gridSizeChoice}`);
	
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

// Change shade of color on each hover
function startPainting() {
	const gridItems = document.querySelectorAll('.container > div');

		gridItems.forEach(item => {
			const gridItem = item;
			gridItem.count = 0;
			gridItem.addEventListener("mouseover", (event) => {
				console.log(event);
				event.target.count += 1;
				event.target.style.opacity = 0.2 * event.target.count;
		});
	});
}