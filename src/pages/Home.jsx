import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { Peoplecards } from "../components/peoplecards.jsx";
import  PlanetCards  from "../components/planetcards.jsx";

export const Home = () => {

  const {store, dispatch} =useGlobalReducer()

	return (
		<>
		<h1 className="text-danger mt-3">Characters</h1>
		<Peoplecards/>
		<h1 className="text-danger mt-3">Planets</h1>
		<PlanetCards/>

		</>
	);
}; 