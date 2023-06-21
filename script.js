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
const criandoParagrafo = document.createElement('p');
criandoParagrafo.id = 'rgb-color';
criandoParagrafo.innerText = 'calmae';
localMain.appendChild(criandoParagrafo);
const criandoSection = document.createElement('section');
criandoSection.id = 'sectionBalls';
localMain.appendChild(criandoSection);
const localSection = document.querySelector('#sectionBalls');

function randomNumberForDivs() {
  for (let i = 1; i <= 6; i += 1) {
    const redRandom = Math.round(Math.random() * 255);
    const blueRandom = Math.round(Math.random() * 255);
    const greenRandom = Math.round(Math.random() * 255);
    const criaDiv = document.createElement('div');
    criaDiv.classList.add('ball');
    criaDiv.style.backgroundColor = `rgb(${redRandom}, ${blueRandom}, ${greenRandom})`;
    localSection.appendChild(criaDiv);
  }
}
function randomNumberForGuess() {
  const redRandom = Math.round(Math.random() * 255);
  const blueRandom = Math.round(Math.random() * 255);
  const greenRandom = Math.round(Math.random() * 255);
  criandoParagrafo.innerText = `(${redRandom}, ${blueRandom}, ${greenRandom})`;
  const randomDiv = Math.round(Math.random() * 6) - 1;
  const divs = document.querySelectorAll('.ball');
  divs[randomDiv].style.backgroundColor = `rgb(${redRandom}, ${blueRandom}, ${greenRandom})`;
}

window.onload = () => {
  randomNumberForDivs();
  randomNumberForGuess();
  colorTitleRandom();
};
