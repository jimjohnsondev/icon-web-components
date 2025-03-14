export class IconCaretDown extends HTMLElement {
  static observedAttributes = ["stroke", "fill", "width", "height", "class"];

  #svgEl;

  constructor() {
    super();
  }

  connectedCallback() {
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
  <path fill-rule="evenodd" d="M18.425 10.271C19.499 8.967 18.57 7 16.88 7H7.12c-1.69 0-2.618 1.967-1.544 3.271l4.881 5.927a2 2 0 0 0 3.088 0l4.88-5.927Z" clip-rule="evenodd"/>
</svg>
`;

    const shadow = this.attachShadow({ mode: "open" });
    shadow.innerHTML = svg;
    this.#svgEl = this.shadowRoot.querySelector("svg");

    CaretDown.observedAttributes.forEach((key) =>
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
    CaretDown.observedAttributes
      .filter((key) => key !== "class")
      .forEach((key) => this.#svgEl.setAttribute(key, undefined));
  }
}
