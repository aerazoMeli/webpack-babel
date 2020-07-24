import Photos from './photos';
import './index.css';

const photos = new Photos();
console.log('Getting photos...');
photos.getPhotos();


const text = "   Levy   "

console.log(text.trim()); // > "Levy")
console.log(text.trimStart()); // > "Levy   "
console.log(text.trimEnd()); // > "   Levy"


