import { LitElement, html } from "@polymer/lit-element";
import { connect } from "pwa-helpers/connect-mixin.js";
import { installRouter } from "pwa-helpers/router.js";
import { store } from "../store.js";
import { navigate } from "../actions/app.js";

class EvilApp extends connect(store)(LitElement) {
  _render({ appTitle, _page }) {
    return html`
    <style>
    :host{
      display: block;
    }
    </style>
    <main class="main-content">
      Huh. Is it a web app already?
    </main>
    `;
  }
  constructor() {
    super();
  }
  static get properties() {
    return {
      appTitle: String,
      _page: String
    };
  }
  _firstRendered() {
    installRouter(location =>
      store.dispatch(navigate(window.decodeURIComponent(location.pathname)))
    );
  }
  _stateChanged(state) {
    this._page = state.app.page;
  }
}

window.customElements.define("evil-app", EvilApp);
