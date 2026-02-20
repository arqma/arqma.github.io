import arqLogo from './assets/arqLogo.png'
import twitterLogo from './assets/x.png'
import discordLogo from './assets/discordBlack.png'
import telegramLogo from './assets/telegramBlack.png'
const Footer = () => {
    return (
        <div  style={{overflow:'hidden'}}>
            <footer className=" bg-white py-4 mt-auto row row-cols-1 row-cols-sm-2 row-cols-md-5 ">

                <div className="col mb-3 socialFooter" style={{textAlign:'left',marginLeft:"80px"}} >

                    <img src={arqLogo} style={{width:"50px"}}/>
                    <h3 className='fw mt-1'>Follow Us</h3>

                    <div className="d-flex fs-2 gap-3" style={{marginTop:"-10px"}}>
                    <a className="text-black" href="https://telegram.arqma.com">
                        <img   src={telegramLogo} style={{width:"30px"}}/>

                    </a>
                    <a className="text-black" href="https://chat.arqma.com">
                        <img   src={discordLogo} style={{width:"30px"}}/>

                    </a>
                    <a className="text-black" href="https://twitter.com/ArQmA_Network">
                        <img   src={twitterLogo} style={{width:"30px"}}/>

                    </a>
                </div>
                </div>
                <div className="col mb-3" style={{textAlign:'left',marginLeft:"20px"}} >
                    <h5>Info</h5>
                    <ul className="nav flex-column">
                        <li className="nav-item mb-2"><a href="https://telegram.arqma.com/" className="nav-link p-0 text-muted">Telegram Channel</a></li>
                        <li className="nav-item mb-2"><a href="https://chat.arqma.com/" className="nav-link p-0 text-muted">Discord Channel</a></li>
                      //  <li className="nav-item mb-2"><a href="https://coinmarketcap.com/currencies/arqma/" className="nav-link p-0 text-muted">Coinmarketcap</a></li>
                      //  <li className="nav-item mb-2"><a href="https://www.coingecko.com/en/coins/arqma" className="nav-link p-0 text-muted">Coingecko</a></li>
                        <li className="nav-item mb-2"><a href="https://explorer.arqma.com/" className="nav-link p-0 text-muted">Explorer</a></li>
                    </ul>
                </div>

                <div className="col mb-3"  style={{textAlign:'left',marginLeft:"20px"}} >
                    <h5>Tools</h5>
                    <ul className="nav flex-column">
                        <li className="nav-item mb-2"><a href="https://github.com/arqma/arqma/releases/latest" className="nav-link p-0 text-muted">Desktop Wallet</a></li>
                        <li className="nav-item mb-2"><a href="https://github.com/arqma/arqma-logo" className="nav-link p-0 text-muted">Media Kit</a></li>
                    </ul>
                </div>

                <div className="col mb-3"  style={{textAlign:'left',marginLeft:"20px"}} >
                <h5>Pools</h5>
                    <ul className="nav flex-column">
                        <li className="nav-item mb-2"><a href="https://miningpoolstats.stream/arqma" className="nav-link p-0 text-muted">Miningpoolstats</a></li>
                    </ul>
                </div>
        </footer>
  </div>

    );
}

export default Footer;
