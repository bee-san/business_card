import GitHubCard from './GitHubCard'
import data from "../Data/Github"
import "../css/githubProjects.css"

export default function GitHubCards(props){
    const cards = data.map(item => {
        return (
            <GitHubCard
                key={item.id}
                item={item}
            />
        )
    })
    return (
        <div className="githubProjects">
            <h2>Things I Invented</h2>
            <div className="githubProjectsList">
            {cards}
            </div>
        </div>
    )
}