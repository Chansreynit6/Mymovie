const MovieCard = ({ movie }) => {
  // Just use the poster_path directly without any URL transformation
  const imageUrl = movie.poster_path;
  
  const year = movie.release_date ? new Date(movie.release_date).getFullYear() : '';
  
  return (
    <div className="movie-card">
      <img src={imageUrl} alt={movie.title} />
      <div className="content">
        <div className="rating">
          <img src="./star.svg" alt="Rating" />
          <p>{movie.vote_average?.toFixed(1) || '-'}</p>
        </div>
        <span>•</span>
        <span className="lang">{movie.original_language || 'en'}</span>
        <span>•</span>
        <span className="year">{year}</span>
      </div>
      <h3>{movie.title}</h3>
    </div>
  );
};

export default MovieCard;