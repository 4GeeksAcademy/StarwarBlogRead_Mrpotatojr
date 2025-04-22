import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useGlobalReducer from '../hooks/useGlobalReducer';

export const PlanetDetails = () => {
    const { id } = useParams();
    const [planet, setPlanet] = useState(null);

    useEffect(() => {
        fetch("https://www.swapi.tech/api/planets/" + id)
            .then((response) => response.json())
            .then((data) => setPlanet(data.result))
            .catch((error) => console.error("Error al cargar el planeta:", error));
    }, [id]);


    return (
        <>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-4">
                        <img
                            src="https://i.pinimg.com/736x/f1/3c/54/f13c54a85347698470ff9d5f65e9e7a0.jpg"
                            alt="Planet"
                            className="img-fluid rounded"
                        />
                    </div>

                    <div className="col-md-8">
                        <h1>{planet && planet.properties.name}</h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vehicula, nunc vel tincidunt cursus, lorem erat viverra enim, vel bibendum lorem odio nec lacus. Suspendisse potenti.
                        </p>
                    </div>
                </div>

                <hr style={{ border: 'none', height: '2px', backgroundColor: 'green', margin: '20px 0' }} />

                <div className="d-flex flex-row text-success justify-content-center justify-content-between flex-wrap">
                    <p><strong>Name:</strong><br />{planet && planet.properties.name}</p>
                    <p><strong>Climate:</strong><br />{planet && planet.properties.climate}</p>
                    <p><strong>Diameter:</strong><br />{planet && planet.properties.diameter}</p>
                    <p><strong>Gravity:</strong><br />{planet && planet.properties.gravity}</p>
                    <p><strong>Population:</strong><br />{planet && planet.properties.population}</p>
                    <p><strong>Terrain:</strong><br />{planet && planet.properties.terrain}</p>
                </div>
            </div>
        </>
    );
};
