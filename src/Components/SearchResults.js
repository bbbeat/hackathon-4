function SearchResults(props) {
    return (
        <div className="flightList">
          {props.searchResults.length > 0 ? props.searchResults.map((flight, index) => (
            <Flight key={index} flight={flight} />
          )) : <Loader />}
        </div>
      );
  }
  
  export default SearchResults;