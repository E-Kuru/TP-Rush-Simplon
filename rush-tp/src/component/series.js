import React from 'react'
import { Link } from 'react-router-dom'

class Series extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            serie : []
        }
    }

    render (){
        return(
        <div className="head">
            <div className="header">
                <h1>Series</h1>
                <div className="link"> 
                <Link to="/"><a href="#">Home</a></Link>
                <Link to="/movies"><a href="#">Movies</a></Link>
            </div>
            </div>
        </div>
        )
    }
}

export default Series;