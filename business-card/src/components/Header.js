import logo from '../witch.jpg';
import Links from './Links'

export default function Header(){
    return (
        <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="Header-Name"><a href="https://0xbee.eth.xyz">0xbee.eth</a></h1>
            <h2 className="Header-tagline">Building the future of finance @<a href="https://monzo.com">Monzo</a></h2>
            <h3 className=""><a href = "https://github.com/bee-san">github.com/bee-san</a></h3>
            <Links />
        </div>
    )
}