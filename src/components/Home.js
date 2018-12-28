import React from "react";
import { random } from "lodash";
import { Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faQuoteLeft, faQuoteRight } from "@fortawesome/free-solid-svg-icons";
import { CSSTransition } from "react-transition-group";
import { FacebookShareButton } from "react-share";

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loaded: false,
            selectedQuotesIndex: null,
            quotes: [],
            colors: ["#E52B50", "#FFBF00", "#9966CC", "#FBCEB1", "#89CFF0", "#0095B6", "#800020", "#DE3163", "#007BA7", "#F88379", "#50C878", "#29AB87", "#B57EDC", "#003153", "#EE82EE"]
        };
        this.next = this.next.bind(this);
        this.selectQuotesIndex = this.selectQuotesIndex.bind(this);
        this.CSSTransitions = this.CSSTransitions.bind(this);
    }
   
    // moves to display next quotes 

    componentDidMount() {
        fetch("https://gist.githubusercontent.com/natebass/b0a548425a73bdf8ea5c618149fe1fce/raw/f4231cd5961f026264bb6bb3a6c41671b044f1f4/quotes.json")
            .then(data => data.json())
            .then(quotes => this.setState({ quotes }, this.next))
            .catch(error => console.log("something is wrong", error))
    }
    CSSTransitions() {
        return this.setState({
            loaded: !this.state.loaded
        });
    }
    next() {
        const { colors } = this.state
        const random = colors[Math.floor(Math.random() * colors.length)]
        document.body.style.backgroundColor = random;
        document.body.style.color = random;
        let battons = document.querySelectorAll("Button");
        battons.forEach((item) => {
            item.style.backgroundColor = random;
        });
        this.setState({
            selectedQuotesIndex: this.selectQuotesIndex()
        });
        this.CSSTransitions();
    }
    selectQuotesIndex() {
        if (this.state.quotes.length) {
            return random(0, this.state.quotes.length - 1);
        }
        return undefined;
    }
    get selectedQuote() {
        if (!this.state.quotes.length || !Number.isInteger(this.state.selectedQuotesIndex)) {
            return
        }
        return this.state.quotes[this.state.selectedQuotesIndex];
    }

    render() {
       let tweet = <p>{this.selectedQuote ? this.selectedQuote.quote : " "}</p>
       let tweetLink = "https://twitter.com/intent/tweet?text="
        return (
            <div>
                <div id="wrapper">
                    <div id="quotes-box">
                        <CSSTransition
                            in={this.state.loaded}
                            appear={true}
                            timeout={600}
                            classNames="fade"
                        >
                            <div className="fbShareContent">
                                <div className="quote-text" ><FontAwesomeIcon icon={faQuoteLeft} size="lg" />{this.selectedQuote ? " " + this.selectedQuote.quote + " " : ""}<FontAwesomeIcon icon={faQuoteRight} size="lg" /></div>
                                <div className="quote-author" >--{this.selectedQuote ? this.selectedQuote.author : ""}</div>
                            </div>
                        </CSSTransition>
                        <Button className="btn btn-lg float-right " onClick={this.next}>New Quote</Button>
                        <Button target="_blank" to={tweetLink.concat(tweet)} className="btn btn-lg float-left "  ><FontAwesomeIcon icon={faTwitter} />{"  "} </Button>
                        <FacebookShareButton 
                        url="http://fcc-react-random-quotes.herokuapp.com" 
                        quote={"Quotes"} >
                                <Button className="btn btn-lg float-left" ><FontAwesomeIcon icon={faFacebook} />{"  "} </Button>
                        </FacebookShareButton>
                    </div>
                    <div className="footer"> by <a href="https://github.com/yrufai/fcc-react-random-quotes">Yakubu Ahmed El-rufai</a></div>
                </div>
            </div>
        )
    }
}

export default Home;