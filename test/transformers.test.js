const invert = require('../lib/invert-transformer');
const grayscale = require('../lib/greyscale-transformer');
const sepia = require('../lib/sepia-transformer.js');

describe('transformers', () => {

  it('invert', () => {
    const transformed = invert({
      r: 34,
      g: 100,
      b: 205
    });

    expect(transformed).toEqual({
      r: 221,
      g: 155,
      b: 50
    });
  });

  it('grayscale', () => {
    const transformed = grayscale({
      r: 34,
      g: 100,
      b: 205
    });

    expect(transformed).toEqual({
      r: 113,
      g: 113,
      b: 113
    });
  });

  it('sepia', () => {
    const transformed = sepia({
      r: 34,
      g: 100,
      b: 205
    });

    expect(transformed).toEqual({
      r: 129.007,
      g: 114.906,
      b: 89.50300000000001
    });
  });
});
