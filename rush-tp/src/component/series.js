import React from 'react';
import { Link } from 'react-router-dom';
import Footer from './footer';

class Series extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            serie: []
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
                serie : data.results
            })
        })
    }

    render() {
        const series = this.state.serie ;
        console.log(series);

        return (
            <div className="header">
                <h1>Series</h1>
                <div className="link">
                    <Link to="/"><a href="#">Home</a></Link>
                    <Link to="/movies"><a href="#">Movies</a></Link>
                </div>
                <div className="underHead"><h2>All Movies</h2></div>
                <div id="movies">
                    <div className="map">
                        {series.map(serie => (
                            <div><img src={serie.urls.small} />
                                <p>Movie</p></div>
                        ))}
                    </div>
                </div>
                <Footer />
            </div>)
    }
}

export default Series;