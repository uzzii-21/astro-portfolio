import fs from 'fs/promises';
import sharp from "sharp"

async function listDir(path: string): Promise<string[]> {
  try {
    return await fs.readdir(path)
  } catch (err) {
    console.error('Error occurred while reading directory:', err)
  }
}

const directoryPath = __dirname;
const files = await listDir(directoryPath)
const onlyImages = files.filter(file => file.split(".").pop() === "jpg")

if(onlyImages.length === 0) {
  console.error("No images were found.");
  process.exit();
}

const promises: Array<sharp.Sharp> = [];
const height: number = 567;

onlyImages.forEach(file => {
  const fileName = directoryPath + "/" + file.split(".")[0];
  const sharpStream = sharp(`${directoryPath}/${file}`);

  promises.push(
    sharpStream
      .resize(height)
      .png({ quality: 80 })
      .toFile(fileName + '.png', function (err) {
        console.error(err);
      }))

  promises.push(
    sharpStream
      .resize(height)
      .webp()
      .toFile(fileName + '.webp', function (err) {
        console.error(err);
      })
  )
  promises.push(
    sharpStream
      .resize(height)
      .avif()
      .toFile(fileName + '.avif', function (err) {
        console.error(err);
      })
  )
});

Promise.all(promises)
  .then(res => { console.log("Done!", res); })
  .catch(err => {
    console.error("Error processing files, let's clean it up", err);
  });