import React from 'react';
import axios from "axios";
import Movie from "./Movie";

class App extends React.Component{

  //data that will change
  state = {
    isLoading: true,
    movies: []
  };

  getMovies = async() => {
    const {
      data: 
        {data: {movies}
      }
    } = await axios.get(`https://yts.mx/api/v2/list_movies.json?sort_by=rating`);

    this.setState({movies, isLoading: false});
  }

  componentDidMount(){
    this.getMovies();
  };

  renderMovies(movies){
    return movies.map(movie => (
                   <Movie
                    key = {movie.id}
                    id={movie.id}
                    year={movie.year}
                    title={movie.title}
                    summary={movie.summary}
                    poster={movie.medium_cover_image}/>
    ));
  }

  render(){
    const {isLoading, movies} = this.state;
    //uses {} destructuring assignment
    //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#examples
    //"object destructuring"
    console.log(movies);
    return <div>{isLoading ? "Loading" : this.renderMovies(movies)}</div>
  } //parathanses immediate, without it, only onClick\



  add = () => {
    this.setState(current => ({count: current.count+1}))
  };
  subtract = () => {
    this.setState(current => ({count: current.count-1}))
  };
  //dont get current state using this.state.count => not good practice
  //this.setState(current => ({count: current.count+1}))

}

export default App;
