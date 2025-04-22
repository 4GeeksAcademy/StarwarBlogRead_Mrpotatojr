import { array } from "prop-types";
import { Link } from "react-router-dom";
import { useState } from "react";

import useGlobalReducer from "../hooks/useGlobalReducer";
export const Navbar = () => {
    const { store, dispatch } = useGlobalReducer();

    const handleRemove = (uid) => {
        const planetToRemove = store.favorites.find((fav) => fav.uid === uid);
        dispatch({ type: "toggle_favorite", payload: planetToRemove });
    };

    return (
        <nav className="navbar navbar-light bg-light">
            <div className="container">
                <Link to="/">
                    <span className="navbar-brand mb-0 h1">Star wars</span>
                </Link>
                <div className="ml-auto dropdown">
                    <button
                        className="btn btn-success dropdown-toggle"
                        type="button"
                        id="favoritesDropdown"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                    >
                        Favoritos {store.favorites.length}
                    </button>
                    <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="favoritesDropdown">
                        {store.favorites.length === 0 ? (
                            <li className="dropdown-item text-muted">Sin favoritos</li>
                        ) : (
                            store.favorites.map((fav) => (
                                <li key={fav.uid} className="dropdown-item d-flex justify-content-between align-items-center">
                                    <Link to={`/Paginaplaneta/${fav.uid}`} className="text-decoration-none text-dark">
                                        {fav.name}
                                    </Link>
                                    <button
                                        className="btn btn-sm btn-outline-danger ms-2"
                                        onClick={() => handleRemove(fav.uid)}
                                    >
                                        ×
                                    </button>
                                </li>
                            ))
                        )}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

