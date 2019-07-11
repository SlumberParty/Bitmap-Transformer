module.exports = ({ r, g, b }) => {
  const red = (r * 0.393) + (g * 0.769) + (b * 0.189);
  const green = (r * 0.349) + (g * 0.686) + (b * 0.168);
  const blue = (r * 0.272) + (g * 0.534) + (b * 0.131);
  return {
    r: red <= 255 ? red : 255,
    g: green <= 255 ? green : 255,
    b: blue <= 255 ? blue : 255
  };
};