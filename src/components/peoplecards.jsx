import React from "react";
import { useEffect, useState } from "react";

export const Peoplecards = () => {
    
    
    const [people, setPeople] = useState([]);
    
    useEffect(()=> {
    fetch("https://www.swapi.tech/api/people")
    .then((response ) => response.json())
    .then((data) => setPeople(data.results))
    }, [])

    return (
        <>
        {people && people.map(item => <div key={item.id} className="card" style={{ width: "18rem" }}>
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{item.name}</h5>
              <ul>
                <li>caracteristical1</li>
                <li>caracteristical2</li>
                <li>caracteristical3</li>
              </ul>
              <div className="buttons">
              <button type="button" class="btn btn-primary">detalles</button>
    
              <button type="button" class="btn btn-warning">like</button>
              </div>
            </div>
          </div>

        )}
          
        </>
      );
}