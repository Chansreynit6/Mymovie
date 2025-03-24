// components/Search.jsx
const Search = ({ searchTerm, setSearchTerm }) => {
    return (
      <div className="search">
        <div>
          <img src="./search.svg" alt="Search" />
          <input
            type="text"
            placeholder="Search for movies by title..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>
    );
  };
  
  export default Search;