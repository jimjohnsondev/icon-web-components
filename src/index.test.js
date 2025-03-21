import { Icon } from './Icon.js';
import { defineCustomIcon } from './index.js';

class IconBell extends Icon {
  constructor() {
    super(`
      <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5.464V3.099m0 2.365a5.338 5.338 0 0 1 5.133 5.368v1.8c0 2.386 1.867 2.982 1.867 4.175C19 17.4 19 18 18.462 18H5.538C5 18 5 17.4 5 16.807c0-1.193 1.867-1.789 1.867-4.175v-1.8A5.338 5.338 0 0 1 12 5.464ZM6 5 5 4M4 9H3m15-4 1-1m1 5h1M8.54 18a3.48 3.48 0 0 0 6.92 0H8.54Z"/>
      </svg>
    `);
  }
}

const assert = (property, value) => {
  if (property !== value) {
    throw new Error(`Assertion Failed: ${property}: ${value}`);
  }
};

const pass = (id) => {
  const el = document.querySelector(id);
  el.textContent = 'Pass';
  el.setAttribute('style', 'color: green;');
};

const fail = (id) => {
  const el = document.querySelector(id);
  el.textContent = 'Fail';
  el.setAttribute('style', 'color: red;');
};

const testRendering = () => {
  const iconSvg = document
    .querySelector('#render')
    .shadowRoot.querySelector('svg');
  try {
    assert(iconSvg.getAttribute('width'), '24');
    assert(iconSvg.getAttribute('height'), '24');
    pass('#render-output');
  } catch (error) {
    fail('#render-output');
  }
};

const testProperties = () => {
  const iconSvg = document
    .querySelector('#properties')
    .shadowRoot.querySelector('svg');
  try {
    assert(iconSvg.getAttribute('width'), '32px');
    assert(iconSvg.getAttribute('height'), '32px');
    assert(iconSvg.getAttribute('stroke'), 'none');
    assert(iconSvg.getAttribute('fill'), '#000');
    pass('#properties-output');
  } catch (error) {
    fail('#properties-output');
  }
};

const testClass = () => {
  const iconSvg = document
    .querySelector('#class')
    .shadowRoot.querySelector('svg');
  try {
    assert(iconSvg.getAttribute('class'), 'icon');
    pass('#class-output');
  } catch (error) {
    fail('#class-output');
  }
};

const testJs = () => {
  const icon = document.querySelector('#js');
  icon.setAttribute('width', '16px');
  icon.setAttribute('height', '16px');

  const iconSvg = icon.shadowRoot.querySelector('svg');
  try {
    assert(iconSvg.getAttribute('width'), '16px');
    assert(iconSvg.getAttribute('height'), '16px');
    pass('#js-output');
  } catch (error) {
    fail('#js-output');
  }
};

const testCustomIcon = () => {
  defineCustomIcon('icon-custom', IconBell);
  const icon = document.querySelector('#custom');
  const iconSvg = icon.shadowRoot.querySelector('svg');
  try {
    assert(iconSvg.getAttribute('width'), '24');
    assert(iconSvg.getAttribute('height'), '24');
    pass('#custom-output');
  } catch (error) {
    fail('#custom-output');
  }
};

const runTests = () => {
  testRendering();
  testProperties();
  testClass();
  testJs();
  testCustomIcon();
};

window.onload = runTests;
