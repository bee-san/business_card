import React from "react"
import '../css/Card.css'
import '../images/ciphey.png'


export default function Card(props) {    
    const imageLocation = require(`../images/${props.item.coverImg}`)
    return (
        <div className="card">
            <a href={props.item.link}>
            <div className="card--badge">{props.item.githubStars}</div>
            <img src={imageLocation} className="card--image" alt="img"/>
            <h3 className="card--title">{props.item.title}</h3>
            <p className="card--title">{props.item.description}</p>
            </a>

        </div>
    )
}