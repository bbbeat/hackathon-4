function SearchOrigin(props) {
    return (
    <div>
      <form onSubmit={(e) => {
        e.preventDefault();
        props.fetchData();
      }}>
        Origin: <input 
          name="searchOrigin" 
          value={props.searchOrigin} 
          onChange={(e) => props.setSearchOrigin(e.target.value)} 
        />
       
      </form>
    </div>
    )
  }
  
  export default SearchOrigin;