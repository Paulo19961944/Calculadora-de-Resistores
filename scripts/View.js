// view.js
const ResistorView = {
    changeColor: (band, count) => {
        band.style.background = colors[count];
    },

    displayResistance: (value, tolerance) => {
        let displayValue = value;
        let unit = 'Ω';

        // Formatação correta para as unidades
        if (value >= 1e6) {
            displayValue = (value / 1e6).toFixed(2);
            unit = 'MΩ';
        } else if (value >= 1e3) {
            displayValue = (value / 1e3).toFixed(2);
            unit = 'kΩ';
        }

        const resultElement = document.querySelector('#result');
        if (resultElement) {
            resultElement.textContent = `Resistência: ${displayValue}${unit}${tolerance}`.trim();
        }
    }
};
