import React from "react";
import axios from "axios";
import Movie from "../components/Movie";
import './Home.css';


class Home extends React.Component {

  state = {
    isLoding : true,
    movies : [],
  };

  getMovies = async () => {
    const {
      data: {
        data : {movies},
      }} = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");

    console.log(movies);
    this.setState({movies, isLoding: false});
  }

  componentDidMount() {
    this.getMovies();
    // setTimeout(() => {
    //   this.setState({isLoding : false});
    // }, 5000);
  }

  render() {
    const {isLoding, movies} = this.state;
    return (
      <section className="container">
        {isLoding ? (
          <div className="loader">
            <span className = "loader__text">Loading....</span>
          </div>
        ) : (
          <div className="movies">
            {
              movies.map((movie) => {
                return (
                  <Movie
                  key = {movie.id} 
                  id={movie.id}
                  year={movie.year}
                  title = {movie.title}
                  summary={movie.summary}
                  poster = {movie.medium_cover_image}
                  genres = {movie.genres}/>
      
                );
              })
            }
          </div>
        )}
      </section>
    );
  }
}

export default Home;