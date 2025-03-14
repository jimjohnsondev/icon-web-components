export class IconReply extends HTMLElement {
  static observedAttributes = ["stroke", "fill", "width", "height", "class"];

  #svgEl;

  constructor() {
    super();
  }

  connectedCallback() {
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
  <path d="M14.502 7.046h-2.5v-.928a2.122 2.122 0 0 0-1.199-1.954 1.827 1.827 0 0 0-1.984.311L3.71 8.965a2.2 2.2 0 0 0 0 3.24L8.82 16.7a1.829 1.829 0 0 0 1.985.31 2.121 2.121 0 0 0 1.199-1.959v-.928h1a2.025 2.025 0 0 1 1.999 2.047V19a1 1 0 0 0 1.275.961 6.59 6.59 0 0 0 4.662-7.22 6.593 6.593 0 0 0-6.437-5.695Z"/>
</svg>
`;

    const shadow = this.attachShadow({ mode: "open" });
    shadow.innerHTML = svg;
    this.#svgEl = this.shadowRoot.querySelector("svg");

    Reply.observedAttributes.forEach((key) =>
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
    Reply.observedAttributes
      .filter((key) => key !== "class")
      .forEach((key) => this.#svgEl.setAttribute(key, undefined));
  }
}
