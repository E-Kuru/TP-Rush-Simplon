import React from 'react';
import { Link } from 'react-router-dom'
import Footer from './footer';

function Loading(){
    return (
        <div>
             <div className="header">
                    <h1>Movies</h1>
                    <div className="link">
                        <Link to="/"><a href="#">Home</a></Link>
                        <Link to="/series"><a href="#">Series</a></Link>
                    </div>
                    <div className="underHead"><h2>All movies</h2></div>
                    <div className="fill"></div>
                <Footer/>
                </div>
        </div>
    )
}

export default Loading;