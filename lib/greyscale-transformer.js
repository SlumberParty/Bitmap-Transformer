module.exports = ({ r, g, b }) => {
  const value = (r + g + b) / 3;
  return {
    r: value,
    g: value,
    b: value
  };
};