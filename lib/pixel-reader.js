const EventEmitter = require('events');

class PixelReader extends EventEmitter {
  constructor(options) {
    super();
    this.bitsPerPixel = options.bitsPerPixel;
    this.bytesPerPixel = this.bitsPerPixel / 8;
  }

  read(buffer) {
    for(let offset = 0; offset < buffer.length; offset += this.bytesPerPixel) {
      const r = buffer[offset];
      const g = buffer[offset + 1];
      const b = buffer[offset + 2];

      this.emit('color', {
        offset,
        r,
        g,
        b
      });
    }

    this.emit('end');
  }
}

module.exports = PixelReader;