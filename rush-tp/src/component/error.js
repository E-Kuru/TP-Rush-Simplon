import React from 'react';
import { Link } from 'react-router-dom'
import Footer from './footer';

function Error(){
    return (
        <div>
             <div className="header">
                    <h1>Error</h1>
                    <div className="link">
                        <Link to="/"><a href="#">Home</a></Link>
                        <Link to="/series"><a href="#">Series</a></Link>
                    </div>
                    <div className="underHead"><h2>Oops something went wrong...</h2></div>
                    <div className="fill"></div>
                <Footer/>
                </div>
        </div>
    )
}

export default Error;