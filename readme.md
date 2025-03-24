# SVG Icon Web Components

<img src="https://img.shields.io/badge/version-1.0.1-blue"> <a href="https://opensource.org/license/mit"><img src="https://img.shields.io/badge/license-MIT-blue" alt="Licenese"></a>

A selection of svg icons for use in plain vanilla JS projects. This isn't intended to be an exhaustive collection of icons, but only the most commonly used ones for my personal projects. More may be added as they are needed.

## Usage

Install with NPM

```sh
npm i @jjohnson/icon-web-components
```

Import the icons into your main javascript file

```js
// main.js
import { defineAllIcons } from '@jjohnson/icon-web-components';

window.onload = () => {
  defineAllIcons();
};
```

Use the icons in your html

```html
<!doctype html>
<html lang="en">
  <head>
    <style>
      /* Icons can be styled with css */
      .icon {
        display: block;
        fill: #0f0;
        height: 24px;
        stroke: #000;
        width: 24px;
      }
    </style>
    <script src="main.js" module defer></script>
  </head>
  <body>
    <icon-github class="icon"></icon-github>
  </body>
</html>
```

The icons also support the following attributes:
| Attribute | Unit | Description |
|-----------|---------------------|-----------------------------|
| width | number, px, em, rem | Width of the icon |
| height | number, px, em, rem | Height of the icon |
| stroke | hex, rgba, hsl, none | Color of the icon's outline |
| fill | hex, rgba, hsl, none | Color of the icon's fill |

Example:

```html
<icon-github
  width="32px"
  height="32px"
  stroke="none"
  fill="#800080"
></icon-github>
```

### Extending the Library

To create a custom icon, override the `Icon` base class and pass your svg markup into the constructor's `super` method.

```js
import { Icon } from '@jjohnson/icon-web-components';

class IconCustom extends Icon {
  constructor() {
    super(`
      <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-width="2" d="M8.737 8.737a21.49 21.49 0 0 1 3.308-2.724m0 0c3.063-2.026 5.99-2.641 7.331-1.3 1.827 1.828.026 6.591-4.023 10.64-4.049 4.049-8.812 5.85-10.64 4.023-1.33-1.33-.736-4.218 1.249-7.253m6.083-6.11c-3.063-2.026-5.99-2.641-7.331-1.3-1.827 1.828-.026 6.591 4.023 10.64m3.308-9.34a21.497 21.497 0 0 1 3.308 2.724m2.775 3.386c1.985 3.035 2.579 5.923 1.248 7.253-1.336 1.337-4.245.732-7.295-1.275M14 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"/>
      </svg>
    `);
  }
}
```

Then instantiate it using the `defineCustomIcon` function

```js
import { defineCustomIcon } from `@jjohnson/icon-web-components`;
import { IconCustom } from './IconCustom.js';

defineCustomIcon('icon-custom', IconCustom);
```

The icon becomes available for use in html

```html
<icon-custom></icon-custom>
```

## Available Icons

| Icon                                                 | Custom Element       |
| ---------------------------------------------------- | -------------------- |
| <img src="./src/templates/assets/angle-down.svg" />  | `<icon-angle-down>`  |
| <img src="./src/templates/assets/angle-up.svg" />    | `<icon-angle-up>`    |
| <img src="./src/templates/assets/angle-left.svg" />  | `<icon-angle-left>`  |
| <img src="./src/templates/assets/angle-right.svg" /> | `<icon-angle-right>` |
| <img src="./src/templates/assets/bars.svg" />        | `<icon-bars>`        |
| <img src="./src/templates/assets/close.svg" />       | `<icon-angle-close>` |
| <img src="./src/templates/assets/github.svg" />      | `<icon-github>`      |
| <img src="./src/templates/assets/linkedin.svg" />    | `<icon-linkedin>`    |

## Building the Library

Clone this Github repo and use npm to build the icons:

```sh
npm run build
```

To preview the build and run visual tests:

```sh
npm run dev
```

## License

Free and open source under the MIT license.
See `license.txt` for details.

## Author

This library is written and maintained by [Jim Johnson](https://github.com/jimjohnsondev)

The svg icons are provided by [Flowbite](https://github.com/themesberg/flowbite-icons).
