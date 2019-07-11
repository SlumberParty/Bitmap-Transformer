const fs = require('fs');
const BitmapTransformer = require('../lib/bitmap-transformer');
const invert = require('../lib/invert-transformer');

describe('bitmap file transformer', () => {

  let buffer = null;
  let expectedTransformedBuffer = null;
  beforeEach(done => {
    fs.readFile('./test/test-bitmap.bmp', (err, data) => {
      buffer = data;
      done(err);
    });
  });

  beforeEach(done => {
    fs.readFile('./test/inverted-expected.bmp', (err, data) => {
      expectedTransformedBuffer = data;
      done(err);
    });
  });

  it('test whole transform', done => {
    const bitmap = new BitmapTransformer(buffer);

    bitmap.transform(invert, err => {
      if(err) return done(err);

      expect(bitmap.buffer).toEqual(expectedTransformedBuffer);
      done();
    });

  });
});