// DEFINE O CONTADOR E O QUERY SELECTOR
let $ = document.querySelector.bind(document);
let count = 0;

// DEFINE AS BANDAS DO RESISTOR
const bandOne = $('.band-1');
const bandTwo = $('.band-2');
const bandThree = $('.band-3');
const bandFour = $('.band-4');
const bandFive = $('.band-5');

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

// CONTADOR PARA AS CORES
const countColors = () => {
    count++;
    if (count > colors.length - 1) {
        count = 0;
    }
};

// MUDA A COR
const changeColor = () =>{
    bandOne.style.background = colors[count];
}

// PRIMEIRA BANDA
bandOne.addEventListener('click', () => {
    countColors();
    changeColor();
});

// SEGUNDA BANDA
bandTwo.addEventListener('click', () => {
    countColors();
    changeColor();
});

// TERCEIRA BANDA
bandThree.addEventListener('click', () => {
    countColors();
    changeColor();
});

// QUARTA BANDA
bandFour.addEventListener('click', () => {
    countColors();
    changeColor();
});

// QUINTA BANDA
bandFive.addEventListener('click', () => {
    countColors();
    changeColor();
});
