import React, { Component } from 'react'

class Header extends Component{
    render(){
        return(
            <div>
                <h1 className="ct-head-title font-ct-serif text-3xl text-ct-light-1 text-center">Contame las mismas</h1>
                <h2 className="font-ct-sans text-ct-light-1 text-center text-lg">Historias contadas por 
                    <span className="block text-center">Alejandro Dolina</span>
                </h2>
            </div>
        )
    }
}

export default Header