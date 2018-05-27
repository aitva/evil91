import { LitElement, html } from "@polymer/lit-element";

class Office extends LitElement {
  _render() {
    return html`
    <style>
      :host {
        display: block;
      }
      .walls {
        fill: white
      }
    </style>
    Hi from a component!
    <object type="image/svg+xml" data="images/scenes/evil-room.svg" class="room">
    </object>
    `;
  }
  constructor() {
    super();
  }
}

window.customElements.define("e91-office", Office);
