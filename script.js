const corpo = document.querySelector('body');
const criandoHeader = document.createElement('header');
criandoHeader.id = 'cabecalho';
corpo.appendChild(criandoHeader);
const criandoMain = document.createElement('main');
corpo.appendChild(criandoMain);
const localMain = document.querySelector('main');
const cabecalho = document.querySelector('header');
const criandoH1 = document.createElement('h1');
criandoH1.id = 'title';
criandoH1.innerText = 'Color Guess!';
cabecalho.appendChild(criandoH1);
const LocalTitle = document.querySelector('#title');

function colorTitleRandom() {
  const redRandom = Math.round(Math.random() * 255);
  const blueRandom = Math.round(Math.random() * 255);
  const greenRandom = Math.round(Math.random() * 255);
  LocalTitle.style.color = `rgb(${redRandom}, ${blueRandom}, ${greenRandom}`;
}

function randomNumberForGuess() {
  const redRandom = Math.round(Math.random() * 255);
  const blueRandom = Math.round(Math.random() * 255);
  const greenRandom = Math.round(Math.random() * 255);
  return `rgb(${redRandom}, ${blueRandom}, ${greenRandom})`;
}

const criandoParagrafo = document.createElement('p');
criandoParagrafo.id = 'rgb-color';
criandoParagrafo.innerText = randomNumberForGuess();
localMain.appendChild(criandoParagrafo);

window.onload = () => {
  colorTitleRandom();
};
