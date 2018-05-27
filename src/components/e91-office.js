import { LitElement, html } from "@polymer/lit-element";

class EvilOffice extends LitElement {
  _render() {
    return html`
    Hi from a component!
    `;
  }
  constructor() {
    super();
  }
}
