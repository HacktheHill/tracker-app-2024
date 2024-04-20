import {convertTemplateToHTML} from './templateToHTML';
import fs from 'fs';

const templateHTML = convertTemplateToHTML();

fs.writeFileSync('confirmation.html', templateHTML, null);
console.log("Template written.");