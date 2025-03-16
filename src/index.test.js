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

const runTests = () => {
  testRendering();
  testProperties();
  testClass();
  testJs();
};

window.onload = runTests;
