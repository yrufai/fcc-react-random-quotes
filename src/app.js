import React from "react";
import ReactDOM from "react-dom";
import AppRouter from "./routers/AppRouter";
import Home from "./components/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/style.scss";


ReactDOM.render(<Home />, document.getElementById("app")); 