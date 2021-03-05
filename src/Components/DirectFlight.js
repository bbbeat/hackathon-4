function DirectFlight(props) {
    return (
        <div>
      <form onSubmit={(e) => {
        e.preventDefault();
        props.fetchData();
      }}>
        Direct Flight: <input type="checkbox"
          name="directFlight" 
          value={props.directFlight} 
          onChange={(e) => props.setDirectFlight(!props.direct)} 
        />
       
      </form>
    </div>
    )
}

export default DirectFlight;