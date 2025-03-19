export class IconClose extends HTMLElement {
  static observedAttributes = ['stroke', 'fill', 'width', 'height', 'class'];

  #svgEl;

  constructor() {
    super();
  }

  connectedCallback() {
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18 17.94 6M18 18 6.06 6"/>
</svg>
`;

    const shadow = this.attachShadow({ mode: 'open' });
    shadow.innerHTML = svg;
    this.#svgEl = this.shadowRoot.querySelector('svg');

    IconClose.observedAttributes.forEach((key) =>
      this.#setSvgAttribute(key, this.getAttribute(key)),
    );
    if (this.getAttribute('class')) {
      this.#clearAttributesForStyling();
    }
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'class') {
      this.#clearAttributesForStyling();
    }
    this.#setSvgAttribute(name, newValue);
  }

  #setSvgAttribute(key, value) {
    if (!this.#svgEl) return;
    if (!value && this.#svgEl.getAttribute(key)) return;
    this.#svgEl.setAttribute(key, value);
  }

  #clearAttributesForStyling() {
    if (!this.#svgEl) return;
    IconClose.observedAttributes
      .filter((key) => key !== 'class')
      .forEach((key) => this.#svgEl.removeAttribute(key));
  }
}
