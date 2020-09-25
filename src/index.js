import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import { Auth0Provider } from "@auth0/auth0-react";
import "./assets/css/global.css";

ReactDOM.render(
  <Auth0Provider
    domain="dev-npy4j9xa.eu.auth0.com"
    clientId="2u516c1kRETOXva30urSe7kcuDf6iBn4"
    redirectUri={window.location.origin}
  >
    <App />
  </Auth0Provider>,
  document.getElementById("root")
);

registerServiceWorker();
serviceWorker.unregister();
