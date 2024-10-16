// model.js
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

const ResistorModel = {
    calculateResistance: (counts) => {
        let value = 0;
        let multiplier = 1;

        // Cálculo para 3 bandas
        if (counts[2] >= 0) {
            value = (counts[0] * 10 + counts[1]) * Math.pow(10, counts[2]);
        }
        // Cálculo para 4 bandas
        else if (counts[3] >= 0) {
            value = (counts[0] * 10 + counts[1]) * Math.pow(10, counts[2]);
        }
        // Cálculo para 5 bandas
        else if (counts[4] >= 0) {
            value = (counts[0] * 100 + counts[1] * 10 + counts[2]) * Math.pow(10, counts[3]);
        }

        return value;
    },

    calculateTolerance: (counts) => {
        if (counts[4] === 10 || counts[3] === 10) {
            return '±10%'; // Prateado
        } else if (counts[4] === 11 || counts[3] === 11) {
            return '±5%'; // Dourado
        }
        return '';
    }
};
