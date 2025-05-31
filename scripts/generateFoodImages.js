const fs = require('fs');
const path = require('path');

const foodDir = path.join(__dirname, '../public/images/food');
const output = path.join(__dirname, '../src/foodImages.json');

const exts = ['.jpg', '.jpeg', '.png', '.webp', '.gif'];

fs.readdir(foodDir, (err, files) => {
  if (err) throw err;
  const images = files.filter(f => exts.includes(path.extname(f).toLowerCase()))
    .map(f => `images/food/${f}`);
  fs.writeFileSync(output, JSON.stringify(images, null, 2));
  console.log(`Wrote ${images.length} images to foodImages.json`);
}); 