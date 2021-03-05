function SearchAdult(props) {
    return (
    <div>
      <form onSubmit={(e) => {
        e.preventDefault();
        props.fetchData();
      }}>
        Adults: <input 
          name="searchAdult" 
          value={props.searchAdult} 
          onChange={(e) => props.setSearchAdult(e.target.value)} 
        />
       
      </form>
    </div>
    )
  }
  
  export default SearchAdult;