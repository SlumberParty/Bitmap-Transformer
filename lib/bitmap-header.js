const {
  PIXEL_OFFSET,
  BITS_PER_PIXEL_OFFSET,
  FILE_SIZE_OFFSET
} = require('./bitmap.constants');

class BitmapHeader {
  constructor(buffer) {
    this.buffer = buffer;

    this.pixelOffset = buffer.readUInt32LE(PIXEL_OFFSET);
    this.bitsPerPixel = buffer.readUInt16LE(BITS_PER_PIXEL_OFFSET);
    this.fileSize = buffer.readUInt32LE(FILE_SIZE_OFFSET);
  }
}

module.exports = BitmapHeader;
