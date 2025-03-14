export class IconCaretUp extends HTMLElement {
  static observedAttributes = ["stroke", "fill", "width", "height", "class"];

  #svgEl;

  constructor() {
    super();
  }

  connectedCallback() {
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
  <path fill-rule="evenodd" d="M5.575 13.729C4.501 15.033 5.43 17 7.12 17h9.762c1.69 0 2.618-1.967 1.544-3.271l-4.881-5.927a2 2 0 0 0-3.088 0l-4.88 5.927Z" clip-rule="evenodd"/>
</svg>
`;

    const shadow = this.attachShadow({ mode: "open" });
    shadow.innerHTML = svg;
    this.#svgEl = this.shadowRoot.querySelector("svg");

    CaretUp.observedAttributes.forEach((key) =>
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
    CaretUp.observedAttributes
      .filter((key) => key !== "class")
      .forEach((key) => this.#svgEl.setAttribute(key, undefined));
  }
}
