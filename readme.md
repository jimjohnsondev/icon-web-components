# SVG Icon Web Components

A selection of svg icons for use in plain vanilla JS projects. This project is under heavy development and not yet ready for use.

## Usage

Copy the contents of the `/src` folder to your project.

Import the `defineAllIcons` function and call it in your `window.onload` function.

```js
// loadicons.js
import { defineAllIcons } from 'src/icons.js';

window.onload = () => {
  defineAllIcons();
};
```

Use the icons in your html file.

```html
<!doctype html>
<html lang="en">
  <head>
    <script src="loadicons.js" module defer></script>
  </head>
  <body>
    <icon-share-all></icon-share-all>
  </body>
</html>
```

## Building

To build the icons:
`$ npm run build:icons`

To preview the build:
`$ npm run dev`

## License

MIT. See `license.txt` for details.
