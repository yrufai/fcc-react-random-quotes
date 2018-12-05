import React from "react";

const Portfolio = (props) => (
    <div>
        <h2>A thing i have done</h2>
        <p>this is the list of my works.. take a look <b>{props.match.params.id}</b></p>
    </div>
);

export default Portfolio;