import React from "react";
import ReactDOM from "react-dom";
import AppRouter from "./routers/AppRouter";
import "./styles/style.scss";


class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            quotes: ["red", "yellow", "blue", "green", "purple", "pink"],
            colors: [],
        };
        this.nextQuote = this.nextQuote.bind(this);
    }
    // moves to display next quotes 
    nextQuote() {
        const random = this.state.quotes[Math.floor(Math.random() * this.state.quotes.length)]
        console.log("receiving ", random);
        this.setState({
            colors: random
        })
    }
    render() {
        return (
            <div style={{backgroundColor: this.state.colors}}>
                <h1>{this.state.colors}</h1>
                <button onClick={this.nextQuote}>New Quotes</button>
            </div>
        )
    }
}

ReactDOM.render(<Home />, document.getElementById("app")); 