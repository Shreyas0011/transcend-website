const sharp = require('sharp');
const path = require('path');

const SOURCE = 'C:\\Users\\Shreyas\\.gemini\\antigravity\\brain\\455e905f-b2aa-4636-aa5e-2b6993cb02ca\\media__1773774163998.png';
const FACULTY_DIR = 'src/assets/faculty';
const STAFF_DIR = 'src/assets/staff';

const faculty = [
    'kiran_kumar', 'reddy_shekar', 'varsha_v',
    'pratyush', 'shashikala', 'anusha',
    'shivarama', 'soumya', 'amrutha',
    'apoorva', 'madhuri', 'shobha_girish',
    'saikumar_velu', 'shreenidhi', 'akshay_champak',
    'subramanian', 'deepa_venkatesh', 'mukunda'
];

const staff = [
    'vani_rao', 'bharathi_srikanth', 'shravana_kumar',
    'sampath_kumar', 'reshma_belagaje', 'padma_latha',
    'prasad_k', 'roopa_kambam', 'jessy_mathew',
    'padmaja_ravi', 'pankaj_matta', 'niranjan_dg'
];

// Refined Grid settings
const faculty_y_start = 104;
const faculty_y_step = 82; 
const staff_y_start = 661;
const staff_y_step = 82;

const col_xs = [207, 444, 678]; // Adjusted 680 -> 678 to be safe
const size = 64; // Slightly smaller to be safe

async function extract() {
    console.log('Starting extraction...');
    const img = sharp(SOURCE);
    const meta = await img.metadata();
    console.log(`Source image: ${meta.width}x${meta.height}`);

    // Faculty extraction
    for (let row = 0; row < 6; row++) {
        for (let col = 0; col < 3; col++) {
            const index = row * 3 + col;
            const name = faculty[index];
            const left = Math.round(col_xs[col] - size/2);
            const top = Math.round(faculty_y_start + row * faculty_y_step - size/2);
            
            try {
                await sharp(SOURCE)
                    .extract({ left, top, width: size, height: size })
                    .resize(300, 300) // Quality upscale
                    .toFile(path.join(FACULTY_DIR, name + '.png'));
                console.log(`Extracted faculty [${row},${col}]: ${name} at ${left},${top}`);
            } catch (err) {
                console.error(`Failed to extract faculty: ${name} at ${left},${top} - ${err.message}`);
            }
        }
    }

    // Staff extraction
    for (let row = 0; row < 4; row++) {
        for (let col = 0; col < 3; col++) {
            const index = row * 3 + col;
            const name = staff[index];
            const left = Math.round(col_xs[col] - size/2);
            const top = Math.round(staff_y_start + row * staff_y_step - size/2);
            
            try {
                await sharp(SOURCE)
                    .extract({ left, top, width: size, height: size })
                    .resize(300, 300)
                    .toFile(path.join(STAFF_DIR, name + '.png'));
                console.log(`Extracted staff [${row},${col}]: ${name} at ${left},${top}`);
            } catch (err) {
                console.error(`Failed to extract staff: ${name} at ${left},${top} - ${err.message}`);
            }
        }
    }
}

extract().catch(console.error);
