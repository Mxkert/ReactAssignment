import React from 'react'
import { Link } from 'react-router-dom'

function Favourites({ favourites }) {
  return (
    <div>
      <h1>Favourites</h1>
      <div className="breweries">
        {
          favourites.length > 0 ?
          favourites.map((brewery, index) => {
            return (
              <div className="brewery" key={index}>
                <h3>{ brewery.name }</h3>
                <Link to={`/detail/${ brewery.id }`}>Check brewery</Link>
              </div>
            )
          })
          : 
          <h3>You have not yet added any favourites.</h3>
        }
      </div>
    </div>
  )
}

export default Favourites
