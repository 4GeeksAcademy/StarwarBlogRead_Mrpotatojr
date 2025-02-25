import React from "react";
import { useEffect, useState} from "react";
import { useNavigate } from 'react-router-dom';
import useGlobalReducer from "../hooks/useGlobalReducer";

export const Peoplecards = () => {
    const navigate = useNavigate();
    const {store, dispatch} =useGlobalReducer();
    
    useEffect(() => {
      fetch("https://www.swapi.tech/api/people/")
          .then((response) => response.json())
          .then((data) => {
              const peopleWithDetails = data.results.map(person => {
                  return fetch(person.url)
                      .then(response => response.json())
                      .then(details => ({
                          ...person,
                          ...details.result.properties
                      }));
              });
              Promise.all(peopleWithDetails).then(people => {
                  dispatch({
                      type: 'update_people',
                      payload: people
                  });
              });
          });
  }, []);

  return (
    <>
    <div className="d-flex flex-row overflow-x-auto" >
        {store.people && store.people.map(item => (
            <div key={item.uid} className="card m-2" style={{ width: "18rem", flexShrink: 0 }}> {/* flexshrink evita que se encoja dependiendo del tamaño de la pagina bien gucci o se le puede poner un valor que permita settear cuanto puede encoger*/}
                <img 
                    src="https://th.bing.com/th/id/OIP.-GCsisfsThA2E4-yLGJFTwAAAA?rs=1&pid=ImgDetMain" 
                    className="card-img-top" 
                />
                <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                    <ul>
                        <li>Gender: {item.gender}</li>
                        <li>Hair Color: {item.hair_color}</li>
                        <li>Eye Color: {item.eye_color}</li>
                    </ul>
                    <div className="buttons">
                        <button type="button" className="btn btn-primary"
                        onClick={()=> navigate('/Paginapersona/'+ item.uid)}
                        >detalles</button>
                        <button type="button" className="btn btn-warning">like</button>
                    </div>
                </div>
            </div>
        ))}
    </div>
</>
);
}