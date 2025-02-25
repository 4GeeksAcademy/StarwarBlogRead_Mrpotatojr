import React, { useState } from "react";
import { useEffect, useId } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { useParams } from "react-router-dom";


export const Peopledetails = () => {
        const {store, dispatch} =useGlobalReducer();
        const {id} = useParams();
        const [people, setPeople] = useState();
    useEffect(() => {
          fetch("https://www.swapi.tech/api/people/" + id)
              .then((response) => response.json())
              .then((data) => setPeople(data)  )
      }, []);

      return (
      <>
      <div className="container mt-5">
            <div className="row">
                <div className="col-md-4">
                    <img
                        src="https://i.pinimg.com/736x/6c/3b/cd/6c3bcd47c9c518e140fb7b42768a75ac.jpg"
                        alt="Luke Skywalker"
                        className="img-fluid rounded"
                    />
                </div>

                <div className="col-md-8">
                    <h1>{people && people.result.properties.name}</h1>
                    <p>
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi.
                    </p>
                    
                </div>
            </div>
            <hr style={{ border: 'none', height: '2px', backgroundColor: 'red', margin: '20px 0'}}/>

            <div className="d-flex flex-row text-danger justify-content-center justify-content-between">
                <p>{people && people.result.properties.name}</p>
                <p>{people && people.result.properties.birth_year}</p>
                <p>{people && people.result.properties.gender}</p>
                <p>{people && people.result.properties.height}</p>
                <p>{people && people.result.properties.skin_color}</p>
                <p>{people && people.result.properties.eye_color}</p>
            </div>
        </div>
   
        
      </>)
}