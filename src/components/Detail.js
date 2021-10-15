import React, { useEffect, useState } from 'react'

function Detail(props) {

  // Get the parameter from the URL and place it into a variable
  const detailID = props.match.params.param;

  // Create an empty state where we will store the brewery data
  const [brewery, setBrewery] = useState(null);
  
  useEffect(() => {
    fetch(`https://api.openbrewerydb.org/breweries/${detailID}`)
    .then(response => response.json())
    .then(data => {
      // Place results in an array 
      console.log(data);
      setBrewery(data);
    });
  }, []);

  return (
    <div>
      {
        brewery ?
        <>
          <h2>{ brewery.name }</h2>
          <p>{ brewery.city }, { brewery.country }</p>
        </>
        : null
      }
    </div>
  )
}

export default Detail
