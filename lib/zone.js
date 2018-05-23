// const hummus = require('hummus');
/**
 * Todo
 * @name zone
 * @function
 * @memberof Recipe
 * @param {string} pdfSrc - The path for the other pdf.
 * @param {number|number[]} pages - The page number or the array of page numbers to be appended.
 */
exports.zone = function zone(type, path, value, options) {
  this
    .text('WATERMARK', 'center', 'center', {
        bold: true,
        size: 60,
        color: '#0000FF',
        align: 'center center',
        opacity: 0.3
    })

  return this;
}
