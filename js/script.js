const cells = document.querySelectorAll(".cell");
let currentPlayer = 'X';
let gameOver = false;

function handleClick(e) {
    const cell = e.target;
    if (cell.textContent || gameOver) {
        return;
    }
    cell.textContent = currentPlayer;
    
    if (checkWin()) {
        gameOver = true;
        alert(currentPlayer + ' wins!');
    } else if (checkDraw()) {
        gameOver = true;
        alert('CAT');
    } else {
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }

}

cells.forEach(cell => {
    cell.addEventListener('click', handleClick)
});

function checkWin() {
    const combos = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]

    for (const combo of combos) {
        const[a,b,c] = combo;
        if (cells[a].textContent && 
            cells[a].textContent === cells[b].textContent && 
            cells[a].textContent === cells[c].textContent) {
            return true;
        }
    }
    return false;
}

function checkDraw() {
    for (const cell of cells) {
        if (!cell.textContent) {
            return false
        }
    }
    return true;
}