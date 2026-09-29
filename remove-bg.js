const { Jimp, rgbaToInt } = require('jimp');
const fs = require('fs');

async function processImage(filename) {
  try {
    const image = await Jimp.read('public/' + filename);
    
    // Convert white background to transparent
    image.scan(0, 0, image.bitmap.width, image.bitmap.height, function(x, y, idx) {
      const red = this.bitmap.data[idx + 0];
      const green = this.bitmap.data[idx + 1];
      const blue = this.bitmap.data[idx + 2];
      
      // If the pixel is very close to white
      if (red > 245 && green > 245 && blue > 245) {
        this.bitmap.data[idx + 3] = 0; // alpha to 0
      }
    });

    const newFilename = filename.replace('.jpg', '.png');
    await image.write('public/' + newFilename);
    console.log(`Processed ${filename} -> ${newFilename}`);
  } catch (error) {
    console.error(`Error processing ${filename}:`, error);
  }
}

async function main() {
  const files = [
    'Cone (1).jpg',
    'Cone (2).jpg',
    'Ellipse 7.jpg',
    'Frame.jpg',
    'Frame (1).jpg',
    'Image (1).jpg',
    'Mask Group.jpg'
  ];

  for (const file of files) {
    if (fs.existsSync('public/' + file)) {
      await processImage(file);
    }
  }
}

main();
