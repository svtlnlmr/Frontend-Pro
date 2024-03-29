import logo from './imagination.jpg';
import './App.css';
import React from 'react';

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

function formatDate(date) {
    return date.toLocaleDateString();
}

function Card(props) {
    return (
        <div className="Card">
            <Image/>
            <div>{props.text}</div>
            <div>{formatDate(props.date)}</div>
        </div>
    );
}

const card = {
    date: new Date(),
    text: 'Hello! Have a good day!',
};

function App() {
    return (
        <div className="App">
            <Card
                text={card.text}
                date={card.date}
            />
        </div>
    );
}

export default App;



