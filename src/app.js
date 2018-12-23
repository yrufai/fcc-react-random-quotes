import React from "react";
import ReactDOM from "react-dom";
import AppRouter from "./routers/AppRouter";
import Home from "./components/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/style.scss";
import { library } from '@fortawesome/fontawesome-svg-core'
import {faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons'
library.add(fab, faQuoteLeft);


ReactDOM.render(<Home />, document.getElementById("app")); 