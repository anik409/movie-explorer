function SearchBar({ searchTerm, onSearchTermChange, onSubmit }) {
  return (
    <form className="search-form" onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Search for a movie..."
        value={searchTerm}
        onChange={(e) => onSearchTermChange(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
}

export default SearchBar;