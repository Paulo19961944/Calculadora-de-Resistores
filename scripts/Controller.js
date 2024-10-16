// controller.js
const ResistorController = {
    counts: [0, 0, 0, -1, -1], // Contadores para as bandas (inicializando os índices de tolerância como -1)

    init: () => {
        const bands = Array.from(document.querySelectorAll('.band-1, .band-2, .band-3, .band-4, .band-5'));
        bands.forEach((band, index) => {
            band.addEventListener('click', () => {
                ResistorController.changeBand(index);
            });
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
