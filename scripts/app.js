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
const resultFiveBand = $('#result-five-band');

// CORES DO RESISTOR
const colors = [
    '#101016', // 0
    '#866704', // 1
    '#ff0000', // 2
    '#ff8c00', // 3
    '#ffff00', // 4
    '#029f02', // 5
    '#0000ff', // 6
    '#760076', // 7
    '#7c7c7c', // 8
    '#ffffff', // 9
    'linear-gradient(135deg, #e5e5e5 0%, #a3a3a3 50%, #e5e5e5 100%)', // Prateado (10% Tolerância)
    'linear-gradient(220deg, #707070 0%, #f1c40f 40%, #d4ac0d 100%)' // Dourado (5% Tolerância)
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

// FUNÇÃO PARA CALCULAR A RESISTÊNCIA
const calculateResistance = () => {
    let value = 0;
    let tolerance = '';

    // Cálculo para 3 bandas
    if (countThree > 0 && countFour === 0 && countFive === 0) {
        value = (countOne * 10 + countTwo) * Math.pow(10, countThree);
    }
    // Cálculo para 4 bandas
    else if (countFour > 0 && countFive === 0) {
        value = (countOne * 10 + countTwo) * Math.pow(10, countThree);
    }
    // Cálculo para 5 bandas
    else if (countFive > 0) {
        value = (countOne * 100 + countTwo * 10 + countThree) * Math.pow(10, countFour);
    }

    // Determina a tolerância
    if (countFour === 10 || countFive === 10) {
        tolerance = '±10%'; // Prateado
    } else if (countFour === 11 || countFive === 11) {
        tolerance = '±5%'; // Dourado
    }

    // CONVERSÃO PARA KILOOHM E MEGAOHM
    let unit = 'Ω';
    if (value >= 1e6) {
        value = (value / 1e6).toFixed(2);
        unit = 'MΩ';
    } else if (value >= 1e3) {
        value = (value / 1e3).toFixed(2);
        unit = 'kΩ';
    }

    // Atualiza os resultados com a unidade correta
    if (resultThreeBand) {
        resultThreeBand.textContent = `Resistência: ${value} ${unit} ${tolerance}`;
    }
    if (resultFourBand) {
        resultFourBand.textContent = `Resistência: ${value} ${unit} ${tolerance}`;
    }
    if (resultFiveBand) {
        resultFiveBand.textContent = `Resistência: ${value} ${unit} ${tolerance}`;
    }
};

// MUDA A COR E CALCULA A RESISTÊNCIA
const changeAndCalculate = (band, count) => {
    changeColor(band, count);
    calculateResistance();
};

// MUDA A COR DA PRIMEIRA BANDA
bandOne?.addEventListener('click', () => {
    countOne = (countOne + 1) % colors.length; // Incrementa e reseta
    changeAndCalculate(bandOne, countOne);
});

// MUDA A COR DA SEGUNDA BANDA
bandTwo?.addEventListener('click', () => {
    countTwo = (countTwo + 1) % colors.length; // Incrementa e reseta
    changeAndCalculate(bandTwo, countTwo);
});

// MUDA A COR DA TERCEIRA BANDA
bandThree?.addEventListener('click', () => {
    countThree = (countThree + 1) % colors.length; // Incrementa e reseta
    changeAndCalculate(bandThree, countThree);
});

// MUDA A COR DA QUARTA BANDA
bandFour?.addEventListener('click', () => {
    countFour = (countFour + 1) % colors.length; // Incrementa e reseta
    changeAndCalculate(bandFour, countFour);
});

// MUDA A COR DA QUINTA BANDA
bandFive?.addEventListener('click', () => {
    countFive = (countFive + 1) % colors.length; // Incrementa e reseta
    changeAndCalculate(bandFive, countFive);
});
