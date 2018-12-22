import React from "react";
import { random } from "lodash";
import { Button } from 'reactstrap';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedQuotesIndex: null,
            textColor: [],
            quotes: [],
            colors: ["red", "lightcoral", "lightcyan", "lime", "fern", "yellow", "blue", "green", "purple", "pink", "mediumturquoise", "palegreen"],
        };
        this.next = this.next.bind(this);
        this.selectQuotesIndex = this.selectQuotesIndex.bind(this);
    }
    // moves to display next quotes 
    next() {
        const { colors } = this.state
        const random = colors[Math.floor(Math.random() * colors.length)]
        document.body.style.backgroundColor = random;
        document.body.style.color=random;
        let battons = document.querySelectorAll("Button");
        battons.forEach((item)=>{
            item.style.backgroundColor=random;
        });
    }
    componentDidMount() {
        fetch("https://gist.githubusercontent.com/natebass/b0a548425a73bdf8ea5c618149fe1fce/raw/f4231cd5961f026264bb6bb3a6c41671b044f1f4/quotes.json")
            .then(data => data.json())
            .then(quotes => this.setState({ quotes }, () => {
                this.setState({ selectedQuotesIndex: this.selectQuotesIndex() })
            }))
            .catch(error => console.log("something is wrong", error))
    }

    get selectedQuote() {
        if (!this.state.quotes.length || !Number.isInteger(this.state.selectedQuotesIndex)) {
            return
        }
        return this.state.quotes[this.state.selectedQuotesIndex];
    }

    selectQuotesIndex() {
        if (this.state.quotes.length) {
            return random(0, this.state.quotes.length - 1);
        }
        return undefined;
    }
   
    render() {
        return (
            <div>
                <div id="wrapper">
                    <div id="quotes-box">
                        <div className="quote-text" >{this.selectedQuote ? this.selectedQuote.quote : ""}</div>
                        <div className="quote-author" >{this.selectedQuote ? this.selectedQuote.author : ""}</div>
                        <Button className="btn btn-success btn-lg float-right" onClick={this.next}>Next</Button>
                        <Button className="btn btn-success btn-lg float-left" >Github</Button>
                    </div>
                    <div className="footer"> by YAKUBU AHMED EL-RUFAI</div>
                </div>
            </div>
        )
    }
}

export default Home;