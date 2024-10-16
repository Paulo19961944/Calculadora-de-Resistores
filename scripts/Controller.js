// controller.js
const ResistorController = {
    counts: [0, 0, 0, 0, 0], // Contadores para as bandas

    init: () => {
        // Obter as referências às bandas
        const bandOne = document.querySelector('.band-1');
        const bandTwo = document.querySelector('.band-2');
        const bandThree = document.querySelector('.band-3');
        const bandFour = document.querySelector('.band-4');
        const bandFive = document.querySelector('.band-5');
        const bands = [bandOne, bandTwo, bandThree, bandFour, bandFive];

        // Adicione os ouvintes de eventos
        bands.forEach((band, index) => {
            if (band) {
                band.addEventListener('click', () => {
                    ResistorController.changeBand(index);
                });
            }
        });
    },

    changeBand: (index) => {
        // Incrementa o contador da banda clicada
        ResistorController.counts[index] = (ResistorController.counts[index] + 1) % colors.length;

        // Atualiza a cor e calcula a resistência
        ResistorView.changeColor(document.querySelector(`.band-${index + 1}`), ResistorController.counts[index]);
        const value = ResistorModel.calculateResistance(ResistorController.counts);
        const tolerance = ResistorModel.calculateTolerance(ResistorController.counts);
        ResistorView.displayResistance(value, tolerance);
    }
};
