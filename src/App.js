
import './App.css';
import SearchResults from './Components/SearchResults';
import SearchOrigin from './Components/SearchOrigin';
import SearchDestination from './Components/SearchDestination';
import SearchDate from './Components/SearchDate';
import SearchAdult from './Components/SearchAdult';
import SearchChildren from './Components/SearchChildren';
import { useEffect, useState } from 'react'

function App() {
  const [searchOrigin, setSearchOrigin] = useState("");
  const [searchDestination, setSearchDestination] = useState("");
  const [searchDate, setSearchDate] = useState("");
  const [searchAdult, setSearchAdult] = useState("");
  const [searchChildren, setSearchChildren] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [offset, setOffset] = useState(0);

  async function fetchData() {
    const response = await fetch(`https://api.skypicker.com/flights?fly_from=${searchOrigin}&fly_to=${searchDestination}&date_from=${searchDate}&flight_type=oneway&adults=${searchAdult}&children=${searchChildren}&infants=0&selected_cabins=M&partner=picky&limit=5&sort=price&asc=1`);
    const data = await response.json();
    console.log(data);
  }

  useEffect(() => {
    searchOrigin && fetchData();
  }, [offset]);

  useEffect(() => {
    searchDestination && fetchData();
  }, [offset]);

  useEffect(() => {
    searchDate && fetchData();
  }, [offset]);
  useEffect(() => {
    searchAdult && fetchData();
  }, [offset]);
  useEffect(() => {
    searchChildren && fetchData();
  }, [offset]);

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
      {/* <SearchResults 
        searchResults={searchResults} 
      /> */}
     
    
    </div>
  );
}

export default App;
