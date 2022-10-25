import { useEffect, useState } from 'react';
import './App.css';
import StarshipCard from './components/StarshipCard';

function App() {

  const api = 'https://swapi.dev/api/starships/';

  let [starship, setStarship] = useState([]);

  const getStarships = async () => {
      const response = await fetch(api);
      let data = await response.json();
      console.log(data)
      setStarship(data.results)
  }

  useEffect(() => {
    console.log('use effect ran')
    getStarships();
  }, [])

  return (
    <div className="App">
      <h1>Star Wars Starships</h1>
      <h3>Click the starship name for more info</h3>
      <div className="all-ships">
        {starship.map((s, index) => {
          return (
            <StarshipCard key={index} starship={s} />
          )
        })}
      </div>
    </div>
  );
}

export default App;
