import '../css/ThingsWritten.css'
import '../css/Card.css'
import data from '../Data/Writing'
import Card from './Card'

export default function ThingsWritten(props){
    const writing = data.map(item => {
        return (
            <Card
                key={item.id}
                item={item}
            />
        )
    })
    return (
        <div className="Written">
        <h2>Things I Wrote</h2>
        <div className="CardsList">
            {writing}
        </div>
        </div>
    )
}