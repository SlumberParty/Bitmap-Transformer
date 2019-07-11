const transformer = ({ r, g, b }) => ({
  r: 255 - r,
  g: 255 - g,
  b: 255 - b
});

module.exports = transformer;