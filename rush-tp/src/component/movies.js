import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css';
import './movie.json'

class Movies extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            movie : []
        }
    }

    componentDidMount(){
        var myJson = ;
        fetch(url)
        .then((response) => {
            response.json(); 
        })
        .then((data) =>{
            this.setState({ movie : data })
        })

    }

    render (){
        const movies = this.state.movie;
        console.log(movies);

                return(
            <div className="head">
                <div className="header">
                <h1>Movies</h1>
                <div className="link">
                <Link to="/"><a href="#">Home</a></Link>
                <Link to="/series"><a href="#">Series</a></Link>
                </div>
            </div>
            <footer></footer>
            </div>

        )
    }
}

export default Movies;