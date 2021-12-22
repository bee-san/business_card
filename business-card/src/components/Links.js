import twitter from "../images/twitter-brands.svg"
import discord from "../images/discord-brands.svg"
import ethereum from "../images/ethereum-brands.svg"
import github from "../images/github-brands.svg"
import rss from "../images/rss-solid.svg"
import "../Links.css"

export default function Links(){
    return (
        <div className="links">
            <a href="https://twitter.com/bee_sec_san"><img src={twitter} className="Links-twitter" alt="Twitter logo" /></a>
            <a href="http://discord.skerritt.blog"><img src={discord} className="Links-twitter" alt="Discord logo" /></a>
            <a href="https://github.com/bee-san"><img src={github} className="Links-twitter" alt="Github logo" /></a>
            <a href="https://0xbee.eth.xyz"><img src={ethereum} className="Links-twitter" alt="Ethereum logo" /></a>
            <a href="https://skerritt.blog"><img src={rss} className="Links-twitter" alt="RSS logo" /></a>
        </div>
        
    )
}