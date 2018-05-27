import { LitElement, html } from "@polymer/lit-element";
import { connect } from "pwa-helpers/connect-mixin.js";
import { installRouter } from "pwa-helpers/router.js";
import { store } from "../store.js";
import { navigate } from "../actions/app.js";

class App extends connect(store)(LitElement) {
  _render({ appTitle, _page }) {
    return html`
    <style>
    :host{
      display: block;
    }
    </style>
    <header>
      <h1>${appTitle}</h1>
    </header>
    <main class="main-content">
      <e91-office class="page" active?="${_page === "e91-office"}"></e91-office>
      <e91-404 class="page" active?="${_page === "e91-404"}"></e91-404>
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

window.customElements.define("e91-app", App);
