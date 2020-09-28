import React from 'react'
import { Link } from 'react-router-dom'
import Footer from './footer'

class Home extends React.Component{
    constructor(props){
        super(props)
    }
    
    render (){        
        return(
        <div className ="all">
            <div className="header">
                <h1>Home</h1>
            <div className="link">
                <Link to="/movies"><a href="#">Movies</a></Link>
                <Link to="/series"><a href="#">Series</a></Link>
                </div>
            </div>
            <div className="textHome">
                    <div>
                    <h3>"Etre visionnaire c'est regarder le monde au delà du temps. Mais on ne voit pas plus loin, que les choix que l'on ne peut pas comprendre."<br/> The Matrix, L'oracle</h3>
                    </div>
                </div>
                <Footer/>
        </div>
        )
    }
}

export default Home;