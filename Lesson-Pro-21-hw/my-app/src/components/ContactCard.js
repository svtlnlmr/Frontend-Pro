import React from "react"

function ContactCard(props) {
    return (
        <div className="Contact-Card Hello-Page" onClick={() => {props.click(props.index)}}>
            <h3 className="Contact-Card-h3">{props.name}</h3>
            <p>phone: {props.phone}</p>
        </div>
    )
}

export default ContactCard;