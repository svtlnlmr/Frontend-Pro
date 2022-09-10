import React from "react";
import Image from "./Image";

class HelloPage extends React.Component {
    render() {
        return (
            <div className="Hello-Page">
                <Image/>
                <div>{this.props.text}</div>
                <div>Time now: {this.props.date.toLocaleTimeString()}</div>
            </div>
        );
    }
}
export default HelloPage;