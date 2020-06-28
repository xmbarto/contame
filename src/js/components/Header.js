import React, { Component } from 'react'
import ornamento from '../../img/feathers.png'

class Header extends Component{
    render(){
        return(
            <div>
                <h1 className="ct-head-title font-ct-serif text-3xl text-ct-light-1 text-center">Contame las mismas</h1>
                <div>
                    <img className="w-8 mx-auto my-3" src={ornamento} alt="ornamento"></img>
                </div>
                <h2 className="font-ct-sans text-ct-light-1 text-center text-lg">Historias contadas por 
                    <span className="block text-center">Alejandro Dolina</span>
                </h2>
            </div>
        )
    }
}

export default Header