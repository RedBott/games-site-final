function popUpGames() {
    const butn = document.getElementsByClassName("button-container")[0];
    const container = document.createElement('div');
    butn.parentElement.appendChild(container);
    butn.parentElement.removeChild(butn);
    const mines = document.createElement('div');
    const tictactoe = document.createElement('div');
    const snake = document.createElement('div');
    mines.setAttribute('class', 'mines-popup');
    tictactoe.setAttribute('class', 'tictactoe-popup');
    snake.setAttribute('class', 'snake-popup');
    container.setAttribute('class', 'popup-container')
    container.appendChild(mines);
    container.appendChild(tictactoe);
    container.appendChild(snake);
    const minesHref = document.createElement('a');
    const tictactoeHref = document.createElement('a');
    const snakeHref = document.createElement('a');
    const minesIcon = document.createElement('img');
    const tictactoeIcon = document.createElement('img');
    const snakeIcon = document.createElement('img');
    minesHref.appendChild(minesIcon);
    tictactoeHref.appendChild(tictactoeIcon);
    snakeHref.appendChild(snakeIcon);
    mines.appendChild(minesHref);
    tictactoe.appendChild(tictactoeHref);
    snake.appendChild(snakeHref);
    minesHref.setAttribute('href', 'http://localhost:3000/mines');
    tictactoeHref.setAttribute('href', 'http://localhost:3000/tictactoe');
    snakeHref.setAttribute('href', 'http://localhost:3000/snake');
    minesIcon.setAttribute('src', '../assets/mines.jpg');
    tictactoeIcon.setAttribute('src', '../assets/tictactoe.png');
    snakeIcon.setAttribute('src', '../assets/snake.png');
    const tictactoeName = document.createElement('p');
    const snakeName = document.createElement('p');
    const minesName = document.createElement('p');
    const node = document.createTextNode('TIC TAC TOE');
    tictactoeName.appendChild(node);
    const node1  = document.createTextNode('MINESWEEPER');
    minesName.appendChild(node1);
    const node2 = document.createTextNode('SSSNAKE');
    snakeName.appendChild(node2);
    mines.appendChild(minesName);
    snake.appendChild(snakeName);
    tictactoe.appendChild(tictactoeName);
  }

