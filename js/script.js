const container = document.querySelector('.container');

for(let row=0; row<256; row++) {   
        const squareDiv = document.createElement('square-div');
        squareDiv.classList.add('square-div');
        // squareDiv.textContent = row + 1;
        const widthHeight = 960/16;
        console.log(widthHeight);
        squareDiv.style.width = `${widthHeight}px`;
        squareDiv.style.height = `${widthHeight}px`;
        container.appendChild(squareDiv);
}