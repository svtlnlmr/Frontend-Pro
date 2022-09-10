import './App.css';
import React from 'react';
import ContactCard from "./components/ContactCard";
import HelloPage from "./components/HelloPage";
import IndexPage from "./components/IndexPage";


import {
    BrowserRouter,
    Routes,
    Route,
    Link
} from "react-router-dom";

const card = {
    date: new Date(),
    text: 'Hello! Have a good day!',
};

const contacts = [
    {
        name: 'Jon',
        phone: '+380123456789'
    },
    {
        name: 'Alice',
        phone: '+380123123123'
    },
    {
        name: 'Bob',
        phone: '+380123213543'
    }
]

function App() {
    const click = (index) => {
        if (index === 0) {
            console.log(contacts[0].name, contacts[0].phone)
        } else if (index === 1) {
            console.log(contacts[1].name, contacts[1].phone)
        } else if (index === 2) {
            console.log(contacts[2].name, contacts[2].phone)
        }
    };

    return (
        <div className="App">
            <BrowserRouter>
                <div className="App-nav">
                    <Link className="App-nav text" to="/">Start page</Link>
                    <Link className="App-nav text" to="home">Hello page</Link>
                    <Link className="App-nav text" to="contacts">Contacts </Link>
                </div>
                <Routes>
                    <Route path="/" element={<IndexPage />} />
                    <Route path="home" element={<HelloPage
                        text={card.text}
                        date={card.date}
                    />} />
                    <Route path={"contacts"} element={contacts.map((post, index) =>
                        <ContactCard
                            key={`post -${index}`}
                            name={post.name}
                            phone={post.phone}
                            index={index}
                            click={click}
                        />)}
                    />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;