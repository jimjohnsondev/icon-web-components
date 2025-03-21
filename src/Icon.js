export class Icon extends HTMLElement {
  static observedAttributes = ['stroke', 'fill', 'width', 'height', 'class'];

  #svg;
  #svgEl;

  constructor(svg) {
    super();
    this.#svg = svg;
  }

  connectedCallback() {
    const shadow = this.attachShadow({ mode: 'open' });
    shadow.innerHTML = this.#svg;
    this.#svgEl = this.shadowRoot.querySelector('svg');

    Icon.observedAttributes.forEach((key) =>
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
    Icon.observedAttributes
      .filter((key) => key !== 'class')
      .forEach((key) => this.#svgEl.removeAttribute(key));
  }
}
