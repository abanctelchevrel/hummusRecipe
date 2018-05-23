const path = require('path');
const HummusRecipeForm = require('../lib');

describe('Zone', () => {
    const taskAP = 'Fill text zone';
    it(taskAP, (done) => {
        const src = path.join(__dirname, 'materials/test-P-0.pdf')
        const output = path.join(__dirname, `output/Zone - Fill text zone.pdf`);
        const recipe = new HummusRecipeForm(src, output);

        // const pages = recipe.metadata.pages;
        recipe
            .editPage(1)
            .zone('text', 'État Civil/Nom', 'BANCTEL', {
              top: 85,
              left: 184,
              width: 11,
              height: 14,
              comb: true,
              combCells: 18
            })
            // .text('WATERMARK', 'center', 'center', {
            //     bold: true,
            //     size: 60,
            //     color: '#0000FF',
            //     align: 'center center',
            //     opacity: 0.3
            // })
            .endPage()
        recipe.endPDF(done);
    });
});


