import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Flight from './Flight';
import Loader from './Loader';


function SearchResults(props) {
  return (
    <div className="flightList">
      {props.searchResults.length > 0 ? props.searchResults.map((flight, index) => (
        <Flight key={index} flight={flight} />
      )) : <Loader loading={props.loading} />}
    </div>
  );
}

export default SearchResults;