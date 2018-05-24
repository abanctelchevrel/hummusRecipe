// const hummus = require('hummus');
/**
 * Todo
 * @name zone
 * @function
 * @memberof Recipe
 */
exports.zone = function zone(type, path, value, options) {
  if (type === "text") {
    if (!options.isComb) {
      this.text(value, options.left, options.top, {
        font: "Helvetica",
        color: "000000",
        size: 11,
        textBox: {
          textAlign: "left",
          width: options.width,
          height: options.height,
          style: {}
        }
      });
    } else {
      for (var i = 0; i < options.combCells; i++) {
        const combLeft = options.left + i * options.width / options.combCells;
        const char = value[i] === undefined ? " " : value[i];
        this.text(char, combLeft, options.top, {
          font: "Helvetica",
          color: "000000",
          size: 11,
          textBox: {
            textAlign: "center",
            width: options.width / options.combCells,
            height: options.height,
            style: {}
          }
        });
      }
    }
  } else if (type === "checkbox") {
    this.text('x', options.left, options.top, {
      font: "Helvetica",
      color: "000000",
      size: 11,
      textBox: {
        textAlign: "left",
        width: options.width,
        height: options.height,
        style: {}
      }
    });
  }

  return this;
};
