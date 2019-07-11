const PixelReader = require('../lib/pixel-reader');

describe('Pixel Reader', () => {

  it('reads pixel from buffer', done => {
    const reader = new PixelReader({ bitsPerPixel: 24 });

    const colors = [];

    reader.on('color', color => {
      colors.push(color);
    });
    
    reader.on('end', () => {
      expect(colors[0]).toEqual({
        offset: 0,
        r: 0xFF,
        g: 0x00,
        b: 0x00
      });

      expect(colors[1]).toEqual({
        offset: 3,
        r: 0x00,
        g: 0xFF,
        b: 0x00
      });

      expect(colors[2]).toEqual({
        offset: 6,
        r: 0x00,
        g: 0x00,
        b: 0xFF
      });

      done();
    });


    const buffer = Buffer.alloc(9);

    buffer.writeUInt8(0xFF, 0);
    buffer.writeUInt8(0x00, 1);
    buffer.writeUInt8(0x00, 2);

    buffer.writeUInt8(0x00, 3);
    buffer.writeUInt8(0xFF, 4);
    buffer.writeUInt8(0x00, 5);

    buffer.writeUInt8(0x00, 6);
    buffer.writeUInt8(0x00, 7);
    buffer.writeUInt8(0xFF, 8);

    reader.read(buffer);
  });

});
