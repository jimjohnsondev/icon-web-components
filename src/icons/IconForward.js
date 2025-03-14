export class IconForward extends HTMLElement {
  static observedAttributes = ["stroke", "fill", "width", "height", "class"];

  #svgEl;

  constructor() {
    super();
  }

  connectedCallback() {
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
  <path d="M5.027 10.9a8.729 8.729 0 0 1 6.422-3.62v-1.2A2.061 2.061 0 0 1 12.61 4.2a1.986 1.986 0 0 1 2.104.23l5.491 4.308a2.11 2.11 0 0 1 .588 2.566 2.109 2.109 0 0 1-.588.734l-5.489 4.308a1.983 1.983 0 0 1-2.104.228 2.065 2.065 0 0 1-1.16-1.876v-.942c-5.33 1.284-6.212 5.251-6.25 5.441a1 1 0 0 1-.923.806h-.06a1.003 1.003 0 0 1-.955-.7A10.221 10.221 0 0 1 5.027 10.9Z"/>
</svg>
`;

    const shadow = this.attachShadow({ mode: "open" });
    shadow.innerHTML = svg;
    this.#svgEl = this.shadowRoot.querySelector("svg");

    Forward.observedAttributes.forEach((key) =>
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
    Forward.observedAttributes
      .filter((key) => key !== "class")
      .forEach((key) => this.#svgEl.setAttribute(key, undefined));
  }
}
