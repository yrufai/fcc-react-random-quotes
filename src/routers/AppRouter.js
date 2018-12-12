import React from "react";
import { BrowserRouter, Route, Switch} from "react-router-dom";
import Home from "../components/Home";
import About from "../components/About";
import NotFoundPage from "../components/NotFoundPage";
import Header from "../components/Header";

const AppRouter = ()=> (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={Home} exact={true} />
                <Route path="/about" component={About} />
                <Route  component={NotFoundPage} />
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;
