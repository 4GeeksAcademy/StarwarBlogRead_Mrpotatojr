import React, { useState, useEffect } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { useNavigate } from "react-router-dom";

const PlanetCards = () => {
    const { store, dispatch } = useGlobalReducer();
    const navigate = useNavigate();
    const [like, setLike] = useState(false);
    useEffect(() => {
        fetch("https://www.swapi.tech/api/planets/")
            .then((response) => response.json())
            .then((data) => {
                const planetWithDetails = data.results.map((planet) => {
                    return fetch(planet.url)
                        .then((response) => response.json())
                        .then((details) => ({
                            ...planet,
                            ...details.result.properties,
                        }));
                });
                Promise.all(planetWithDetails).then((planet) => {
                    dispatch({
                        type: "update_planet",
                        payload: planet,
                    });
                });
            });
    }, [dispatch]);

    return (
        <div className="d-flex flex-row overflow-x-auto">
            {store.planet &&
                store.planet.map((item) => (
                    <div
                        key={item.uid}
                        className="card m-2"
                        style={{ width: "18rem", flexShrink: 0 }}
                    >
                        <img
                            src="https://th.bing.com/th/id/OIP.-GCsisfsThA2E4-yLGJFTwAAAA?rs=1&pid=ImgDetMain"
                            className="card-img-top"
                            alt={item.name}
                        />
                        <div className="card-body">
                            <h5 className="card-title">{item.name}</h5>
                            <ul>
                                <li>Climate: {item.climate}</li>
                                <li>Diameter: {item.diameter}</li>
                                <li>Gravity: {item.gravity}</li>
                            </ul>
                            <div className="buttons d-flex justify-content-between align-items-end">
                                <button
                                    type="button"
                                    className="btn btn-primary"
                                    onClick={() => navigate("/Paginaplaneta/" + item.uid)}
                                >
                                    Detalles
                                </button>
                                <button
                                    type="button"
                                    className="btn btn-warning"
                                    onClick={() => dispatch({ type: "toggle_favorite", payload: { ...item, type: 'planet' } })}
                                >
                                    <i class="fa-regular fa-heart"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
        </div>
    );
};

export default PlanetCards;
