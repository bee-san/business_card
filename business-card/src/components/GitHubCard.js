import React from "react"
import '../css/GithubCard.css'
import '../images/ciphey.png'

export default function GitHubCard(props) {    
    const imageLocation = require(`../images/${props.item.coverImg}`)
    return (
        <div className="github-card">
            <a href={props.item.link}>
            <div className="github-card--badge">⭐️ {props.item.githubStars} Stars</div>
            <img src={imageLocation} className="card--image" alt="img"/>
            <h3 className="card--title">{props.item.title}</h3>
            <p className="card--title">{props.item.description}</p>
            </a>
        </div>
    )
}