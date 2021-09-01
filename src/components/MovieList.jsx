import React from 'react';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <div className="MovieList">
        {movies.map((movie) => <MovieCard key={ movie.title } />)}
      </div>

    );
  }
}

export default MovieList;
