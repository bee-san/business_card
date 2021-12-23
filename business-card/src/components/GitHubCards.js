import Card from './Card'
import data from "../Data/Github"
import "../css/githubProjects.css"

export default function GitHubCards(props){
    const cards = data.map(item => {
        return (
            <Card
                key={item.id}
                item={item}
            />
        )
    })
    return (
        <div className="githubProjects">
            <h2>Things I Invented</h2>
            <div className="CardsList">
            {cards}
            </div>
        </div>
    )
}