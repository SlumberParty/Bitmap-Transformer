const BitmapHeader = require('./bitmap-header');
const PixelReader = require('./pixel-reader');

class BitmapTransformer {
  constructor(buffer) {
    this.buffer = buffer;
    this.header = new BitmapHeader(buffer);
  }

  transform(fn, callback) {
    const pr = new PixelReader({ bitsPerPixel: this.header.bitsPerPixel });
    pr.on('color', ({ offset, ...color }) => {
      const { r, g, b } = fn(color);
      this.buffer.writeUInt8(r, this.header.pixelOffset + offset);
      this.buffer.writeUInt8(g, this.header.pixelOffset + offset + 1);
      this.buffer.writeUInt8(b, this.header.pixelOffset + offset + 2);
    });

    pr.on('end', () => {
      callback();
    });

    const pixels = this.buffer.slice(this.header.pixelOffset);
    pr.read(pixels);
  }
}

module.exports = BitmapTransformer;