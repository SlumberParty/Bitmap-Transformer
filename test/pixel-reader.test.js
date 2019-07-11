const PixelReader = require('../lib/pixel-reader');

describe('Pixel Reader', () => {

  it('reads pixel from buffer', done => {
    const reader = new PixelReader({ bitsPerPixel: 24 });

    const colors = [];

    reader.on('color', color => {
      colors.push(color);
    });
    // A "color" object should look like:
    // {
    //     offset: <offset from the start of buffer passed to PixelReader>,
    //     r: <red color value>,
    //     g: <green color value>,
    //     b: <blue color value>,
    // }

    reader.on('end', () => {
      // write deepEqual assertion for colors versus the
      // expect().toEqual()
      // expected rgb color objects
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

    // Create a buffer with known data for your colors
    // [FF, 00, 00, 00, FF, 00, 00, 00, FF]
    const buffer = Buffer.alloc(9); // for three pixels

    // write a red pixel to buffer
    buffer.writeUInt8(0xFF, 0);
    buffer.writeUInt8(0x00, 1);
    buffer.writeUInt8(0x00, 2);

    // write a green pixel
    buffer.writeUInt8(0x00, 3);
    buffer.writeUInt8(0xFF, 4);
    buffer.writeUInt8(0x00, 5);

    // write a blue pixel
    buffer.writeUInt8(0x00, 6);
    buffer.writeUInt8(0x00, 7);
    buffer.writeUInt8(0xFF, 8);

    reader.read(buffer);
  });

});
