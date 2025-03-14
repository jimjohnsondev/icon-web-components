export class IconCaretLeft extends HTMLElement {
  static observedAttributes = ["stroke", "fill", "width", "height", "class"];

  #svgEl;

  constructor() {
    super();
  }

  connectedCallback() {
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
  <path fill-rule="evenodd" d="M13.729 5.575c1.304-1.074 3.27-.146 3.27 1.544v9.762c0 1.69-1.966 2.618-3.27 1.544l-5.927-4.881a2 2 0 0 1 0-3.088l5.927-4.88Z" clip-rule="evenodd"/>
</svg>
`;

    const shadow = this.attachShadow({ mode: "open" });
    shadow.innerHTML = svg;
    this.#svgEl = this.shadowRoot.querySelector("svg");

    CaretLeft.observedAttributes.forEach((key) =>
      this.#setSvgAttribute(key, this.getAttribute(key)),
    );
    if (this.getAttribute("class")) {
      this.#clearAttributesForStyling();
    }
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === "class") {
      this.#clearAttributesForStyling();
    }
    this.setSvgAttribute(name, newValue);
  }

  #setSvgAttribute(key, value) {
    if (!this.#svgEl) return;
    if (!value && this.#svgEl.getAttribute(key)) return;
    this.#svgEl.setAttribute(key, value);
  }

  #clearAttributesForStyling() {
    CaretLeft.observedAttributes
      .filter((key) => key !== "class")
      .forEach((key) => this.#svgEl.setAttribute(key, undefined));
  }
}
