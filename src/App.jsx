import { useState } from 'react';
import Search from './components/Search.jsx';
import MovieCard from "./components/MovieCard";

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  

  const movieList = [
    {
        id: 1,
        title: "Anime Movie",
        poster_path: "./anime10.jpg", // Correct image path
        vote_average: 8.6,
        release_date: "2024-03-01",
        original_language: "en"
    },
    {
      id: 2,
      title: "Godzilla x Kong: The New Empire",
      poster_path: "./anime2.jpg",
      vote_average: 7.2,
      release_date: "2024-03-27",
      original_language: "en"
    },
    {
      id: 3,
      title: "The Fall Guy",
      poster_path: "/anime3.jpg",
      vote_average: 7.1,
      release_date: "2024-05-03",
      original_language: "en"
    },
    {
      id: 4,
      title: "Kung Fu Panda 4",
      poster_path: "./anime4.jpg",
      vote_average: 6.9,
      release_date: "2024-03-08",
      original_language: "en"
    },
    {
      id: 5,
      title: "Ghostbusters: Frozen Empire",
      poster_path: "./anime5.jpg",
      vote_average: 7.3,
      release_date: "2024-03-22",
      original_language: "en"
    },
    {
      id: 6,
      title: "Kingdom of the Planet of the Apes",
      poster_path: "./anime6.jpg",
      vote_average: 7.4,
      release_date: "2024-05-10",
      original_language: "en"
    },
    {
      id: 7,
      title: "Suzume",
      poster_path: "./anime7.jpg",
      vote_average: 7.5,
      release_date: "2024-05-24",
      original_language: "en"
    },
    {
      id: 8,
      title: "The First Omen",
      poster_path: "./anime9.jpg",
      vote_average: 7.2,
      release_date: "2024-04-05",
      original_language: "en"
    }
  ];

  const trendingMovies = [
    {
      $id: "trending1",
      title: "Dune: Part Two",
      poster_url: "./anime11.jpg"
    },
    {
      $id: "trending2",
      title: "Godzilla x Kong",
      poster_url: "./anime12.jpg"
    },
    {
      $id: "trending3",
      title: "Kung Fu Panda 4",
      poster_url: "./anime13.jpg"
    },
    {
      $id: "trending4",
      title: "The Fall Guy",
      poster_url: "./anime14.jpg"
    },
    {
      $id: "trending5",
      title: "Furiosa",
      poster_url: "./anime8.jpg"
    }
  ];

  const filteredMovies = searchTerm 
    ? movieList.filter(movie => 
        movie.title.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : movieList;

  return (
    <main>
      <div className="pattern"/>
      <div className="wrapper">
        <header>
          <img src="./hero-img.png" alt="Hero Banner" />
          <h1>Find <span className="text-gradient">Movies</span> You'll Enjoy Without the Hassle</h1>
          <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        </header>
        
        <section className="trending">
          <h2>Trending Movies</h2>
          <ul>
            {trendingMovies.map((movie, index) => (
              <li key={movie.$id}>
                <p>{index + 1}</p>
                <img src={movie.poster_url} alt={movie.title} />
              </li>
            ))}
          </ul>
        </section>
        
        <section className="all-movies">
          <h2>All Movies</h2>
          <ul>
            {filteredMovies.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
};

export default App;