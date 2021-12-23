import '../css/CommunitiesBuilt.css'
import '../css/Card.css'
import data from '../Data/CommunitiesBuilt'
import Card from './Card'

export default function ThingsWritten(props){
    const Communities = data.map(item => {
        return (
            <Card
                key={item.id}
                item={item}
            />
        )
    })
    return (
        <div className="Communities">
        <h2>Communities I Built</h2>
        <div className="CardsList">
            {Communities}
        </div>
        </div>
    )
}