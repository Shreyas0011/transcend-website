const sharp = require('sharp');
const path = require('path');
const dir = 'src/assets/leadership';

const imgs = [
  { src: 'prasanna_new',      dst: 'prasanna',      top: 8,  left: 22, bottom: 55, right: 22 },
  { src: 'ravikiran_new',     dst: 'ravikiran',     top: 8,  left: 22, bottom: 55, right: 22 },
  { src: 'akshay_leader_new', dst: 'akshay_leader', top: 8,  left: 14, bottom: 45, right: 14 },
  { src: 'agnel_new',         dst: 'agnel',         top: 8,  left: 22, bottom: 55, right: 22 },
];

async function run() {
  for (const img of imgs) {
    const srcPath = path.join(dir, img.src + '.png');
    const dstPath = path.join(dir, img.dst + '.png');
    const m = await sharp(srcPath).metadata();
    const w = m.width  - img.left - img.right;
    const h = m.height - img.top  - img.bottom;
    console.log(`${img.src}: ${m.width}x${m.height} → extract ${w}x${h}`);
    await sharp(srcPath)
      .extract({ left: img.left, top: img.top, width: w, height: h })
      .resize(400, 480)
      .toFile(dstPath);
    console.log(`saved → ${img.dst}.png`);
  }
}

run().catch(console.error);
