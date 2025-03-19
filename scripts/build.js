import fs from 'node:fs/promises';
import { Eta } from 'eta';

const stripExtension = (filename) => filename.split('.')?.[0] ?? '';
const toTitleCase = (str) => {
  if (!str) return '';

  return str
    .toLowerCase()
    .split('-')
    .map((word) => `${word.charAt(0).toUpperCase()}${word.slice(1)}`)
    .join('');
};

const svgFiles = await fs.readdir('./src/templates/assets');
const data = svgFiles.map((v) => ({
  name: stripExtension(v),
  svg: `./assets/${v}`,
  className: toTitleCase(stripExtension(v)),
}));

// Build icon classes
const eta = new Eta({ views: './src/templates' });
data.forEach(async ({ name, svg, className }) => {
  const iconRes = await eta.renderAsync('./customElement', {
    name,
    svg,
    className,
  });

  await fs.writeFile(`./src/icons/Icon${className}.js`, iconRes);
});

// Build import library
const importRes = await eta.renderAsync('./icons', { data });
await fs.writeFile(`./src/index.js`, importRes);

// Build html preview
const htmlRes = await eta.renderAsync('./index', { data });
await fs.writeFile(`./index.html`, htmlRes);

console.log(`${data.length} icons built`);
