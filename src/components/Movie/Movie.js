import React,{Component} from 'react';
import {API_KEY, API_URL, BACKDROP_SIZE, IMAGE_BASE_URL, POSTER_SIZE} from "../../config";
import Navigation from '../elements/Navigation/Navigation';
import MovieInfo from '../elements/MovieInfo/MovieInfo';
import MovieInfoBar from '../elements/MovieInfoBar/MovieInfoBar';
import FourColGrid from '../elements/FourColGrid/FourColGrid';
import Actor from '../elements/Actor/Actor';
import Spinner from '../elements/Spinner/Spinner';
import './Movie.css';


class Movie extends Component{
    render(){
        return(
            <div className="rmdb-movie">
                <Navigation/>
                <MovieInfo/>
                <MovieInfoBar/>
                <FourColGrid/>
                <Spinner/>
            </div>
        )
    }
}



export default Movie;
