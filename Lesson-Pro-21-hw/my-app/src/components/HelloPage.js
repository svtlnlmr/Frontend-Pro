import React from "react";
import Image from "./Image";
import { Clock } from "./Clock";

class HelloPage extends React.Component {
    render() {
        return (
            <div className="Hello-Page">
                <Image />
                <h2>{this.props.text}</h2>
                <Clock />
            </div>
        );
    }
}
export default HelloPage;