import React from "react";

class Home extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            quotes : ["red", "yellow", "blue","green","purple", "pink"],
            colors : ["red", "yellow", "blue","green","purple", "pink"]
        };
        this.nextQuote = this.nextQuote.bind(this); 
        this.getColors = this.getColors.bind(this);
    }
    getColors(){
        const randomColors = this.state.colors[Math.floor(Math.random()* this.state.colors.length)]
        return randomColors;
    }
    // moves to display next quotes 
    nextQuote(){  
        const random = this.state.quotes[Math.floor(Math.random() * this.state.quotes.length)]

    }
    render(){
        return (
            <div>
                <p></p>
                <button onClick={this.random}>New Quotes</button>
            </div>
        )
    }
}

export default Home;