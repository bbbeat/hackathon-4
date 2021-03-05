function SearchChildren(props) {
    return (
    <div>
      <form onSubmit={(e) => {
        e.preventDefault();
        props.fetchData();
      }}>
        Children: <input 
          name="searchChildren" 
          value={props.searchChildren} 
          onChange={(e) => props.setSearchChildren(e.target.value)} 
        /> 
       <button type="submit">Search</button>
      </form>
    </div>
    )
  }
  
  export default SearchChildren;