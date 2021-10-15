import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Home({ addFavourite, favourites }) {

  // Create an empty state array where we will store the breweries
  const [breweries, setBreweries] = useState([]);
  
  useEffect(() => {
    fetch('https://api.openbrewerydb.org/breweries')
    .then(response => response.json())
    .then(data => {
      // Place results in an array 
      setBreweries(data)
    });
  }, []);

  return (
    <div>
      <h2>Home</h2>
      <div className="breweries">
        {
          // If the length of the array is bigger than 0
          breweries.length > 0 ?
          breweries.map((brewery, index) => {
            return (
              <div className="brewery" key={index}>
                <h3>{ brewery.name }</h3>
                <Link to={`/detail/${ brewery.id }`}>Check brewery</Link>
                <button onClick={() => addFavourite(brewery)}>
                  Add to favourites
                </button>
              </div>
            )
          })
          // Else don't show anything
          : null
        }
      </div>
    </div>
  )
}

export default Home
