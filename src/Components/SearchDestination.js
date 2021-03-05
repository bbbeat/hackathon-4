function SearchDestination(props) {
    return (
    <div>
      <form onSubmit={(e) => {
        e.preventDefault();
        props.fetchData();
      }}>
        Destination: <input 
          name="searchDestination" 
          value={props.searchQuery} 
          onChange={(e) => props.setSearchDestination(e.target.value)} 
        />
        
      </form>
    </div>
    )
  }
  
  export default SearchDestination;