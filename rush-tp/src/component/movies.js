import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css';
import Footer from './footer';

class Movies extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            movie: []
        }
    }

    componentDidMount() {
        let url = "https://api.unsplash.com/search/photos?client_id=JAeh2qySWdfzREYPwbRr6MOctijKly1hLeFA-XfmeKg&query=wild"

        fetch(url)
        .then((response) => {
            return response.json()
        })
        .then((data) =>{
            this.setState ({
                movie : data.results
            })
        })
    }
    render() {
        const movies = this.state.movie ;
        console.log(movies);
        return (
                <div className="header">
                    <h1>Movies</h1>
                    <div className="link">
                        <Link to="/"><a href="#">Home</a></Link>
                        <Link to="/series"><a href="#">Series</a></Link>
                    </div>
                    <div className="underHead"><h2>All Movies</h2></div>
                    <div id="movies">
                        <div className="map">
                        {movies.map(movie => (
                            <div><img src={movie.urls.small}/>
                                    <p>Movie</p></div>
                        ))}
                        </div>
                    </div>
                <Footer/>
                </div>
        )
    }
}

export default Movies;