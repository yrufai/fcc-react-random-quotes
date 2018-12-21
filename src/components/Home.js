import React from "react";
class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            colors: ["red", "yellow", "blue", "green", "purple", "pink"],
        };
        this.next = this.next.bind(this);
    }
    // moves to display next quotes 
    next() {
        const {colors} = this.state
        const random = colors [Math.floor(Math.random() * color.length)]
        document.body.style.backgroundColor = random;
    }
    
    render() {
        return (
            <div>
                <button onClick={this.next}>Next</button>
            </div>
        )
    }
}

export default Home;