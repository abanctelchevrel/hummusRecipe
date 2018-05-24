const HummusRecipeForm = require("./lib");
const pdfDoc = new HummusRecipeForm("input/cerfa_12669_01.pdf", "output.pdf");
pdfDoc
  .editPage(1)
  .zone("text", "Email", "a.banctel.chevrel@gmail.com", {
    top: 667,
    left: 179,
    width: 388,
    height: 16,
    isComb: false
  })
  .zone("text", "Nom", "BANCTEL-CHEVREL", {
    top: 103,
    left: 64,
    width: 12*42,
    height: 14,
    isComb: true,
    combCells: 42
  })
  .zone("checkbox", "Masculin", true, {
    top: 171,
    left: 81,
    width: 8,
    height: 8
  })
  .endPage()
  .endPDF();
