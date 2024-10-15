// DEFINE O QUERY SELECTOR
let $ = document.querySelector.bind(document);

// DEFINE AS BANDAS DO RESISTOR
const bandOne = $('.band-1');
const bandTwo = $('.band-2');
const bandThree = $('.band-3');
const bandFour = $('.band-4');
const bandFive = $('.band-5');

// CAPTURA OS RESULTADOS
const resultThreeBand = $('#result-three-band');
const resultFourBand = $('#result-four-band');
const resultFiveBand = $('#result-four-band');

// CORES DO RESISTOR
const colors = [
    '#101016', 
    '#866704', 
    '#ff0000', 
    '#ff8c00', 
    '#ffff00', 
    '#029f02', 
    '#0000ff', 
    '#760076', 
    '#7c7c7c', 
    '#ffffff', 
    'linear-gradient(135deg, #e5e5e5 0%, #a3a3a3 50%, #e5e5e5 100%)', 
    'linear-gradient(220deg, #707070 0%, #f1c40f 40%, #d4ac0d 100%)'
];

// CONTADORES PARA AS CORES
let countOne = 0;
let countTwo = 0;
let countThree = 0;
let countFour = 0;
let countFive = 0;

// MUDA A COR
const changeColor = (band, count) => {
    band.style.background = colors[count];
};

// MUDA A COR DA PRIMEIRA BANDA
bandOne.addEventListener('click', () => {
    countOne = (countOne + 1) % colors.length; // Incrementa e reseta
    changeColor(bandOne, countOne);
});

// MUDA A COR DA SEGUNDA BANDA
bandTwo.addEventListener('click', () => {
    countTwo = (countTwo + 1) % colors.length; // Incrementa e reseta
    changeColor(bandTwo, countTwo);
});

// MUDA A COR DA TERCEIRA BANDA
bandThree.addEventListener('click', () => {
    countThree = (countThree + 1) % colors.length; // Incrementa e reseta
    changeColor(bandThree, countThree);
});

// MUDA A COR DA QUARTA BANDA
bandFour.addEventListener('click', () => {
    countFour = (countFour + 1) % colors.length; // Incrementa e reseta
    changeColor(bandFour, countFour);
});

// MUDA A COR DA QUINTA BANDA
bandFive.addEventListener('click', () => {
    countFive = (countFive + 1) % colors.length; // Incrementa e reseta
    changeColor(bandFive, countFive);
});
