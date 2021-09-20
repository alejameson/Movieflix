import React, { Component } from "react";
import { connect } from "react-redux";
// import { Link } from 'react-router-dom';
import './Favorites.css';
import {removeMovieFavorite} from "../../actions/index";
import imagen from "../../img/descarga.png"


export function favoritas ({movies, removeMovieFavorite}) {

    return (
      <div>
        <h2 className = "encabezado">Películas Favoritas</h2>
        <ul className = "listafavs">
          {movies.map((movie) => 
          <div className = "favoritas">
            <div className = "delete"><button className = "myButton" onClick = {() =>{removeMovieFavorite(movie.id)} }> DELETE <i class='fas fa-trash-alt'></i> </button></div>
            <div><img src = {movie.poster}/></div>
            <div className = "titulofavs">{movie.title}</div>
          </div>)}
        </ul>
      </div>
    );
}

function mapStateToProps(state)
{
  return {movies: state.moviesFavourites};
}

export default connect(mapStateToProps, {removeMovieFavorite})(favoritas);


/* function mapStateToProps(state) {
  return {
    movies: state.moviesFavourites
  };
}

function mapDispatchToProps(dispatch){
  return {
    removeMovieFavorite : movie => dispatch(removeMovieFavorite(movie))
  }
}

export default connect( mapStateToProps, mapDispatchToProps )(ConnectedList);
 */