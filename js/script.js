const container = document.querySelector('.container');

function changeGridSize(gridSize) {
	container.replaceChildren();
	for(let index=0; index < gridSize*gridSize; index++) {   
		const squareDiv = document.createElement('square-div');
		squareDiv.classList.add('square-div');

		const widthHeight = Math.round(720/gridSize);
		squareDiv.style.width = `${widthHeight}px`;
		squareDiv.style.height = `${widthHeight}px`;

		container.appendChild(squareDiv);
	}
}

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