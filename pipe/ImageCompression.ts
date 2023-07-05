import fs from 'fs/promises';
import sharp from "sharp"

async function listDir(path) {
  try {
    return await fs.readdir(path)
  } catch (err) {
    console.error('Error occurred while reading directory:', err)
  }
}

const directoryPath = __dirname;
let files = await listDir(directoryPath)
const onlyImages = files.filter(file => file.split(".").pop() === "jpg")

if(onlyImages.length === 0) process.exit();

const promises = [];

onlyImages.forEach(file => {
  const fileName = directoryPath + "/" + file.split(".")[0];
  const sharpStream = sharp(`${directoryPath}/${file}`);

  promises.push(
    sharpStream
      .resize(400)
      .png({ quality: 80 })
      .toFile(fileName + '.png', function (err) {
        console.error(err)
      }))

  promises.push(
    sharpStream
      .resize(400)
      .webp()
      .toFile(fileName + '.webp', function (err) {
        console.error(err)
      })
  )
  promises.push(
    sharpStream
      .resize(400)
      .avif()
      .toFile(fileName + '.avif', function (err) {
        console.error(err)
      })
  )
});

Promise.all(promises)
  .then(res => { console.log("Done!", res); })
  .catch(err => {
    console.error("Error processing files, let's clean it up", err);
  });