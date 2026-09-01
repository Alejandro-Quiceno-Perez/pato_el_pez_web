const fs = require('node:fs');
const path = require('node:path');

const distDirectory = path.resolve('dist');
fs.copyFileSync(
  path.join(distDirectory, 'index.html'),
  path.join(distDirectory, '404.html'),
);