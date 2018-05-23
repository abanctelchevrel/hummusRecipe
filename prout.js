// const HummusRecipe = require('hummus-recipe');
// const pdfDoc = new HummusRecipe('input/form.pdf', 'output.pdf');

// pdfDoc
//     .overlay('input/overlay.pdf')
//     .endPDF();


const HummusRecipeForm = require('./lib');
const pdfDoc = new HummusRecipeForm('input/cerfa_12669_01.pdf', 'output.pdf');
pdfDoc
    // edit 1st page
    .editPage(1)
    .zone('text', 'État Civil/Nom', 'BANCTEL', {
              top: 85,
              left: 184,
              width: 11,
              height: 14,
              comb: true,
              combCells: 18
            })
    .text('2', 85, 184, {
      font: 'Helvetica',
      color: '000000',
      size: 11,
      textBox: {
        textAlign: 'center',
        width: 11,
        height: 14,
        style: {
          // fill: 'FF0000'
        }
      }
    })
    .text('6', 97, 184, {
      font: 'Helvetica',
      color: '000000',
      size: 11,
      textBox: {
        textAlign: 'center',
        width: 11,
        height: 14,
        style: {
          // fill: 'FF0000'
        }
      }
    })
    .text('1', 116, 184, {
      font: 'Helvetica',
      color: '000000',
      size: 11,
      textBox: {
        textAlign: 'center',
        width: 11,
        height: 14,
        style: {
          // fill: 'FF0000'
        }
      }
    })
    .text('2', 128, 184, {
      font: 'Helvetica',
      color: '000000',
      size: 11,
      textBox: {
        textAlign: 'center',
        width: 11,
        height: 14,
        style: {
          // fill: 'FF0000'
        }
      }
    })
    .text('1', 146, 184, {
      font: 'Helvetica',
      color: '000000',
      size: 11,
      textBox: {
        textAlign: 'center',
        width: 11,
        height: 14,
        style: {
          // fill: 'FF0000'
        }
      }
    })
    .text('9', 158, 184, {
      font: 'Helvetica',
      color: '000000',
      size: 11,
      textBox: {
        textAlign: 'center',
        width: 11,
        height: 14,
        style: {
          // fill: 'FF0000'
        }
      }
    })
    .text('8', 170, 184, {
      font: 'Helvetica',
      color: '000000',
      size: 11,
      textBox: {
        textAlign: 'center',
        width: 11,
        height: 14,
        style: {
          // fill: 'FF0000'
        }
      }
    })
    .text('6', 182, 184, {
      font: 'Helvetica',
      color: '000000',
      size: 11,
      textBox: {
        textAlign: 'center',
        width: 11,
        height: 14,
        style: {
          // fill: 'FF0000'
        }
      }
    })
    // .text('Add some texts to an existing pdf file', 63, 104, {
    //   font: 'Courier New',
    //   color: '000000',
    //   // align: 'left center',
    //   textBox: {
    //     // lineHeight: 27,
    //     textAlign: 'left',
    //     width: 502,
    //     height: 13
    //   }
    // })
    // .image('/path/to/image.jpg', {width: 300, keepAspectRatio: true})
    .endPage()
    .endPDF();