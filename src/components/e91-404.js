import { LitElement, html } from "@polymer/lit-element";

class NotFound extends LitElement {
  _render() {
    return html`
    Huh... Not found.
    `;
  }
  constructor() {
    super();
  }
}

window.customElements.define("e91-404", NotFound);
