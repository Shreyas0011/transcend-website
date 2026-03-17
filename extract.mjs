import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const IMG_PATH = 'c:/Users/Shreyas/.gemini/antigravity/brain/7eb18fd5-92ff-4392-b243-8ff502ddf724/media__1773688640388.png';
const OUT_DIR = 'C:/Users/Shreyas/OneDrive/Desktop/transcend-website/transcend-website-1/src/assets/staff';

const rows = 4;
const cols = 3;
const cellW = 1005 / cols; // 335
const cellH = 520 / rows;  // 130

const files = [
    'vani_rao.png', 'bharathi_srikanth.png', 'shravana_kumar.png',
    'sampath_kumar.png', 'reshma_belagaje.png', 'padma_latha.png',
    'prasad_k.png', 'roopa_kambam.png', 'jessy_mathew.png',
    'padmaja_ravi.png', 'pankaj_matta.png', 'niranjan_dg.png'
];

async function extract() {
    let index = 0;

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            const file = files[index++];
            
            // X, Y inside the original image
            const top = Math.round(r * cellH);
            const left = Math.round(c * cellW);
            
            // Crop a slightly larger square box
            const boxLeft = Math.round(left + 230 - 35); // x center is ~265. 265 - 60 = 205
            const boxTop = Math.round(top + 65 - 60);    // y center is 65. 65 - 60 = 5
            
            await sharp(IMG_PATH)
                .extract({ left: boxLeft, top: boxTop, width: 120, height: 120 })
                .png()
                .toFile(path.join(OUT_DIR, file));
            
            console.log(`Saved ${file}`);
        }
    }
}

extract().catch(console.error);
