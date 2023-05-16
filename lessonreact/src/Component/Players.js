import React, { Component } from "react"
import{ Players } from '../shared/listOfPlayers' 
export default class player extends Component {
render(){
        return (
            // <div className="container">
            //     <div className="column">
            //         <div className="card">
            //             <img className="imgf" src="assets/images/cr.jpg"/>
            //             <h3>Cristiano RonalDo</h3>
            //             <p className="title">Manchester United</p>
            //             <p className="but"><button>Detail</button></p>
            //         </div>
            //     </div>
            //     <div className="column">
            //         <div className="card">
            //         <img className="imgf" src="assets/images/kante.jpg"/>
            //             <h3>Kante</h3>
            //             <p className="title">Chelsea</p>
            //             <p className="but"><button>Detail</button></p>
            //         </div>
            //     </div>
            //     <div className="column">
            //         <div className="card">
            //         <img className="imgf" src="assets/images/messi.jpg"/>
            //             <h3>Messi</h3>
            //             <p className="title">PSG</p>
            //             <p className="but"><button>Detail</button></p>
            //         </div>
            //     </div>
            //     <div className="column">
            //         <div className="card">
            //         <img className="imgf" src="assets/images/neymar.jpg"/>
            //             <h3>Neymar</h3>
            //             <p className="title">PSG</p>
            //             <p className="but"><button>Detail</button></p>
            //         </div>
            //     </div>
            //     <div className="column">
            //         <div className="card">
            //         <img className="imgf" src="assets/images/kane.jpg"/>
            //             <h3>Kane</h3>
            //             <p className="title">Tottemham</p>
            //             <p className="but"><button>Detail</button></p>
            //         </div>
            //     </div>
            //     <div className="column">
            //         <div className="card">
            //         <img className="imgf" src="assets/images/haaland.jpg"/>
            //             <h3>Haaland</h3>
            //             <p className="title">Manchester City</p>
            //             <p className="but"><button>Detail</button></p>
            //         </div>
            //     </div>
            // </div>
            <div className='container'>
            {Players.map((player)=>(
               <div className='column'>
               <div className='card'>
               <img src={player.img}/>
                 <h3>{player.name}</h3>
                 <p className='title'>{player.club}</p>
                 <p className="but"><button>Detail</button></p>
               </div>
             </div>
            ))}
        </div>
    

        );
    }
}