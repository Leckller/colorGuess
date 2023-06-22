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
  const randomDiv = Math.round(Math.random() * 5);
  const divs = document.querySelectorAll('.ball');
  divs[randomDiv].style.backgroundColor = `rgb(${redRandom}, ${blueRandom}, ${greenRandom})`;
}
const criando2Paragrafo = document.createElement('p');
criando2Paragrafo.id = 'answer';
localMain.appendChild(criando2Paragrafo);
const local2Paragrafo = document.querySelector('#answer');
// const armazenamentoDeRespostas = ['Que pena você errou, tente mais uma vez!', 'Vish se pá q foi o errado', 'Passou perto... Talvez nem tanto', 'Sinto informar, mas você errou', 'Tá jogando de olhos fechados?', 'Foi uma boa tentativa'];

const criando3Paragrafo = document.createElement('p');
criando3Paragrafo.id = 'score';
criando3Paragrafo.innerText = '';
cabecalho.appendChild(criando3Paragrafo);
const localPontos = document.querySelector('#score');
const nAcertos = [];
const mAcertos = 3;

function eventDivs() {
  const texto = document.querySelector('#rgb-color');
  const divs = document.querySelectorAll('.ball');
  for (let i = 0; i < 6; i += 1) {
    divs[i].addEventListener('click', (event) => {
      if (event.target.style.backgroundColor.includes(texto.innerText)) {
        local2Paragrafo.innerText = 'Acertou!';
        nAcertos.push('.');
        const pontos = (mAcertos * nAcertos.length) + 0;
        localPontos.innerText = `Pontos: ${pontos}`;
      } else {
        // const randomNumberResp = Math.round(Math.random() * 5);
        // local2Paragrafo.innerText = armazenamentoDeRespostas[randomNumberResp];
        local2Paragrafo.innerText = 'Errou! Tente novamente!';
      }
    });
  }
}
const criandoBotao = document.createElement('button');
criandoBotao.id = 'reset-game';
criandoBotao.innerText = 'Reset';
localMain.appendChild(criandoBotao);
const localBotaoReset = document.querySelector('#reset-game');

localBotaoReset.addEventListener('click', () => {
  const divs = document.querySelectorAll('.ball');
  for (let i = 0; i <= 5; i += 1) {
    const redRandom = Math.round(Math.random() * 255);
    const blueRandom = Math.round(Math.random() * 255);
    const greenRandom = Math.round(Math.random() * 255);
    divs[i].style.backgroundColor = `rgb(${redRandom}, ${blueRandom}, ${greenRandom})`;
  }
  local2Paragrafo.innerText = 'Escolha uma cor';
  randomNumberForGuess();
});

window.onload = () => {
  randomNumberForDivs();
  randomNumberForGuess();
  colorTitleRandom();
  eventDivs();
  local2Paragrafo.innerText = 'Escolha uma cor';
  localPontos.innerText = 'Pontos: 0';
};
