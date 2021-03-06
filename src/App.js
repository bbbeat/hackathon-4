import './App.css';
import SearchResults from './Components/SearchResults';
import SearchOrigin from './Components/SearchOrigin';
import SearchDestination from './Components/SearchDestination';
import SearchDate from './Components/SearchDate';
import SearchAdult from './Components/SearchAdult';
import SearchChildren from './Components/SearchChildren';
import DirectFlight from './Components/DirectFlight';
import Paginate from './Components/Paginate';
import { useEffect, useState } from 'react';

function App() {
  const [searchOrigin, setSearchOrigin] = useState("");
  const [searchDestination, setSearchDestination] = useState("");
  const [searchDate, setSearchDate] = useState("");
  const [searchAdult, setSearchAdult] = useState("");
  const [searchChildren, setSearchChildren] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [direct, setDirect] = useState(false);
  const [paginate, setPaginate] = useState(5);
  const [offset, setOffset] = useState(0);

  async function fetchData() {
    setLoading(true);
    const response = await fetch(`https://api.skypicker.com/flights?fly_from=${searchOrigin}&fly_to=${searchDestination}&date_from=${searchDate}&flight_type=oneway&adults=${searchAdult}&children=${searchChildren}&infants=0&selected_cabins=M&partner=picky&limit=${paginate}&sort=price&asc=1&max_stopovers=${direct ? 0 : 2}`);
    const data = await response.json();
    console.log(data);
    setSearchResults(data.data);
    setLoading(false);
  }

  useEffect(() => {
    paginate > 5 && fetchData();
  }, [paginate]);

  return (
    <div className="App">
      <SearchOrigin
        searchOrigin={searchOrigin}
        setSearchOrigin={setSearchOrigin}
        fetchData={fetchData}
      />
      <SearchDestination
        searchDestination={searchDestination}
        setSearchDestination={setSearchDestination}
        fetchData={fetchData}
      />
      <SearchDate
        searchDate={searchDate}
        setSearchDate={setSearchDate}
        fetchData={fetchData}
      />
      <SearchAdult
        searchAdult={searchAdult}
        setSearchAdult={setSearchAdult}
        fetchData={fetchData}
      />

      <SearchChildren
        searchChildren={searchChildren}
        setSearchChildren={setSearchChildren}
        fetchData={fetchData}
      />

      <DirectFlight
        setDirectFlight={setDirect}
        direct={direct}
      />

      <SearchResults
        searchResults={searchResults}
        loading={loading}
        paginate={paginate}
        setPaginate={setPaginate}
      />

    </div>
  );
}

export default App;
