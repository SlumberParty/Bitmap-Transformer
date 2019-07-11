const fs = require('fs');
const BitmapTransformer = require('./lib/bitmap-transformer');
const transform = require('./lib/sepia-transformer');

const fileName = './julia_set.bmp';

const buffer = fs.readFileSync(fileName);

const bitmap = new BitmapTransformer(buffer);

bitmap.transform(transform, err => {
  fs.writeFileSync('./transformed.bmp', bitmap.buffer);
  console.log('done!');
});