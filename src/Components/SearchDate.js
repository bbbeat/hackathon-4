function SearchDate(props) {
    return (
    <div>
      <form onSubmit={(e) => {
        e.preventDefault();
        props.fetchData();
      }}>
        Date: <input 
          name="searchDate" 
          value={props.searchDate} 
          onChange={(e) => props.setSearchDate(e.target.value)} 
        />
       
      </form>
    </div>
    )
  }
  
  export default SearchDate;