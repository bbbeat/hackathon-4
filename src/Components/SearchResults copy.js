import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Flight from './Flight';
import Loader from './Loader';
import Paginate from "./Paginate";


function SearchResults(props) {
  return (
    props.loading ? <Loader /> : <div className="flightList">
      {props.searchResults && props.searchResults.length > 0 ? <>
        <Paginate paginate={props.paginate} setPaginate={props.setPaginate} />
        {props.searchResults.map((flight, index) => (
          <Flight key={index} flight={flight} />
        ))}
      </>
        : <p>"No Results"</p>}
    </div>
  );
}

export default SearchResults;

