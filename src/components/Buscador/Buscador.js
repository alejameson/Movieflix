import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from 'react-router-dom';
import './Buscador.css';
import {addMovieFavorite, getMovies} from "../../actions/index";

export default function Buscador (){
  const [state, setState] = useState("");
  const dispatch = useDispatch();

  const movies = useSelector((state) => state.moviesLoaded);

  function handleChange(e){
    setState(e.target.value);
  }
  function handleSubmit(e){
    e.preventDefault();
    dispatch(getMovies(state));
  }
  
  return (
    <div>
        <div className = "barra"><h2>MOVIEFLIX</h2></div>
        <form className="form-container" onSubmit={(e) => handleSubmit(e)}>
          <div>
            <label className="label" htmlFor="title">Película: </label>
            <input
              class="btn btn-outline-danger"
              type="text"
              id="title"
              autoComplete="off"
              value={state}
              onChange={(e) => handleChange(e)}
            />
            <button type="submit" class="btn btn-danger">BUSCAR</button>
          </div>
          
        </form>
        <ul className = "lista">
         {movies.map((movie) => 
         <div className = "conteiner">
            <div className = "fav"> <button class="btn btn-outline-danger" onClick={() => dispatch(addMovieFavorite({title: movie.Title, id: movie.imdbID, poster: movie.Poster}))}> ❤️ </button></div>
            <Link to={`/movie/${movie.imdbID}`}><div className = "imagen"><img src = {movie.Poster}/></div> 
            <div className = "titulo">{movie.Title}</div></Link> 
         </div> )}
        </ul>
      </div>
  )
}



// VERSION CLASES ABAJO ↓↓↓↓↓↓↓



/* export class Buscador extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({ title: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
    this.props.getMovies( this.state.title );
  }

  render() {
    const { title } = this.state;
    return (
      <div>
        <div className = "barra"><h2>MOVIE NETFLIX</h2></div>
        <form className="form-container" onSubmit={(e) => this.handleSubmit(e)}>
          <div>
            <label className="label" htmlFor="title">Película: </label>
            <input
              class="btn btn-outline-danger"
              type="text"
              id="title"
              autoComplete="off"
              value={title}
              onChange={(e) => this.handleChange(e)}
            />
            <button type="submit" class="btn btn-danger">BUSCAR</button>
          </div>
          
        </form>
        <ul className = "lista">
         {this.props.movies.map((movie) => 
         <div className = "conteiner">
            <div className = "fav"> <button class="btn btn-outline-danger" onClick={() => this.props.addMovieFavorite({title: movie.Title, id: movie.imdbID, poster: movie.Poster})}> ❤️ </button></div>
            <div className = "imagen"><img src = {movie.Poster}/></div> 
            <div className = "titulo">{movie.Title}</div> 
         </div> )}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    movies: state.moviesLoaded
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addMovieFavorite: movie => dispatch(addMovieFavorite(movie)),
    getMovies: title => dispatch(getMovies(title))
  };
}

export default connect( mapStateToProps, mapDispatchToProps )(Buscador); */
