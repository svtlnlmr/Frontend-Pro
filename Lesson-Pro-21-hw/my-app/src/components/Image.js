import React from "react";
import logo from "../imagination.jpg";

class Image extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            src: logo,
            alt: 'imagination'
        }
        this.showUrlDetail = this.showUrlDetail.bind(this);
    };

    showUrlDetail() {
        return <img className="Image" src={this.state.src} alt={this.state.alt}/>
    }

    render() {
        return this.showUrlDetail();
    }
}

export default Image