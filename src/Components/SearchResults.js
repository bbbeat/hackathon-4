import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Flight from './Flight';
import Loader from './Loader';


function SearchResults(props) {
  return (
    props.loading ? <Loader /> : <div className="flightList">

      {props.searchResults && props.searchResults.length > 0 ? props.searchResults.map((flight, index) => (
        <Flight key={index} flight={flight} />
      )) : "No Results"}
     
    </div>
  );
}

export default SearchResults;

 