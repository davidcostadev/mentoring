import './Search.css';

function Search() {
  return (
    <div className="search-container">
      <div className="input-group">
        <input type="text" className="input" placeholder="Search" />
        <div className="input-group-icon">
          <i className="fas fa-search"></i>
        </div>
      </div>
    </div>
  );
}

export default Search;
